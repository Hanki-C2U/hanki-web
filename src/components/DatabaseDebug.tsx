import React, { useState, useEffect } from 'react';
import { supabasase } from '../supabase_creds/supabase';

export const DatabaseDebug: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const testTableQueries = async () => {
    setLoading(true);
    setError(null);
    const testResults = [];

    // Test different table names
    const tablesToTest = [
      'mentor',
      'mentee', 
      'conversations',
      'messages',
      'sessions'
    ];

    for (const tableName of tablesToTest) {
      try {
        const { data, error, count } = await supabasase
          .from(tableName)
          .select('*', { count: 'exact', head: true });
        
        testResults.push({
          table: tableName,
          status: error ? 'ERROR' : 'SUCCESS',
          error: error?.message,
          count: count
        });
      } catch (err) {
        testResults.push({
          table: tableName,
          status: 'ERROR',
          error: err instanceof Error ? err.message : 'Unknown error',
          count: null
        });
      }
    }

    setResults(testResults);
    setLoading(false);
  };

  useEffect(() => {
    testTableQueries();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Database Connection Debug</h2>
      
      <button 
        onClick={testTableQueries}
        disabled={loading}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Tables'}
      </button>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="space-y-2">
        {results.map((result, index) => (
          <div 
            key={index}
            className={`p-3 rounded border ${
              result.status === 'SUCCESS' 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{result.table}</span>
              <span className={`px-2 py-1 rounded text-xs ${
                result.status === 'SUCCESS' 
                  ? 'bg-green-200 text-green-800' 
                  : 'bg-red-200 text-red-800'
              }`}>
                {result.status}
              </span>
            </div>
            {result.error && (
              <div className="text-sm text-red-600 mt-1">{result.error}</div>
            )}
            {result.count !== null && (
              <div className="text-sm text-gray-600 mt-1">Count: {result.count}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatabaseDebug;

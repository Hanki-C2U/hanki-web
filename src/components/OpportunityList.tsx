import React, { useState } from 'react';
import { Plus, Briefcase, GraduationCap } from 'lucide-react';
import OpportunityCard from './OpportunityCard';
import type { Opportunity } from './OpportunityCard';
import AddOpportunityModal from './AddOpportunityModal';

interface OpportunityListProps {
  opportunities: Opportunity[];
  onAddOpportunity: (opportunity: Omit<Opportunity, 'id'>) => void;
}

const OpportunityList: React.FC<OpportunityListProps> = ({
  opportunities,
  onAddOpportunity
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'job' | 'education'>('all');

  const filteredOpportunities = filter === 'all'
    ? opportunities
    : opportunities.filter(opp => opp.type === filter);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Opportunities</h2>

        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden bg-gray-100 rounded-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${filter === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('job')}
              className={`px-3 py-1.5 text-xs font-medium flex items-center transition-colors ${filter === 'job'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              <Briefcase className="h-3 w-3 mr-1" />
              Jobs
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-3 py-1.5 text-xs font-medium flex items-center transition-colors ${filter === 'education'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              <GraduationCap className="h-3 w-3 mr-1" />
              Education
            </button>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
          >
            <Plus className="h-3.5 w-3.5 mr-1" />
            Add Opportunity
          </button>
        </div>
      </div>

      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredOpportunities.map(opportunity => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
            />
          ))}
        </div>
      ) : (
        <div className="py-12 border-2 border-dashed border-gray-200 rounded-md flex flex-col items-center justify-center text-center">
          <p className="text-gray-500 mb-3">No opportunities found</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add an opportunity
          </button>
        </div>
      )}

      <AddOpportunityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={onAddOpportunity}
      />
    </div>
  );
};

export default OpportunityList;

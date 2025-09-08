import { supabasase } from '../supabase_creds/supabase';

export async function testSkillsTable() {
  try {
    console.log('Testing skills table...');
    
    // Test 1: List all available tables first
    console.log('Testing Supabase client connection...');
    const { data: testData, error: testError } = await supabasase
      .from('mentee')
      .select('supabaseId')
      .limit(1);
    
    if (testError) {
      console.error('Basic connection test failed:', testError);
    } else {
      console.log('Basic connection works, mentee table accessible');
    }
    
    // Test 2: Try skills table with different approaches
    console.log('Testing skills table access...');
    
    // Try direct query
    const { data, error } = await supabasase
      .from('skills')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('Skills table access failed:', error);
      
      // Try alternative table names
      const { data: data2, error: error2 } = await supabasase
        .from('Skills')
        .select('*')
        .limit(1);
        
      if (error2) {
        console.error('Skills (capitalized) also failed:', error2);
      } else {
        console.log('Skills (capitalized) worked:', data2);
      }
      
      return { success: false, error };
    }
    
    console.log('Skills table exists and is accessible:', data);
    return { success: true, data };
    
  } catch (error) {
    console.error('Error testing skills table:', error);
    return { success: false, error };
  }
}

// Export for debugging
export default testSkillsTable;

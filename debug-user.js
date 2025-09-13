// Quick script to debug user in database
// Add this to your Login.tsx temporarily for debugging

// Add this function to your Login.tsx file temporarily
const debugDatabaseUser = async (email, userId) => {
  console.log('🔍 DEBUG: Checking database for user:', { email, userId });
  
  try {
    // Check mentor table
    const { data: mentorData, error: mentorError } = await supabasase
      .from('mentor')
      .select('*')
      .eq('email', email);
    
    console.log('👨‍🏫 Mentor table check:', { mentorData, mentorError });
    
    // Check mentee table  
    const { data: menteeData, error: menteeError } = await supabasase
      .from('mentee')
      .select('*')
      .eq('email', email);
      
    console.log('👨‍🎓 Mentee table check:', { menteeData, menteeError });
    
    // Check by supabaseId
    const { data: mentorById, error: mentorByIdError } = await supabasase
      .from('mentor')
      .select('*')
      .eq('supabaseId', userId);
      
    console.log('� Mentor by supabaseId:', { mentorById, mentorByIdError });
    
    const { data: menteeById, error: menteeByIdError } = await supabasase
      .from('mentee')
      .select('*')
      .eq('supabaseId', userId);
      
    console.log('🆔 Mentee by supabaseId:', { menteeById, menteeByIdError });
    
    // Get sample records to see what's in the database
    const { data: sampleMentors } = await supabasase
      .from('mentor')
      .select('id, email, supabaseId, first_name, last_name')
      .limit(3);
      
    const { data: sampleMentees } = await supabasase
      .from('mentee')
      .select('id, email, supabaseId, first_name, last_name')
      .limit(3);
      
    console.log('📋 Sample mentor records:', sampleMentors);
    console.log('📋 Sample mentee records:', sampleMentees);
    
  } catch (error) {
    console.error('💥 Database debug error:', error);
  }
};

// INSTRUCTIONS:
// 1. Copy the debugDatabaseUser function above
// 2. Add it to your Login.tsx file 
// 3. Call it after successful login like this:
//    debugDatabaseUser(data.user.email, data.user.id);
// 4. Check browser console for detailed database info

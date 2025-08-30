import { supabasase } from '../supabase_creds/supabase';

/**
 * Utility functions for handling incomplete onboarding scenarios
 */

/**
 * Check if a user has completed onboarding by verifying they exist in mentor or mentee table
 */
export const checkUserOnboardingStatus = async (userId: string): Promise<{
  hasProfile: boolean;
  role: 'mentor' | 'mentee' | null;
  error?: string;
}> => {
  try {
    const [mentorCheck, menteeCheck] = await Promise.allSettled([
      supabasase.from('mentor').select('id').eq('supabaseId', userId).maybeSingle(),
      supabasase.from('mentee').select('id').eq('supabaseId', userId).maybeSingle()
    ]);

    if (mentorCheck.status === 'fulfilled' && mentorCheck.value.data) {
      return { hasProfile: true, role: 'mentor' };
    } else if (menteeCheck.status === 'fulfilled' && menteeCheck.value.data) {
      return { hasProfile: true, role: 'mentee' };
    } else {
      return { hasProfile: false, role: null };
    }
  } catch (error: any) {
    console.error('Error checking onboarding status:', error);
    return { hasProfile: false, role: null, error: error.message };
  }
};

/**
 * Clean up incomplete account - signs out user and clears any partial data
 */
export const cleanupIncompleteAccount = async (): Promise<{ success: boolean; error?: string }> => {
  try {
    // Sign out from Supabase
    const { error } = await supabasase.auth.signOut();
    if (error) {
      console.error('Error during cleanup signout:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error during account cleanup:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get user-friendly error messages for common onboarding issues
 */
export const getOnboardingErrorMessage = (error: any): string => {
  if (!error) return 'An unknown error occurred';
  
  const message = error.message || error.toString();
  
  // Handle common PostgreSQL/Supabase errors
  if (message.includes('duplicate key value violates unique constraint')) {
    if (message.includes('email')) {
      return 'An account with this email already exists. Please sign in instead or contact support.';
    }
    if (message.includes('phone_number')) {
      return 'An account with this phone number already exists. Please use a different number.';
    }
    return 'Some of your information conflicts with an existing account. Please check your details.';
  }
  
  if (message.includes('insert or update on table') && message.includes('violates foreign key constraint')) {
    return 'There was an issue linking your account. Please try again or contact support.';
  }
  
  if (message.includes('JWT expired') || message.includes('invalid JWT')) {
    return 'Your session has expired. Please sign in again to continue.';
  }
  
  if (message.includes('Failed to upload profile picture')) {
    return 'Failed to upload your profile picture. Please try with a different image or skip this step.';
  }
  
  if (message.includes('Failed to create mentor profile') || message.includes('Failed to create mentee profile')) {
    return 'Failed to create your profile. Please check your internet connection and try again.';
  }
  
  // Default fallback
  return `An error occurred: ${message}. Please try again or contact support if the problem persists.`;
};

export default {
  checkUserOnboardingStatus,
  cleanupIncompleteAccount,
  getOnboardingErrorMessage,
};

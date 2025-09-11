import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router';
import { createLinkedInUrl } from '../utils/linkedInUtils';

/**
 * LinkedIn Redirect Component
 * Handles routes like /linkedin/username and redirects to actual LinkedIn profile
 */
const LinkedInRedirect = () => {
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    if (username) {
      // Create the full LinkedIn URL
      const linkedInUrl = createLinkedInUrl(username);
      
      // Redirect to LinkedIn in a new tab/window
      window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
      
      // Optionally, you could redirect back to the previous page
      // For now, we'll redirect to home
      window.history.back();
    }
  }, [username]);

  // Show loading state while redirecting
  if (!username) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Redirecting to LinkedIn</h2>
        <p className="text-gray-600">Opening {username}'s LinkedIn profile...</p>
      </div>
    </div>
  );
};

export default LinkedInRedirect;

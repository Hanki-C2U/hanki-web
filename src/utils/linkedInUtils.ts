/**
 * Utility functions for LinkedIn URL handling
 */

/**
 * Extracts LinkedIn username from various LinkedIn URL formats
 * @param linkedInUrl - The LinkedIn URL (can be full URL or just username)
 * @returns LinkedIn username or null if invalid
 */
export const extractLinkedInUsername = (linkedInUrl: string): string | null => {
  if (!linkedInUrl) return null;

  // Remove whitespace
  const cleanUrl = linkedInUrl.trim();

  // If it's already just a username (no URL), return it
  if (!cleanUrl.includes('linkedin.com') && !cleanUrl.includes('/')) {
    return cleanUrl;
  }

  // Handle various LinkedIn URL formats:
  // https://www.linkedin.com/in/username
  // https://linkedin.com/in/username
  // www.linkedin.com/in/username
  // linkedin.com/in/username
  // /in/username
  
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([^\/\?]+)/i,
    /\/in\/([^\/\?]+)/i
  ];

  for (const pattern of patterns) {
    const match = cleanUrl.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

/**
 * Creates a full LinkedIn URL from username
 * @param username - LinkedIn username
 * @returns Full LinkedIn URL
 */
export const createLinkedInUrl = (username: string): string => {
  if (!username) return '';
  
  // If it's already a full URL, return as is
  if (username.startsWith('http')) {
    return username;
  }
  
  // Remove any leading slash or "in/" if present
  const cleanUsername = username.replace(/^(\/in\/|in\/|\/)/, '');
  
  return `https://www.linkedin.com/in/${cleanUsername}`;
};

/**
 * Creates an internal LinkedIn route
 * @param linkedInUrl - The LinkedIn URL or username
 * @returns Internal route like /linkedin/username
 */
export const createLinkedInRoute = (linkedInUrl: string): string | null => {
  const username = extractLinkedInUsername(linkedInUrl);
  if (!username) return null;
  
  return `/linkedin/${username}`;
};

// Mock implementation of current user service
export default async function getCurrentMentee() {
  const storedUser = localStorage.getItem("mockUser");
  if (!storedUser) throw new Error("No user signed in");

  const mockUser = JSON.parse(storedUser);

  // Get the user profile from localStorage
  const storedProfile = localStorage.getItem("mockUserProfile");
  if (!storedProfile) throw new Error("User profile not found");

  return JSON.parse(storedProfile);
}

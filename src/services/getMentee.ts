import { mockMentees } from "../data/mockData";

export default async function getMentee(id: string | undefined) {
  // First check if we have a stored profile (for the current user)
  const storedProfile = localStorage.getItem("mockUserProfile");
  const userType = localStorage.getItem("userType");

  if (storedProfile && userType === "mentee") {
    return JSON.parse(storedProfile);
  }

  // If looking for a specific mentee by ID
  if (id) {
    const mentee = mockMentees.find((m) => m.supabaseId === id);
    if (!mentee) throw new Error("Mentee not found");
    return mentee;
  }

  throw new Error("No mentee ID provided");
}

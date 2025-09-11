// Mock auth utilities to replace Supabase auth
import { mockCurrentUser, mockUsers, type MockUser } from "../data/mockData";

// Helper function to simulate async behavior
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface MockAuthResponse {
  data: {
    user: MockUser | null;
    session?: any;
  };
  error: Error | null;
}

// Mock auth functions
export const mockAuth = {
  // Get the current user
  getUser: async (): Promise<MockAuthResponse> => {
    await delay(300); // Simulate network delay
    return {
      data: {
        user: mockCurrentUser.user,
        session: mockCurrentUser.user ? { user: mockCurrentUser.user } : null,
      },
      error: null,
    };
  },

  // Get the current session
  getSession: async (): Promise<{ data: { session: any | null } }> => {
    await delay(300); // Simulate network delay
    return {
      data: {
        session: mockCurrentUser.user
          ? {
              user: mockCurrentUser.user,
            }
          : null,
      },
    };
  },

  // Sign in with OAuth (Google)
  signInWithOAuth: async ({
    provider,
  }: {
    provider: string;
    options?: any;
  }): Promise<MockAuthResponse> => {
    await delay(500); // Simulate network delay

    console.log(`Mock sign in with ${provider}`);

    // For demo purposes, always sign in as the first user
    mockCurrentUser.user = mockUsers[0];

    return {
      data: {
        user: mockCurrentUser.user,
        session: { user: mockCurrentUser.user },
      },
      error: null,
    };
  },

  // Sign out
  signOut: async (): Promise<{ error: null }> => {
    await delay(300); // Simulate network delay
    mockCurrentUser.user = null;
    return { error: null };
  },

  // Add listener for auth state changes
  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    // In a real implementation, this would set up listeners
    // For mock, we'll just return an empty cleanup function
    return {
      subscription: {
        unsubscribe: () => {},
      },
    };
  },
};

// Mock data functions
export const mockData = {
  // Get data from a mock table
  from: (tableName: string) => {
    return {
      // Select fields to return
      select: (fields?: string) => {
        return {
          // Filter by a field value
          eq: (field: string, value: any) => {
            return {
              // Return a single result
              single: async () => {
                await delay(300); // Simulate network delay

                if (tableName === "mentor") {
                  const mentor = mockUsers.find(
                    (u) => u.userType === "mentor" && u.id === value
                  );
                  return { data: mentor || null, error: null };
                } else if (tableName === "mentee") {
                  const mentee = mockUsers.find(
                    (u) => u.userType === "mentee" && u.id === value
                  );
                  return { data: mentee || null, error: null };
                }

                return { data: null, error: null };
              },
            };
          },
        };
      },
    };
  },
};

// Create a mock Supabase client with auth and data methods
export const mockSupabase = {
  auth: mockAuth,
  ...mockData,
};

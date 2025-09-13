import { supabasase } from '../supabase_creds/supabase';

export interface MentorData {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  phone_number: string;
  gender: string;
  profile_picture: string;
  location: string;
  joined: string;
  ratings: number;
  updateAt: string;
  last_login: string;
  expertise: string[];
  bio: string;
  experience: any[]; // JSON field
  resumeId: string;
  Github?: string;
  Instagram?: string;
  LinkedIn: string;
  Twitter?: string;
  Website?: string;
  supabaseId: string;
}

export interface SessionData {
  id: number;
  menteeId: string;
  mentorId: string;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  sessionDate: string;
  jitsiRoomId: string;
  meetingUrl?: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'CANCELLED' | 'COMPLETED' | 'NO_SHOW';
  statusUpdatedAt: string;
  statusUpdatedBy?: string;
  additionalParticipants: string[];
  notes?: string;
  feedback?: string;
  createdAt: string;
  cancellationReason?: string;
  menteeRating?: number;
  menteeReview?: string;
  mentorRating?: number;
  mentorReview?: string;
  // Include mentee data from relation
  mentee?: {
    first_name: string;
    last_name: string;
    profile_picture: string;
  };
}

export async function getMentorProfile(supabaseId: string): Promise<MentorData | null> {
  try {
    const { data, error } = await supabasase
      .from('mentor')
      .select('*')
      .eq('supabaseId', supabaseId)
      .single();

    if (error) {
      console.error('Error fetching mentor profile:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Unexpected error fetching mentor profile:', error);
    return null;
  }
}

export async function getMentorSessions(supabaseId: string): Promise<SessionData[]> {
  try {
    const { data, error } = await supabasase
      .from('sessions')
      .select(`
        *,
        mentee:menteeId (
          first_name,
          last_name,
          profile_picture
        )
      `)
      .eq('mentorId', supabaseId)
      .order('sessionDate', { ascending: true });

    if (error) {
      console.error('Error fetching mentor sessions:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Unexpected error fetching mentor sessions:', error);
    return [];
  }
}

export async function updateMentorProfile(supabaseId: string, updates: Partial<MentorData>): Promise<boolean> {
  try {
    const { error } = await supabasase
      .from('mentor')
      .update(updates)
      .eq('supabaseId', supabaseId);

    if (error) {
      console.error('Error updating mentor profile:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Unexpected error updating mentor profile:', error);
    return false;
  }
}
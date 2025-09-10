import { supabasase } from '../supabase_creds/supabase';

export interface MenteeSkill {
  id: number;
  name: string;
  goal: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  reflection: string;
  dateAdded: string;
  lastUpdated: string;
}

export interface MenteeProgress {
  id: number;
  supabaseId: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
  bio: string;
  joined: string;
  skills: MenteeSkill[];
  skillsStats: {
    total: number;
    completed: number;
    inProgress: number;
    notStarted: number;
  };
}

class MentorApiService {
  /**
   * Get all mentees assigned to a mentor with their skills progress
   */
  async getMenteesProgress(mentorId: string): Promise<MenteeProgress[]> {
    try {
      console.log('Fetching mentees for mentor:', mentorId);

      // First, get all mentees assigned to this mentor
      const { data: mentees, error: menteesError } = await supabasase
        .from('mentee')
        .select(`
          id,
          supabaseId,
          first_name,
          last_name,
          profile_picture,
          bio,
          joined,
          skills (
            id,
            name,
            goal,
            status,
            reflection,
            dateAdded,
            lastUpdated
          )
        `)
        .contains('mentor', [mentorId]); // Assuming mentor field contains array of mentor IDs

      if (menteesError) {
        console.error('Error fetching mentees:', menteesError);
        throw new Error('Failed to fetch mentees progress');
      }

      if (!mentees || mentees.length === 0) {
        console.log('No mentees found for mentor:', mentorId);
        return [];
      }

      // Transform the data and calculate stats
      const menteesProgress: MenteeProgress[] = mentees.map(mentee => {
        const skills = mentee.skills || [];
        
        const skillsStats = {
          total: skills.length,
          completed: skills.filter((skill: any) => skill.status === 'Completed').length,
          inProgress: skills.filter((skill: any) => skill.status === 'In Progress').length,
          notStarted: skills.filter((skill: any) => skill.status === 'Not Started').length,
        };

        return {
          id: mentee.id,
          supabaseId: mentee.supabaseId,
          first_name: mentee.first_name,
          last_name: mentee.last_name,
          profile_picture: mentee.profile_picture,
          bio: mentee.bio,
          joined: mentee.joined,
          skills: skills.map((skill: any) => ({
            id: skill.id,
            name: skill.name,
            goal: skill.goal,
            status: skill.status,
            reflection: skill.reflection,
            dateAdded: skill.dateAdded,
            lastUpdated: skill.lastUpdated,
          })),
          skillsStats,
        };
      });

      console.log(`Found ${menteesProgress.length} mentees with skills data`);
      return menteesProgress;

    } catch (error) {
      console.error('Error in getMenteesProgress:', error);
      throw error;
    }
  }

  /**
   * Get detailed progress for a specific mentee (if assigned to mentor)
   */
  async getMenteeDetailedProgress(mentorId: string, menteeId: string): Promise<MenteeProgress | null> {
    try {
      const { data: mentee, error } = await supabasase
        .from('mentee')
        .select(`
          id,
          supabaseId,
          first_name,
          last_name,
          profile_picture,
          bio,
          joined,
          location,
          experience,
          skills (
            id,
            name,
            goal,
            status,
            reflection,
            dateAdded,
            lastUpdated
          )
        `)
        .eq('supabaseId', menteeId)
        .contains('mentor', [mentorId]) // Verify mentor-mentee relationship
        .single();

      if (error) {
        console.error('Error fetching mentee details:', error);
        return null;
      }

      if (!mentee) {
        console.log('Mentee not found or not assigned to mentor');
        return null;
      }

      const skills = mentee.skills || [];
      const skillsStats = {
        total: skills.length,
        completed: skills.filter((skill: any) => skill.status === 'Completed').length,
        inProgress: skills.filter((skill: any) => skill.status === 'In Progress').length,
        notStarted: skills.filter((skill: any) => skill.status === 'Not Started').length,
      };

      return {
        id: mentee.id,
        supabaseId: mentee.supabaseId,
        first_name: mentee.first_name,
        last_name: mentee.last_name,
        profile_picture: mentee.profile_picture,
        bio: mentee.bio,
        joined: mentee.joined,
        skills: skills.map((skill: any) => ({
          id: skill.id,
          name: skill.name,
          goal: skill.goal,
          status: skill.status,
          reflection: skill.reflection,
          dateAdded: skill.dateAdded,
          lastUpdated: skill.lastUpdated,
        })),
        skillsStats,
      };

    } catch (error) {
      console.error('Error in getMenteeDetailedProgress:', error);
      throw error;
    }
  }

  /**
   * Get overview stats for all mentees assigned to a mentor
   */
  async getMentorOverviewStats(mentorId: string) {
    try {
      const menteesProgress = await this.getMenteesProgress(mentorId);
      
      const overallStats = {
        totalMentees: menteesProgress.length,
        totalSkills: menteesProgress.reduce((sum, mentee) => sum + mentee.skillsStats.total, 0),
        totalCompleted: menteesProgress.reduce((sum, mentee) => sum + mentee.skillsStats.completed, 0),
        totalInProgress: menteesProgress.reduce((sum, mentee) => sum + mentee.skillsStats.inProgress, 0),
        activeMentees: menteesProgress.filter(mentee => mentee.skillsStats.inProgress > 0).length,
      };

      return overallStats;

    } catch (error) {
      console.error('Error in getMentorOverviewStats:', error);
      throw error;
    }
  }
}

export const mentorApi = new MentorApiService();

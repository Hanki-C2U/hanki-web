import { supabasase } from '../supabase_creds/supabase';

export interface Skill {
  id: number;
  name: string;
  goal: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  reflection: string;
  dateAdded: string;
  lastUpdated: string;
  menteeId: string;
}

export interface CreateSkillData {
  name: string;
  goal: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  reflection: string;
}

export interface UpdateSkillData {
  goal?: string;
  status?: 'Not Started' | 'In Progress' | 'Completed';
  reflection?: string;
}

class SkillsApiService {
  /**
   * Get all skills for the authenticated mentee
   */
  async getAllSkills(menteeId: string): Promise<Skill[]> {
    try {
      const { data, error } = await supabasase
        .from('skills')
        .select('*')
        .eq('menteeId', menteeId)
        .order('dateAdded', { ascending: false });

      if (error) {
        console.error('Error fetching skills:', error);
        throw new Error('Failed to fetch skills');
      }

      return data || [];
    } catch (error) {
      console.error('Error in getAllSkills:', error);
      throw error;
    }
  }

  /**
   * Add a new skill for the mentee
   */
  async addSkill(menteeId: string, skillData: CreateSkillData): Promise<Skill> {
    try {
      const now = new Date().toISOString();
      
      const { data, error } = await supabasase
        .from('skills')
        .insert({
          ...skillData,
          menteeId,
          dateAdded: now,
          lastUpdated: now
        })
        .select()
        .single();

      if (error) {
        console.error('Error adding skill:', error);
        throw new Error('Failed to add skill');
      }

      return data;
    } catch (error) {
      console.error('Error in addSkill:', error);
      throw error;
    }
  }

  /**
   * Update an existing skill
   */
  async updateSkill(skillId: number, menteeId: string, updates: UpdateSkillData): Promise<Skill> {
    try {
      const now = new Date().toISOString();
      
      const { data, error } = await supabasase
        .from('skills')
        .update({
          ...updates,
          lastUpdated: now
        })
        .eq('id', skillId)
        .eq('menteeId', menteeId) // Ensure user can only update their own skills
        .select()
        .single();

      if (error) {
        console.error('Error updating skill:', error);
        throw new Error('Failed to update skill');
      }

      return data;
    } catch (error) {
      console.error('Error in updateSkill:', error);
      throw error;
    }
  }

  /**
   * Delete a skill
   */
  async deleteSkill(skillId: number, menteeId: string): Promise<void> {
    try {
      const { error } = await supabasase
        .from('skills')
        .delete()
        .eq('id', skillId)
        .eq('menteeId', menteeId); // Ensure user can only delete their own skills

      if (error) {
        console.error('Error deleting skill:', error);
        throw new Error('Failed to delete skill');
      }
    } catch (error) {
      console.error('Error in deleteSkill:', error);
      throw error;
    }
  }

  /**
   * Get skills statistics for dashboard
   */
  async getSkillsStats(menteeId: string) {
    try {
      const skills = await this.getAllSkills(menteeId);
      
      const stats = {
        total: skills.length,
        completed: skills.filter(skill => skill.status === 'Completed').length,
        inProgress: skills.filter(skill => skill.status === 'In Progress').length,
        notStarted: skills.filter(skill => skill.status === 'Not Started').length
      };

      return stats;
    } catch (error) {
      console.error('Error in getSkillsStats:', error);
      throw error;
    }
  }
}

export const skillsApi = new SkillsApiService();

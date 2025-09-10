import { useState, useEffect } from 'react';
import { skillsApi, type Skill, type CreateSkillData, type UpdateSkillData } from '../lib/skillsApi';

interface UseSkillsOptions {
  menteeId: string;
  autoFetch?: boolean;
}

export function useSkills({ menteeId, autoFetch = true }: UseSkillsOptions) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all skills
  const fetchSkills = async () => {
    if (!menteeId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await skillsApi.getAllSkills(menteeId);
      setSkills(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch skills');
      console.error('Error fetching skills:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new skill
  const addSkill = async (skillData: CreateSkillData) => {
    setError(null);
    
    try {
      const newSkill = await skillsApi.addSkill(menteeId, skillData);
      setSkills(prev => [newSkill, ...prev]);
      return newSkill;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to add skill';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  // Update an existing skill
  const updateSkill = async (skillId: number, updates: UpdateSkillData) => {
    setError(null);
    
    try {
      const updatedSkill = await skillsApi.updateSkill(skillId, menteeId, updates);
      setSkills(prev => 
        prev.map(skill => skill.id === skillId ? updatedSkill : skill)
      );
      return updatedSkill;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update skill';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  // Delete a skill
  const deleteSkill = async (skillId: number) => {
    setError(null);
    
    try {
      await skillsApi.deleteSkill(skillId, menteeId);
      setSkills(prev => prev.filter(skill => skill.id !== skillId));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete skill';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  // Get skills statistics
  const getStats = () => {
    const stats = {
      total: skills.length,
      completed: skills.filter(skill => skill.status === 'Completed').length,
      inProgress: skills.filter(skill => skill.status === 'In Progress').length,
      notStarted: skills.filter(skill => skill.status === 'Not Started').length
    };
    
    return stats;
  };

  // Auto-fetch on mount and when menteeId changes
  useEffect(() => {
    if (autoFetch && menteeId) {
      fetchSkills();
    }
  }, [menteeId, autoFetch]);

  return {
    skills,
    loading,
    error,
    fetchSkills,
    addSkill,
    updateSkill,
    deleteSkill,
    getStats,
    refetch: fetchSkills
  };
}

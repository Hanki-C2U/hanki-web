import { useState, useEffect } from 'react';
import { mentorApi, type MenteeProgress } from '../lib/mentorApi';

interface UseMentorProgressOptions {
  mentorId: string;
  autoFetch?: boolean;
}

export function useMentorProgress({ mentorId, autoFetch = true }: UseMentorProgressOptions) {
  const [mentees, setMentees] = useState<MenteeProgress[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [overviewStats, setOverviewStats] = useState({
    totalMentees: 0,
    totalSkills: 0,
    totalCompleted: 0,
    totalInProgress: 0,
    activeMentees: 0,
  });

  // Fetch all mentees with their progress
  const fetchMenteesProgress = async () => {
    if (!mentorId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const [menteesData, statsData] = await Promise.all([
        mentorApi.getMenteesProgress(mentorId),
        mentorApi.getMentorOverviewStats(mentorId)
      ]);
      
      setMentees(menteesData);
      setOverviewStats(statsData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch mentees progress';
      setError(errorMessage);
      console.error('Error fetching mentees progress:', err);
    } finally {
      setLoading(false);
    }
  };

  // Get detailed progress for a specific mentee
  const getMenteeDetails = async (menteeId: string) => {
    setError(null);
    
    try {
      const menteeDetails = await mentorApi.getMenteeDetailedProgress(mentorId, menteeId);
      return menteeDetails;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch mentee details';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  // Calculate progress statistics
  const getProgressStats = () => {
    return {
      ...overviewStats,
      completionRate: overviewStats.totalSkills > 0 
        ? Math.round((overviewStats.totalCompleted / overviewStats.totalSkills) * 100)
        : 0,
      engagementRate: overviewStats.totalMentees > 0
        ? Math.round((overviewStats.activeMentees / overviewStats.totalMentees) * 100)
        : 0,
    };
  };

  // Get mentees sorted by different criteria
  const getSortedMentees = (sortBy: 'name' | 'activity' | 'progress' = 'name') => {
    return [...mentees].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return `${a.first_name} ${a.last_name}`.localeCompare(`${b.first_name} ${b.last_name}`);
        case 'activity':
          return new Date(b.skills[0]?.lastUpdated || b.joined).getTime() - 
                 new Date(a.skills[0]?.lastUpdated || a.joined).getTime();
        case 'progress':
          return b.skillsStats.completed - a.skillsStats.completed;
        default:
          return 0;
      }
    });
  };

  // Filter mentees by activity status
  const getFilteredMentees = (filter: 'all' | 'active' | 'inactive' = 'all') => {
    switch (filter) {
      case 'active':
        return mentees.filter(mentee => mentee.skillsStats.inProgress > 0);
      case 'inactive':
        return mentees.filter(mentee => mentee.skillsStats.inProgress === 0);
      default:
        return mentees;
    }
  };

  // Auto-fetch on mount and when mentorId changes
  useEffect(() => {
    if (autoFetch && mentorId) {
      fetchMenteesProgress();
    }
  }, [mentorId, autoFetch]);

  return {
    mentees,
    loading,
    error,
    overviewStats: getProgressStats(),
    fetchMenteesProgress,
    getMenteeDetails,
    getSortedMentees,
    getFilteredMentees,
    refetch: fetchMenteesProgress,
  };
}

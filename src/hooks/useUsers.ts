import { useState, useEffect, useCallback } from 'react'
import { supabasase } from '../supabase_creds/supabase'

interface User {
  supabaseId: string
  first_name: string
  last_name: string
  email: string
  profile_picture: string
  location: string
  bio?: string
  expertise?: string[]
  goals?: string[]
  role: 'mentor' | 'mentee'
  joined: string
  ratings: number
}

export default function useUsers() {
  const [mentors, setMentors] = useState<User[]>([])
  const [mentees, setMentees] = useState<User[]>([])
  const [allUsers, setAllUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch all mentors
  const fetchMentors = useCallback(async () => {
    try {
      const { data, error } = await supabasase
        .from('mentor')
        .select(`
          supabaseId,
          first_name,
          last_name,
          email,
          profile_picture,
          location,
          bio,
          expertise,
          joined,
          ratings,
          experience
        `)
        .order('joined', { ascending: false })

      if (error) throw error

      const mentorsWithRole = data?.map(mentor => ({
        ...mentor,
        role: 'mentor' as const
      })) || []

      setMentors(mentorsWithRole)
      return mentorsWithRole
    } catch (err) {
      console.error('Error fetching mentors:', err)
      setError('Failed to fetch mentors')
      return []
    }
  }, [])

  // Fetch all mentees
  const fetchMentees = useCallback(async () => {
    try {
      const { data, error } = await supabasase
        .from('mentee')
        .select(`
          supabaseId,
          first_name,
          last_name,
          email,
          profile_picture,
          location,
          bio,
          goals,
          joined,
          ratings,
          experience
        `)
        .order('joined', { ascending: false })

      if (error) throw error

      const menteesWithRole = data?.map(mentee => ({
        ...mentee,
        role: 'mentee' as const
      })) || []

      setMentees(menteesWithRole)
      return menteesWithRole
    } catch (err) {
      console.error('Error fetching mentees:', err)
      setError('Failed to fetch mentees')
      return []
    }
  }, [])

  // Fetch all users (mentors + mentees)
  const fetchAllUsers = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const [mentorsData, menteesData] = await Promise.all([
        fetchMentors(),
        fetchMentees()
      ])

      const combined = [...mentorsData, ...menteesData]
      setAllUsers(combined)
      
      console.log('All users fetched successfully:', {
        mentors: mentorsData.length,
        mentees: menteesData.length,
        total: combined.length
      })

    } catch (err) {
      console.error('Error fetching all users:', err)
      setError('Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }, [fetchMentors, fetchMentees])

  // Fetch users on mount
  useEffect(() => {
    fetchAllUsers()
  }, [fetchAllUsers])

  // Get user by ID
  const getUserById = useCallback((supabaseId: string) => {
    return allUsers.find(user => user.supabaseId === supabaseId)
  }, [allUsers])

  // Get mentors by expertise
  const getMentorsByExpertise = useCallback((expertise: string) => {
    return mentors.filter(mentor => 
      mentor.expertise?.some(exp => 
        exp.toLowerCase().includes(expertise.toLowerCase())
      )
    )
  }, [mentors])

  // Get recommended mentors for a mentee based on goals
  const getRecommendedMentors = useCallback((menteeGoals: string[]) => {
    if (!menteeGoals?.length) return mentors.slice(0, 6) // Return first 6 if no goals

    const scored = mentors.map(mentor => {
      const matchingGoals = menteeGoals.filter(goal =>
        mentor.expertise?.some(exp =>
          exp.toLowerCase().includes(goal.toLowerCase()) ||
          goal.toLowerCase().includes(exp.toLowerCase())
        )
      )
      
      return {
        ...mentor,
        matchScore: matchingGoals.length
      }
    })

    // Sort by match score (descending) and ratings (descending)
    return scored
      .sort((a, b) => {
        if (a.matchScore !== b.matchScore) {
          return b.matchScore - a.matchScore
        }
        return b.ratings - a.ratings
      })
      .slice(0, 6) as (User & { matchScore: number })[]
  }, [mentors])

  return {
    mentors,
    mentees,
    allUsers,
    loading,
    error,
    fetchAllUsers,
    fetchMentors,
    fetchMentees,
    getUserById,
    getMentorsByExpertise,
    getRecommendedMentors
  }
}

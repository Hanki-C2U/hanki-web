import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  TrendingUp,
  Target,
  Award,
  Clock,
  CheckCircle,
  Star,
  ArrowLeft,
  Users,
  Video,
  Trophy,
  AlertCircle
} from "lucide-react";
import { AddGoalDialog } from "../components/AddGoalDialog";
import { GoalDetailDialog } from "../components/GoalDetailDialog";
import { AddSkillDialog } from "../components/AddSkillDialog";
import { SkillDetailDialog } from "../components/SkillDetailDialog";
import { useSkills } from "../hooks/useSkills";
import { supabasase } from "../supabase_creds/supabase";
import { testSkillsTable } from "../lib/testSkillsTable";

const ProgressTracking = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [menteeId, setMenteeId] = useState<string | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  // Get current user's mentee ID
  useEffect(() => {
    const getCurrentMenteeId = async () => {
      try {
        // Test skills table first
        const tableTest = await testSkillsTable();
        console.log('Skills table test result:', tableTest);
        
        // Try to get current authenticated user
        const { data: { user } } = await supabasase.auth.getUser();
        
        if (user) {
          // Use the authenticated user's ID
          setMenteeId(user.id);
          console.log('Using authenticated user ID:', user.id);
        } else {
          // Fallback: Get the first mentee from database for development
          const { data: mentees, error } = await supabasase
            .from('mentee')
            .select('supabaseId')
            .limit(1);
          
          if (mentees && mentees.length > 0) {
            setMenteeId(mentees[0].supabaseId);
            console.log('Using demo mentee ID:', mentees[0].supabaseId);
          } else {
            console.warn('No mentees found in database. Skills functionality will use mock data.');
            setMenteeId(null);
          }
        }
      } catch (error) {
        console.error('Error getting mentee ID:', error);
        setMenteeId(null);
      } finally {
        setIsLoadingUser(false);
      }
    };

    getCurrentMenteeId();
  }, []);
  
  // Use the custom hook for skills management (only if we have a menteeId)
  const {
    skills: dbSkills,
    loading: skillsLoading,
    error: skillsError,
    addSkill,
    updateSkill,
    refetch: refetchSkills
  } = useSkills({ 
    menteeId: menteeId || "", 
    autoFetch: !!menteeId 
  });

  // Fallback mock data for development when no valid mentee ID
  const mockSkills = [
    { 
      id: 1,
      name: "JavaScript", 
      goal: "Master ES6+ features and async programming to build modern web applications",
      status: "In Progress" as const,
      reflection: "I've been practicing daily with coding challenges. Still struggling with promises and async/await, but making good progress on arrow functions and destructuring.",
      dateAdded: "2024-01-15",
      lastUpdated: "2024-02-20"
    },
    { 
      id: 2,
      name: "React", 
      goal: "Build component-based UIs and understand state management patterns",
      status: "In Progress" as const, 
      reflection: "Completed a todo app project. Now working on understanding useEffect and custom hooks. Need more practice with state management.",
      dateAdded: "2024-01-20",
      lastUpdated: "2024-02-18"
    }
  ];

  // Use database skills if available, otherwise use mock data
  const skills = menteeId ? dbSkills : mockSkills;
  const isUsingMockData = !menteeId;

  // Mock data for other tabs (goals, badges, sessions)
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Transition to Software Engineering",
      progress: 75,
      status: "In Progress",
      dueDate: "March 2024",
      milestones: [
        { title: "Complete JavaScript Fundamentals", completed: true },
        { title: "Build Portfolio Project", completed: true },
        { title: "Technical Interview Practice", completed: false },
        { title: "Apply to 10 Companies", completed: false }
      ]
    },
    {
      id: 2,
      title: "Build Professional Network",
      progress: 60,
      status: "In Progress",
      dueDate: "February 2024",
      milestones: [
        { title: "Connect with 50 Professionals", completed: true },
        { title: "Attend 3 Industry Events", completed: true },
        { title: "Schedule 5 Informational Interviews", completed: false },
        { title: "Join Professional Organizations", completed: false }
      ]
    },
    {
      id: 3,
      title: "Develop Leadership Skills",
      progress: 40,
      status: "In Progress",
      dueDate: "June 2024",
      milestones: [
        { title: "Complete Leadership Course", completed: true },
        { title: "Lead Team Project", completed: false },
        { title: "Mentor Junior Colleagues", completed: false },
        { title: "Present at Industry Conference", completed: false }
      ]
    }
  ]);

  const badges = [
    { id: 1, name: "First Session Complete", icon: "🎯", earned: true, date: "Jan 15, 2024" },
    { id: 2, name: "Goal Setter", icon: "📋", earned: true, date: "Jan 10, 2024" },
    { id: 3, name: "Network Builder", icon: "🤝", earned: true, date: "Jan 20, 2024" },
    { id: 4, name: "Knowledge Seeker", icon: "📚", earned: true, date: "Jan 25, 2024" },
    { id: 5, name: "Mentor Favorite", icon: "⭐", earned: false, date: null },
    { id: 6, name: "Career Changer", icon: "🚀", earned: false, date: null },
    { id: 7, name: "Interview Master", icon: "💼", earned: false, date: null },
    { id: 8, name: "Industry Expert", icon: "🏆", earned: false, date: null }
  ];

  const sessions = [
    {
      id: 1,
      mentor: "Dr. Emmanuel Ntagungira",
      date: "Jan 15, 2024",
      topic: "Career Transition Planning",
      duration: "60 min",
      rating: 5,
      notes: "Excellent session on mapping out career transition steps. Dr. Emmanuel provided specific resources and action items."
    },
    {
      id: 2,
      mentor: "Sarah Mukamana",
      date: "Jan 22, 2024",
      topic: "Product Management Fundamentals",
      duration: "45 min",
      rating: 5,
      notes: "Great overview of PM role and responsibilities. Received framework for analyzing product decisions."
    },
    {
      id: 3,
      mentor: "Marie Claire Uwimana",
      date: "Jan 29, 2024",
      topic: "Digital Marketing Strategy",
      duration: "60 min",
      rating: 4,
      notes: "Learned about social media marketing strategies and analytics. Need to implement learnings in practice project."
    }
  ];

  const [selectedGoal, setSelectedGoal] = useState<typeof goals[0] | null>(null);
  const [goalDetailOpen, setGoalDetailOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);
  const [skillDetailOpen, setSkillDetailOpen] = useState(false);

  const handleAddGoal = (newGoal: Omit<typeof goals[0], 'id'>) => {
    const newId = Math.max(...goals.map(g => g.id), 0) + 1;
    const goal = {
      id: newId,
      ...newGoal
    };
    setGoals([...goals, goal]);
  };

  const handleUpdateGoal = (goalId: number, updates: Partial<typeof goals[0]>) => {
    setGoals(goals.map(goal =>
      goal.id === goalId ? { ...goal, ...updates } : goal
    ));
  };

  const handleAddSkill = async (skillData: { name: string; goal: string; status: "Not Started" | "In Progress" | "Completed"; reflection: string }) => {
    if (!menteeId || isUsingMockData) {
      console.warn('Cannot add skill: No valid mentee ID. This feature requires a valid user account.');
      alert('Skills management requires a valid user account. Please log in or ensure you have an account in the system.');
      return;
    }

    try {
      await addSkill(skillData);
    } catch (error) {
      console.error('Failed to add skill:', error);
      alert('Failed to add skill. Please try again.');
    }
  };

  const handleGoalClick = (goal: typeof goals[0]) => {
    setSelectedGoal(goal);
    setGoalDetailOpen(true);
  };

  const handleSkillClick = (skill: typeof skills[0]) => {
    setSelectedSkill(skill);
    setSkillDetailOpen(true);
  };

  const handleUpdateSkill = async (skillId: number, updates: any) => {
    if (!menteeId || isUsingMockData) {
      console.warn('Cannot update skill: No valid mentee ID. This feature requires a valid user account.');
      alert('Skills management requires a valid user account. Please log in or ensure you have an account in the system.');
      return;
    }

    try {
      await updateSkill(skillId, updates);
      setSkillDetailOpen(false);
    } catch (error) {
      console.error('Failed to update skill:', error);
      alert('Failed to update skill. Please try again.');
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/mentee-dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold">Progress Tracking</h1>
            </div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              SkillsConnect
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Video className="h-8 w-8 text-orange-500" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Hours of Mentoring</p>
                  <p className="text-2xl font-bold">18</p>
                </div>
                <Clock className="h-8 w-8 text-amber-500" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Goals Achieved</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Target className="h-8 w-8 text-green-500" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Badges Earned</p>
                  <p className="text-2xl font-bold">4</p>
                </div>
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <button
              onClick={() => setActiveTab("goals")}
              className={`flex items-center justify-center gap-2 h-10 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-md ${activeTab === "goals"
                ? "bg-white shadow-sm border border-gray-200"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <Target className="h-4 w-4" />
              Goals
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`flex items-center justify-center gap-2 h-10 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-md ${activeTab === "skills"
                ? "bg-white shadow-sm border border-gray-200"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <TrendingUp className="h-4 w-4" />
              Skills
            </button>
            <button
              onClick={() => setActiveTab("badges")}
              className={`flex items-center justify-center gap-2 h-10 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-md ${activeTab === "badges"
                ? "bg-white shadow-sm border border-gray-200"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <Award className="h-4 w-4" />
              Badges
            </button>
            <button
              onClick={() => setActiveTab("sessions")}
              className={`flex items-center justify-center gap-2 h-10 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-md ${activeTab === "sessions"
                ? "bg-white shadow-sm border border-gray-200"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <Users className="h-4 w-4" />
              Sessions
            </button>
          </div>

          {/* Goals Tab */}
          {activeTab === "goals" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Career Goals</h2>
                <AddGoalDialog onAddGoal={handleAddGoal} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {goals.map((goal) => (
                  <div key={goal.id} className="rounded-lg border border-gray-200 bg-white shadow-sm cursor-pointer hover:shadow-lg transition-all duration-200" onClick={() => handleGoalClick(goal)}>
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">{goal.title}</h3>
                          <p className="text-sm text-gray-600">Due: {goal.dueDate}</p>
                        </div>
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${goal.status === "Completed"
                          ? "border-transparent bg-green-100 text-green-800"
                          : "border-transparent bg-gray-100 text-gray-800"
                          }`}>
                          {goal.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-gray-600">{goal.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${goal.progress}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Milestones</h4>
                        <div className="space-y-2">
                          {goal.milestones.map((milestone, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle
                                className={`h-4 w-4 ${milestone.completed
                                  ? 'text-green-500'
                                  : 'text-gray-400'
                                  }`}
                              />
                              <span
                                className={`text-sm ${milestone.completed
                                  ? 'text-gray-900 line-through'
                                  : 'text-gray-600'
                                  }`}
                              >
                                {milestone.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Skill Development & Self-Reflection</h2>
                  <p className="text-gray-600 mt-1">Track your learning journey and reflect on your progress</p>
                </div>
                <AddSkillDialog onAddSkill={handleAddSkill} />
              </div>

              {/* User Status Info */}
              {isLoadingUser && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                  <p className="text-blue-700">Loading user information...</p>
                </div>
              )}

              {isUsingMockData && !isLoadingUser && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="text-yellow-700 font-medium">Demo Mode</p>
                    <p className="text-yellow-600 text-sm">You're viewing sample data. Log in to manage your own skills.</p>
                  </div>
                </div>
              )}

              {/* Error Display */}
              {skillsError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <p className="text-red-700">{skillsError}</p>
                  <button 
                    onClick={refetchSkills}
                    className="ml-auto text-red-600 hover:text-red-800 font-medium"
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Loading State */}
              {skillsLoading && (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                  <span className="ml-2 text-gray-600">Loading your skills...</span>
                </div>
              )}

              {/* Skills Grid */}
              {!skillsLoading && (
                <>
                  {skills.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {skills.map((skill) => (
                        <div key={skill.id} className="rounded-lg border border-gray-200 bg-white shadow-sm cursor-pointer hover:shadow-lg transition-all duration-200" onClick={() => handleSkillClick(skill)}>
                          <div className="p-6">
                            <div className="space-y-4">
                              <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                                  skill.status === "Completed"
                                    ? "border-transparent bg-green-100 text-green-800"
                                    : skill.status === "In Progress"
                                    ? "border-transparent bg-blue-100 text-blue-800"
                                    : "border-transparent bg-gray-100 text-gray-800"
                                  }`}>
                                  {skill.status}
                                </span>
                              </div>
                              
                              <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Goal:</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{skill.goal}</p>
                              </div>

                              {skill.reflection && (
                                <div>
                                  <h4 className="text-sm font-medium text-gray-700 mb-2">Current Reflection:</h4>
                                  <p className="text-sm text-gray-600 leading-relaxed italic">"{skill.reflection}"</p>
                                </div>
                              )}

                              <div className="flex justify-between text-xs text-gray-500 pt-2 border-t">
                                <span>Added: {new Date(skill.dateAdded).toLocaleDateString()}</span>
                                <span>Updated: {new Date(skill.lastUpdated).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No skills tracked yet</h3>
                      <p className="text-gray-600 mb-4">Start your learning journey by adding your first skill to track!</p>
                      <AddSkillDialog onAddSkill={handleAddSkill} />
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* Badges Tab */}
          {activeTab === "badges" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Achievement Badges</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`rounded-lg border border-gray-200 bg-white shadow-sm text-center ${badge.earned ? 'bg-gradient-to-br from-orange-50 to-blue-50' : 'opacity-60'
                      }`}
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-3">{badge.icon}</div>
                      <h3 className="font-semibold mb-2">{badge.name}</h3>
                      {badge.earned ? (
                        <div>
                          <span className="inline-flex items-center rounded-full border-transparent bg-green-100 text-green-800 px-2.5 py-0.5 text-xs font-semibold mb-2">
                            Earned
                          </span>
                          <p className="text-xs text-gray-600">{badge.date}</p>
                        </div>
                      ) : (
                        <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          Not Earned
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sessions Tab */}
          {activeTab === "sessions" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Mentoring Sessions</h2>

              <div className="space-y-4">
                {sessions.map((session) => (
                  <div key={session.id} className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{session.topic}</h3>
                          <p className="text-blue-600 font-medium">{session.mentor}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            {[...Array(session.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-sm text-gray-600">{session.date}</p>
                          <p className="text-sm text-gray-600">{session.duration}</p>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Session Notes</h4>
                        <p className="text-sm text-gray-600">{session.notes}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Goal Detail Dialog */}
        <GoalDetailDialog
          goal={selectedGoal}
          open={goalDetailOpen}
          onOpenChange={setGoalDetailOpen}
          onUpdateGoal={handleUpdateGoal}
        />

        {/* Skill Detail Dialog */}
        <SkillDetailDialog
          skill={selectedSkill}
          open={skillDetailOpen}
          onOpenChange={setSkillDetailOpen}
          onUpdateSkill={handleUpdateSkill}
        />
      </main>
    </div>
  );
};

export default ProgressTracking;

import { useState, useEffect } from 'react';
import { Users, TrendingUp, Target, Clock, Search, Filter, BookOpen, Eye } from 'lucide-react';
import { useMentorProgress } from '../hooks/useMentorProgress';
import { ReadOnlySkillCard, ReadOnlySkillDetailModal } from '../components/ReadOnlySkillCard';
import type { MenteeProgress, MenteeSkill } from '../lib/mentorApi';

export function MentorProgressView() {
  const {
    mentees,
    mentorStats,
    loading,
    error,
    fetchMentees,
    sortBy,
    setSortBy,
    filterBy,
    setFilterBy
  } = useMentorProgress();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMentee, setSelectedMentee] = useState<MenteeProgress | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<MenteeSkill | null>(null);

  useEffect(() => {
    fetchMentees();
  }, [fetchMentees]);

  const filteredMentees = mentees.filter(mentee =>
    mentee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewMenteeDetails = (mentee: MenteeProgress) => {
    setSelectedMentee(mentee);
  };

  const handleViewSkillDetails = (skill: MenteeSkill) => {
    setSelectedSkill(skill);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600">Loading mentee progress...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center gap-2 text-red-800">
          <Target className="w-5 h-5" />
          <h3 className="font-medium">Unable to Load Progress</h3>
        </div>
        <p className="text-red-700 mt-2">{error}</p>
        <button
          onClick={fetchMentees}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <Eye className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mentee Progress Overview</h1>
            <p className="text-gray-600">Monitor your mentees' skill development journey</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Total Mentees</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">{mentorStats.totalMentees}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-600">Active Skills</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">{mentorStats.totalActiveSkills}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-600">Completed Skills</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">{mentorStats.totalCompletedSkills}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-gray-600">Avg. Completion</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">{mentorStats.averageProgress}%</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search mentees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Sort by Name</option>
            <option value="lastActivity">Sort by Activity</option>
            <option value="progress">Sort by Progress</option>
          </select>
          
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Mentees</option>
            <option value="active">Active Skills</option>
            <option value="completed">Completed Skills</option>
          </select>
        </div>
      </div>

      {/* Mentees List */}
      {filteredMentees.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No mentees found</h3>
          <p className="text-gray-600">
            {searchTerm ? 'Try adjusting your search criteria.' : 'Your mentees will appear here once they start tracking skills.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredMentees.map((mentee) => (
            <div key={mentee.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{mentee.name}</h3>
                    <p className="text-sm text-gray-600">{mentee.email}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>{mentee.skillsCount} skills</span>
                      <span>{mentee.completedSkills} completed</span>
                      <span>Last activity: {new Date(mentee.lastActivity).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleViewMenteeDetails(mentee)}
                    className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
                  >
                    View Details
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Overall Progress</span>
                    <span className="font-medium">{mentee.progressPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${mentee.progressPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Recent Skills */}
                {mentee.recentSkills.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Skills</h4>
                    <div className="space-y-2">
                      {mentee.recentSkills.slice(0, 2).map((skill) => (
                        <div key={skill.id} className="flex items-center justify-between text-sm">
                          <span className="text-gray-700 truncate flex-1">{skill.name}</span>
                          <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                            skill.status === 'Completed' 
                              ? 'bg-green-100 text-green-800'
                              : skill.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {skill.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mentee Detail Modal */}
      {selectedMentee && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setSelectedMentee(null)}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between p-6 pb-4 border-b">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{selectedMentee.name}'s Skills</h2>
                <p className="text-gray-600 mt-1">{selectedMentee.email}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span>{selectedMentee.skillsCount} total skills</span>
                  <span>{selectedMentee.completedSkills} completed</span>
                  <span>{selectedMentee.progressPercentage}% overall progress</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedMentee(null)}
                className="w-8 h-8 rounded-md hover:bg-gray-100 flex items-center justify-center"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              {selectedMentee.recentSkills.length === 0 ? (
                <div className="text-center py-8">
                  <BookOpen className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">No skills tracked yet</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {selectedMentee.recentSkills.map((skill) => (
                    <ReadOnlySkillCard
                      key={skill.id}
                      skill={skill}
                      onClick={() => handleViewSkillDetails(skill)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skill Detail Modal */}
      <ReadOnlySkillDetailModal
        skill={selectedSkill}
        menteeName={selectedMentee?.name || ''}
        open={!!selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </div>
  );
}

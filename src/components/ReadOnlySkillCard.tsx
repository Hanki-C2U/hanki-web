import { Eye, Calendar, Target } from 'lucide-react';
import type { MenteeSkill } from '../lib/mentorApi';

interface ReadOnlySkillCardProps {
  skill: MenteeSkill;
  onClick?: () => void;
}

export function ReadOnlySkillCard({ skill, onClick }: ReadOnlySkillCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'border-transparent bg-green-100 text-green-800';
      case 'In Progress':
        return 'border-transparent bg-blue-100 text-blue-800';
      default:
        return 'border-transparent bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      className={`rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 ${
        onClick ? 'cursor-pointer hover:shadow-lg' : ''
      }`}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900">{skill.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getStatusColor(skill.status)}`}>
                  {skill.status}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(skill.lastUpdated).toLocaleDateString()}
                </span>
              </div>
            </div>
            {onClick && (
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Eye className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
              <Target className="w-4 h-4" />
              Learning Goal
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-md">
              {skill.goal}
            </p>
          </div>

          {skill.reflection && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Mentee's Reflection
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed italic bg-blue-50 p-3 rounded-md border-l-4 border-blue-200">
                "{skill.reflection}"
              </p>
            </div>
          )}

          <div className="flex justify-between text-xs text-gray-500 pt-2 border-t">
            <span>Started: {new Date(skill.dateAdded).toLocaleDateString()}</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              Read-Only View
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ReadOnlySkillDetailModalProps {
  skill: MenteeSkill | null;
  menteeName: string;
  open: boolean;
  onClose: () => void;
}

export function ReadOnlySkillDetailModal({ skill, menteeName, open, onClose }: ReadOnlySkillDetailModalProps) {
  if (!skill || !open) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'border-transparent bg-green-100 text-green-800';
      case 'In Progress':
        return 'border-transparent bg-blue-100 text-blue-800';
      default:
        return 'border-transparent bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex flex-col space-y-1.5 p-6 pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Mentee Progress View</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                {skill.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {menteeName}'s skill development
              </p>
              <div className="flex items-center gap-4 mt-3">
                <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${getStatusColor(skill.status)}`}>
                  {skill.status}
                </span>
                <span className="text-sm text-gray-500">
                  Started: {new Date(skill.dateAdded).toLocaleDateString()}
                </span>
                <span className="text-sm text-gray-500">
                  Updated: {new Date(skill.lastUpdated).toLocaleDateString()}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="space-y-6 p-6 pt-0">
          <div>
            <label className="text-sm font-medium leading-none text-gray-700 block mb-3">
              Learning Goal
            </label>
            <div className="bg-gray-50 p-4 rounded-md border">
              <p className="text-sm text-gray-700 leading-relaxed">
                {skill.goal}
              </p>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium leading-none text-gray-700 block mb-3">
              Current Status
            </label>
            <span className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${getStatusColor(skill.status)}`}>
              {skill.status}
            </span>
          </div>

          <div>
            <label className="text-sm font-medium leading-none text-gray-700 block mb-3">
              Mentee's Self-Reflection
            </label>
            <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-200">
              {skill.reflection ? (
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{skill.reflection}"
                </p>
              ) : (
                <p className="text-sm text-gray-500 italic">
                  No reflection notes added yet.
                </p>
              )}
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
            <div className="flex items-start gap-2">
              <Eye className="w-4 h-4 text-amber-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-amber-800">Mentor View - Read Only</p>
                <p className="text-xs text-amber-700 mt-1">
                  This information was self-reported by {menteeName}. Use this context to guide your mentoring discussions.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center h-10 px-6 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-600 text-white hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

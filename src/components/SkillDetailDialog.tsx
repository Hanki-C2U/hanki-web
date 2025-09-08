
import { useState, useEffect } from "react";
import { TrendingUp, X, Edit3 } from "lucide-react";

interface Skill {
  id: number;
  name: string;
  goal: string;
  status: "Not Started" | "In Progress" | "Completed";
  reflection: string;
  dateAdded: string;
  lastUpdated: string;
}

interface SkillDetailDialogProps {
  skill: Skill | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateSkill: (skillId: number, updates: Partial<Skill>) => void;
}

export function SkillDetailDialog({ skill, open, onOpenChange, onUpdateSkill }: SkillDetailDialogProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [goal, setGoal] = useState("");
  const [status, setStatus] = useState<Skill["status"]>("Not Started");
  const [reflection, setReflection] = useState("");

  // Sync local state with prop changes when skill changes
  useEffect(() => {
    if (skill) {
      setGoal(skill.goal);
      setStatus(skill.status);
      setReflection(skill.reflection);
      setIsEditing(false);
    }
  }, [skill]);

  const handleSave = () => {
    if (skill) {
      onUpdateSkill(skill.id, { 
        goal: goal.trim(),
        status,
        reflection: reflection.trim()
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    if (skill) {
      setGoal(skill.goal);
      setStatus(skill.status);
      setReflection(skill.reflection);
      setIsEditing(false);
    }
  };

  if (!skill) return null;

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => onOpenChange(false)}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    {skill.name}
                  </h2>
                  <div className="flex items-center gap-4 mt-2">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                      skill.status === "Completed"
                        ? "border-transparent bg-green-100 text-green-800"
                        : skill.status === "In Progress"
                        ? "border-transparent bg-blue-100 text-blue-800"
                        : "border-transparent bg-gray-100 text-gray-800"
                      }`}>
                      {status}
                    </span>
                    <span className="text-xs text-gray-500">
                      Added: {new Date(skill.dateAdded).toLocaleDateString()}
                    </span>
                    <span className="text-xs text-gray-500">
                      Updated: {new Date(skill.lastUpdated).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    onClick={() => onOpenChange(false)}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 p-6 pt-0">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium leading-none text-gray-700 block mb-2">
                    Learning Goal
                  </label>
                  {isEditing ? (
                    <textarea
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      rows={3}
                      className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-md">
                      {goal}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium leading-none text-gray-700 block mb-2">
                    Status
                  </label>
                  {isEditing ? (
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as Skill["status"])}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  ) : (
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${
                      status === "Completed"
                        ? "border-transparent bg-green-100 text-green-800"
                        : status === "In Progress"
                        ? "border-transparent bg-blue-100 text-blue-800"
                        : "border-transparent bg-gray-100 text-gray-800"
                      }`}>
                      {status}
                    </span>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium leading-none text-gray-700 block mb-2">
                    Self-Reflection
                  </label>
                  {isEditing ? (
                    <textarea
                      value={reflection}
                      onChange={(e) => setReflection(e.target.value)}
                      placeholder="Share your thoughts, progress, challenges, and insights about learning this skill..."
                      rows={4}
                      className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="bg-gray-50 p-3 rounded-md">
                      {reflection ? (
                        <p className="text-sm text-gray-600 leading-relaxed italic">
                          "{reflection}"
                        </p>
                      ) : (
                        <p className="text-sm text-gray-400 italic">
                          No reflection added yet. Click edit to share your thoughts about this skill.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {isEditing ? (
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4 border-t">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-sm font-medium mb-2 sm:mb-0"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-orange-500 text-white hover:bg-orange-600"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t">
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-orange-500 text-white hover:bg-orange-600"
                  >
                    <Edit3 className="h-4 w-4 mr-2" />
                    Update Progress & Reflection
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

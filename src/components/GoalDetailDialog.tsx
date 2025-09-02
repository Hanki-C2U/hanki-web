import { useState } from "react";
import { CheckCircle, Plus, Target, X } from "lucide-react";

interface Goal {
  id: number;
  title: string;
  progress: number;
  status: string;
  dueDate: string;
  milestones: Array<{ title: string; completed: boolean }>;
}

interface GoalDetailDialogProps {
  goal: Goal | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateGoal: (goalId: number, updates: Partial<Goal>) => void;
}

export function GoalDetailDialog({ goal, open, onOpenChange, onUpdateGoal }: GoalDetailDialogProps) {
  const [newSubGoal, setNewSubGoal] = useState("");

  if (!goal) return null;

  // Calculate current progress dynamically based on milestones
  const completedCount = goal.milestones.filter(m => m.completed).length;
  const currentProgress = goal.milestones.length > 0 ? Math.round((completedCount / goal.milestones.length) * 100) : 0;

  const handleMilestoneToggle = (milestoneIndex: number) => {
    const updatedMilestones = [...goal.milestones];
    updatedMilestones[milestoneIndex].completed = !updatedMilestones[milestoneIndex].completed;

    // Calculate new progress
    const completedCount = updatedMilestones.filter(m => m.completed).length;
    const progress = Math.round((completedCount / updatedMilestones.length) * 100);

    onUpdateGoal(goal.id, {
      milestones: updatedMilestones,
      progress,
      status: progress === 100 ? "Completed" : "In Progress"
    });
  };

  const handleAddSubGoal = () => {
    if (!newSubGoal.trim()) return;

    const updatedMilestones = [
      ...goal.milestones,
      { title: newSubGoal.trim(), completed: false }
    ];

    // Recalculate progress
    const completedCount = updatedMilestones.filter(m => m.completed).length;
    const progress = Math.round((completedCount / updatedMilestones.length) * 100);

    onUpdateGoal(goal.id, {
      milestones: updatedMilestones,
      progress
    });

    setNewSubGoal("");
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => onOpenChange(false)}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    {goal.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Due: {goal.dueDate}
                  </p>
                </div>
                <button
                  onClick={() => onOpenChange(false)}
                  className="inline-flex items-center justify-center w-6 h-6 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-6 p-6 pt-0">
              {/* Progress Overview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{currentProgress}%</span>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${currentProgress === 100
                      ? "border-transparent bg-green-100 text-green-800"
                      : "border-transparent bg-gray-100 text-gray-800"
                      }`}>
                      {currentProgress === 100 ? "Completed" : "In Progress"}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${currentProgress}%` }}
                  />
                </div>
              </div>

              {/* Milestones */}
              <div className="space-y-4">
                <h4 className="font-medium">Milestones & Sub-goals</h4>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {goal.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
                      <div className="relative">
                        <input
                          type="checkbox"
                          id={`milestone-${index}`}
                          checked={milestone.completed}
                          onChange={() => handleMilestoneToggle(index)}
                          className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 focus:ring-2"
                        />
                      </div>
                      <label
                        htmlFor={`milestone-${index}`}
                        className={`flex-1 cursor-pointer text-sm font-medium leading-none ${milestone.completed
                          ? 'line-through text-gray-500'
                          : 'text-gray-900'
                          }`}
                      >
                        {milestone.title}
                      </label>
                      {milestone.completed && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Add new sub-goal */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a new sub-goal or milestone..."
                    value={newSubGoal}
                    onChange={(e) => setNewSubGoal(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSubGoal()}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <button
                    onClick={handleAddSubGoal}
                    disabled={!newSubGoal.trim()}
                    className={`inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${!newSubGoal.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                      }`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">
                    {goal.milestones.filter(m => m.completed).length}
                  </div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-500">
                    {goal.milestones.filter(m => !m.completed).length}
                  </div>
                  <div className="text-sm text-gray-600">Remaining</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {goal.milestones.length}
                  </div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
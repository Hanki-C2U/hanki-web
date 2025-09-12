import { useState } from "react";
import { Target, Plus, X } from "lucide-react";

interface Goal {
  id: number;
  title: string;
  description?: string;
  progress: number;
  status: string;
  dueDate: string;
  milestones: Array<{ title: string; completed: boolean }>;
}

interface AddGoalDialogProps {
  onAddGoal: (goal: Omit<Goal, 'id'>) => void;
}

export function AddGoalDialog({ onAddGoal }: AddGoalDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [milestones, setMilestones] = useState<string[]>([""]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !dueDate) return;

    const newGoal = {
      title: title.trim(),
      description: description.trim(),
      progress: 0,
      status: "In Progress",
      dueDate,
      milestones: milestones
        .filter(m => m.trim())
        .map(m => ({ title: m.trim(), completed: false }))
    };

    onAddGoal(newGoal);

    // Reset form
    setTitle("");
    setDescription("");
    setDueDate("");
    setMilestones([""]);
    setOpen(false);
  };

  const addMilestone = () => {
    setMilestones([...milestones, ""]);
  };

  const updateMilestone = (index: number, value: string) => {
    const updated = [...milestones];
    updated[index] = value;
    setMilestones(updated);
  };

  const removeMilestone = (index: number) => {
    setMilestones(milestones.filter((_, i) => i !== index));
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 h-10 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      >
        <Target className="h-4 w-4" />
        Add New Goal
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className='flex flex-col space-y-1.5 p-6 pb-4'>
              <div className='flex items-start justify-between'>
                <div>

                  <h2 className="text-lg font-semibold">Add New Career Goal</h2>
                  <p className="text-sm text-gray-600">
                    Create a new goal to track your career progress. Add milestones to break it down into manageable steps.
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-6 h-6 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 p-6 pt-0">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium leading-none">
                  Goal Title *
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Transition to Product Management"
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium leading-none">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your goal and what success looks like..."
                  rows={3}
                  className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="dueDate" className="text-sm font-medium leading-none">
                  Target Date *
                </label>
                <input
                  id="dueDate"
                  type="month"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Milestones</label>
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={milestone}
                      onChange={(e) => updateMilestone(index, e.target.value)}
                      placeholder={`Milestone ${index + 1}`}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    {milestones.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMilestone(index)}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 text-sm font-medium"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addMilestone}
                  className="w-full inline-flex items-center justify-center gap-2 h-9 px-3 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 text-sm font-medium"
                >
                  <Plus className="h-4 w-4" />
                  Add Milestone
                </button>
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 text-sm font-medium mb-2 sm:mb-0"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!title.trim() || !dueDate}
                  className={`inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${!title.trim() || !dueDate
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                    }`}
                >
                  Create Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
import { useState } from "react";
import { TrendingUp, Plus, X } from "lucide-react";

interface Skill {
  name: string;
  goal: string;
  status: "Not Started" | "In Progress" | "Completed";
  reflection: string;
}

interface AddSkillDialogProps {
  onAddSkill: (skill: Skill) => void;
}

export function AddSkillDialog({ onAddSkill }: AddSkillDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [status, setStatus] = useState<Skill["status"]>("Not Started");
  const [reflection, setReflection] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !goal.trim()) return;

    const newSkill = {
      name: name.trim(),
      goal: goal.trim(),
      status,
      reflection: reflection.trim()
    };

    onAddSkill(newSkill);

    // Reset form
    setName("");
    setGoal("");
    setStatus("Not Started");
    setReflection("");
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 h-9 px-3 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-sm font-medium"
      >
        <Plus className="h-4 w-4" />
        Add Skill
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Add New Skill
                  </h2>
                  <p className="text-sm text-gray-600">
                    Add a skill you want to develop and track your progress through self-reflection.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-6 h-6 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 p-6 pt-0">
              <div className="space-y-2">
                <label htmlFor="skill-name" className="text-sm font-medium leading-none">
                  Skill Name *
                </label>
                <input
                  id="skill-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Python, Public Speaking, Project Management"
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="skill-goal" className="text-sm font-medium leading-none">
                  Learning Goal *
                </label>
                <textarea
                  id="skill-goal"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="What do you want to achieve with this skill? Be specific about your learning objectives..."
                  required
                  rows={3}
                  className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="skill-status" className="text-sm font-medium leading-none">
                  Current Status
                </label>
                <select
                  id="skill-status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as Skill["status"])}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="skill-reflection" className="text-sm font-medium leading-none">
                  Initial Reflection
                </label>
                <textarea
                  id="skill-reflection"
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  placeholder="Share your thoughts about this skill... What motivates you to learn it? What challenges do you expect?"
                  rows={3}
                  className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-sm font-medium mb-2 sm:mb-0"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!name.trim() || !goal.trim()}
                  className={`inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                    !name.trim() || !goal.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                >
                  Add Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

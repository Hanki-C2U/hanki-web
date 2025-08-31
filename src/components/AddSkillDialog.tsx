import { useState } from "react";
import { TrendingUp, Plus, X } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface AddSkillDialogProps {
  onAddSkill: (skill: Skill) => void;
}

export function AddSkillDialog({ onAddSkill }: AddSkillDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [level, setLevel] = useState([25]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    const newSkill = {
      name: name.trim(),
      level: level[0]
    };

    onAddSkill(newSkill);

    // Reset form
    setName("");
    setLevel([25]);
    setOpen(false);
  };

  const getLevelLabel = (value: number) => {
    if (value >= 80) return "Advanced";
    if (value >= 60) return "Intermediate";
    if (value >= 40) return "Beginner";
    return "Starting";
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
                    Add a skill to track your development progress.
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

              <div className="space-y-4">
                <label className="text-sm font-medium leading-none">
                  Current Level: {level[0]}% ({getLevelLabel(level[0])})
                </label>
                <div className="relative flex w-full touch-none select-none items-center">
                  <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="absolute h-full bg-orange-500 rounded-full transition-all duration-300"
                      style={{ width: `${level[0]}%` }}
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={level[0]}
                    onChange={(e) => setLevel([parseInt(e.target.value)])}
                    className="absolute w-full h-5 opacity-0 cursor-pointer"
                  />
                  <div
                    className="absolute block h-5 w-5 rounded-full border-2 border-orange-500 bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    style={{ left: `calc(${level[0]}% - 10px)` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Starting (0%)</span>
                  <span>Beginner (40%)</span>
                  <span>Intermediate (60%)</span>
                  <span>Advanced (80%+)</span>
                </div>
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
                  disabled={!name.trim()}
                  className={`inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${!name.trim()
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
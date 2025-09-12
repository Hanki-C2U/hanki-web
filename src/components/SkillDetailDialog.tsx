
import { useState, useEffect } from "react";
import { TrendingUp, X } from "lucide-react";

interface Skill {
	name: string;
	level: number;
	learningGoal?: string;
}

interface SkillDetailDialogProps {
	skill: Skill | null;
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onUpdateSkill: (name: string, updates: Partial<Skill>) => void;
}

export function SkillDetailDialog({ skill, open, onOpenChange, onUpdateSkill }: SkillDetailDialogProps) {
	const [level, setLevel] = useState(25);
	const [learningGoal, setLearningGoal] = useState("");

	// Sync local state with prop changes when skill changes
	useEffect(() => {
		if (skill) {
			setLevel(skill.level);
			setLearningGoal(skill.learningGoal || "");
		}
	}, [skill]);

	const getLevelLabel = (value: number) => {
		if (value >= 80) return "Advanced";
		if (value >= 60) return "Intermediate";
		if (value >= 40) return "Beginner";
		return "Starting";
	};

	const handleSave = () => {
		if (skill) {
			onUpdateSkill(skill.name, { level, learningGoal });
			onOpenChange(false);
		}
	};

	if (!skill) return null;

	return (
		<>
			{open && (
				<div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => onOpenChange(false)}>
					<div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
						<div className="flex flex-col space-y-1.5 p-6 pb-4">
							<div className="flex items-start justify-between">
								<div>
									<h2 className="text-lg font-semibold flex items-center gap-2">
										<TrendingUp className="h-5 w-5" />
										{skill.name}
									</h2>
									<p className="text-sm text-gray-600">
										Adjust your current skill level below.
									</p>
								</div>
								<button
									onClick={() => onOpenChange(false)}
									className="inline-flex items-center justify-center w-6 h-6 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
								>
									<X className="h-4 w-4" />
								</button>
							</div>
						</div>
						<div className="space-y-6 p-6 pt-0">
							<div className="space-y-4">
								<div className="space-y-2">
									<label htmlFor="learning-goal" className="text-sm font-medium leading-none">
										Learning Goal
									</label>
									<textarea
										id="learning-goal"
										value={learningGoal}
										onChange={(e) => setLearningGoal(e.target.value)}
										placeholder="What do you want to achieve with this skill? Be specific about your learning objectives..."
										className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 min-h-[80px]"
									/>
								</div>
								
								<label className="text-sm font-medium leading-none">
									Current Level: {level}% ({getLevelLabel(level)})
								</label>
								<div className="relative flex w-full touch-none select-none items-center">
									<div className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
										<div
											className="absolute h-full bg-emerald-500 rounded-full transition-all duration-300"
											style={{ width: `${level}%` }}
										/>
									</div>
									<input
										type="range"
										min="0"
										max="100"
										step="5"
										value={level}
										onChange={e => setLevel(parseInt(e.target.value))}
										className="absolute w-full h-5 opacity-0 cursor-pointer"
									/>
									<div
										className="absolute block h-5 w-5 rounded-full border-2 border-emerald-500 bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
										style={{ left: `calc(${level}% - 10px)` }}
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
									onClick={() => onOpenChange(false)}
									className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 text-sm font-medium mb-2 sm:mb-0"
								>
									Cancel
								</button>
								<button
									type="button"
									onClick={handleSave}
									className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600"
								>
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

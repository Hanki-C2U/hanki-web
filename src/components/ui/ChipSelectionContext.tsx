// Simple ChipSelection component
interface ChipSelectionProps {
  selectedChips: string[];
  onSelectionChange: (selectedItems: string[]) => void;
  maxSelections?: number;
}

function ChipSelection({ selectedChips, onSelectionChange, maxSelections = 5 }: ChipSelectionProps) {
  const expertiseAreas = [
    "Software Engineering", "Web Development", "Mobile Development", "Data Science",
    "Machine Learning", "AI/Artificial Intelligence", "DevOps/Cloud", "Cybersecurity",
    "UI/UX Design", "Product Management", "Digital Marketing", "Content Marketing",
    "Social Media Marketing", "Business Development", "Sales", "Project Management",
    "Financial Analysis", "Investment Banking", "Entrepreneurship", "Startup Strategy",
    "HR/Human Resources", "Operations Management", "Supply Chain", "Consulting", "Research & Development"
  ];

  const handleChipClick = (expertise: string) => {
    let newSelection;
    if (selectedChips.includes(expertise)) {
      newSelection = selectedChips.filter(item => item !== expertise);
    } else if (selectedChips.length < maxSelections) {
      newSelection = [...selectedChips, expertise];
    } else {
      newSelection = selectedChips;
    }
    onSelectionChange(newSelection);
  };

  return (
    <div className="space-y-3">
      {/* Chip selection area */}
      <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto border rounded-lg p-3 bg-gray-50">
        {expertiseAreas.map((expertise) => {
          const isSelected = selectedChips.includes(expertise);
          const isDisabled = !isSelected && selectedChips.length >= maxSelections;
          
          return (
            <button
              key={expertise}
              onClick={() => handleChipClick(expertise)}
              disabled={isDisabled}
              className={`
                px-3 py-1.5 rounded-full text-sm border transition-colors
                ${isSelected
                  ? "bg-blue-600 text-white border-blue-600"
                  : isDisabled
                    ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                }
              `}
            >
              {expertise}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ChipSelection;

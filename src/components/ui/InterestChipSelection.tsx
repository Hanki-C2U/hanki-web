// Interest/Goals ChipSelection component specifically for mentees
interface InterestChipSelectionProps {
  selectedInterests: string[];
  onSelectionChange: (selectedItems: string[]) => void;
  maxSelections?: number;
}

function InterestChipSelection({ selectedInterests, onSelectionChange, maxSelections = 5 }: InterestChipSelectionProps) {
  const interestAreas = [
    // Technology & Development
    "Software Development", "Web Development", "Mobile App Development", "Data Science",
    "Machine Learning", "Artificial Intelligence", "Cybersecurity", "Cloud Computing",
    "DevOps", "Game Development", "Blockchain", "IoT Development",
    
    // Design & Creative
    "UI/UX Design", "Graphic Design", "Product Design", "Digital Art",
    "Animation", "Video Editing", "Photography", "Content Creation",
    
    // Business & Entrepreneurship
    "Entrepreneurship", "Startup Strategy", "Business Development", "E-commerce",
    "Digital Marketing", "Social Media Marketing", "Content Marketing", "SEO",
    "Sales", "Customer Success", "Project Management", "Product Management",
    
    // Finance & Analytics
    "Financial Analysis", "Investment", "Cryptocurrency", "Accounting",
    "Data Analytics", "Business Intelligence", "Market Research",
    
    // Career Development
    "Leadership Skills", "Public Speaking", "Networking", "Career Transition",
    "Interview Preparation", "Resume Building", "Personal Branding",
    "Time Management", "Communication Skills",
    
    // Industry Specific
    "Healthcare Tech", "FinTech", "EdTech", "Real Estate", "Manufacturing",
    "Consulting", "Non-Profit", "Government", "Agriculture", "Tourism",
    
    // Learning & Education
    "Online Learning", "Skill Development", "Certification Programs",
    "Language Learning", "Research Methods", "Writing & Blogging"
  ];

  const handleChipClick = (interest: string) => {
    let newSelection;
    if (selectedInterests.includes(interest)) {
      newSelection = selectedInterests.filter(item => item !== interest);
    } else if (selectedInterests.length < maxSelections) {
      newSelection = [...selectedInterests, interest];
    } else {
      newSelection = selectedInterests;
    }
    onSelectionChange(newSelection);
  };

  return (
    <div className="space-y-3">
      {/* Selected interests display */}
      {selectedInterests.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Selected Interests:</h4>
          <div className="flex flex-wrap gap-1">
            {selectedInterests.map((interest) => (
              <span
                key={interest}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-600 text-white"
              >
                {interest}
                <button
                  onClick={() => handleChipClick(interest)}
                  className="hover:bg-blue-700 rounded-full p-0.5"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Chip selection area with categories */}
      <div className="space-y-4">
        <div className="text-sm text-gray-600">
          Choose areas you're interested in learning about or getting mentorship in:
        </div>
        
        <div className="max-h-64 overflow-y-auto border rounded-lg p-4 bg-gray-50 space-y-3">
          {/* Technology Section */}
          <div>
            <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Technology & Development</h4>
            <div className="flex flex-wrap gap-2">
              {interestAreas.slice(0, 12).map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                const isDisabled = !isSelected && selectedInterests.length >= maxSelections;
                
                return (
                  <button
                    key={interest}
                    onClick={() => handleChipClick(interest)}
                    disabled={isDisabled}
                    className={`
                      px-3 py-1.5 rounded-full text-xs border transition-colors
                      ${isSelected
                        ? "bg-blue-600 text-white border-blue-600"
                        : isDisabled
                          ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                      }
                    `}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Design & Creative Section */}
          <div>
            <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Design & Creative</h4>
            <div className="flex flex-wrap gap-2">
              {interestAreas.slice(12, 20).map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                const isDisabled = !isSelected && selectedInterests.length >= maxSelections;
                
                return (
                  <button
                    key={interest}
                    onClick={() => handleChipClick(interest)}
                    disabled={isDisabled}
                    className={`
                      px-3 py-1.5 rounded-full text-xs border transition-colors
                      ${isSelected
                        ? "bg-blue-600 text-white border-blue-600"
                        : isDisabled
                          ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                      }
                    `}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Business Section */}
          <div>
            <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Business & Entrepreneurship</h4>
            <div className="flex flex-wrap gap-2">
              {interestAreas.slice(20, 32).map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                const isDisabled = !isSelected && selectedInterests.length >= maxSelections;
                
                return (
                  <button
                    key={interest}
                    onClick={() => handleChipClick(interest)}
                    disabled={isDisabled}
                    className={`
                      px-3 py-1.5 rounded-full text-xs border transition-colors
                      ${isSelected
                        ? "bg-blue-600 text-white border-blue-600"
                        : isDisabled
                          ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                      }
                    `}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Other categories */}
          <div>
            <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Other Areas</h4>
            <div className="flex flex-wrap gap-2">
              {interestAreas.slice(32).map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                const isDisabled = !isSelected && selectedInterests.length >= maxSelections;
                
                return (
                  <button
                    key={interest}
                    onClick={() => handleChipClick(interest)}
                    disabled={isDisabled}
                    className={`
                      px-3 py-1.5 rounded-full text-xs border transition-colors
                      ${isSelected
                        ? "bg-blue-600 text-white border-blue-600"
                        : isDisabled
                          ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                      }
                    `}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selection counter */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Selected: {selectedInterests.length}/{maxSelections}</span>
          {selectedInterests.length >= maxSelections && (
            <span className="text-amber-600">Maximum selections reached</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default InterestChipSelection;

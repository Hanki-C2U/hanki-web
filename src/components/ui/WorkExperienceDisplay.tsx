import React from 'react';
import { Building, Calendar, Briefcase } from 'lucide-react';

interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description?: string;
}

interface WorkExperienceDisplayProps {
  experiences: WorkExperience[];
  className?: string;
}

const WorkExperienceDisplay: React.FC<WorkExperienceDisplayProps> = ({ 
  experiences, 
  className = "" 
}) => {
  if (!experiences || experiences.length === 0) {
    return (
      <div className={`bg-gray-50 rounded-xl p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <Briefcase className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Work Experience</h3>
        <p className="text-gray-500">Work experience will be displayed here once added</p>
      </div>
    );
  }

  const formatDateRange = (startDate: string, endDate: string) => {
    if (!startDate) return 'Date not specified';
    
    const start = new Date(startDate + '-01').toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
    const end = endDate && endDate !== 'Present' && endDate !== '' 
      ? new Date(endDate + '-01').toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short' 
        })
      : 'Present';
    
    return `${start} - ${end}`;
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    if (!startDate) return '';
    
    const start = new Date(startDate + '-01');
    const end = endDate && endDate !== 'Present' && endDate !== '' 
      ? new Date(endDate + '-01') 
      : new Date();
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth());
    
    if (months < 1) return 'Less than a month';
    if (months < 12) {
      return `${months} month${months !== 1 ? 's' : ''}`;
    } else {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      return `${years} year${years !== 1 ? 's' : ''}${
        remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}` : ''
      }`;
    }
  };

  const isCurrentRole = (endDate: string) => {
    return !endDate || endDate === 'Present' || endDate === '';
  };

  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Work Experience</h3>
          <p className="text-sm text-gray-500">
            {experiences.length} position{experiences.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        {experiences.map((experience, index) => {
          // Add safety check for experience object
          if (!experience || typeof experience !== 'object') {
            console.warn('Invalid experience object at index', index, ':', experience);
            return null;
          }
          
          // Ensure all required fields are strings
          const safeExperience = {
            company: String(experience.company || ''),
            position: String(experience.position || ''),
            startDate: String(experience.startDate || ''),
            endDate: String(experience.endDate || ''),
            description: experience.description ? String(experience.description) : ''
          };
          
          return (
          <div 
            key={index}
            className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-200"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {safeExperience.position}
                        </h4>
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <Building className="w-4 h-4 flex-shrink-0" />
                          <span className="font-medium">{safeExperience.company}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end text-right ml-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          isCurrentRole(safeExperience.endDate)
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {isCurrentRole(safeExperience.endDate) ? 'Current' : 'Previous'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span>{formatDateRange(safeExperience.startDate, safeExperience.endDate)}</span>
                      </div>
                      {calculateDuration(safeExperience.startDate, safeExperience.endDate) && (
                        <>
                          <div className="hidden sm:block text-gray-300">•</div>
                          <span className="text-gray-600 font-medium">
                            {calculateDuration(safeExperience.startDate, safeExperience.endDate)}
                          </span>
                        </>
                      )}
                    </div>
                    
                    {safeExperience.description && safeExperience.description.trim() && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                          {safeExperience.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperienceDisplay;

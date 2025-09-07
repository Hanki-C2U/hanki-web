import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: 'job' | 'education';
  link?: string;
  description: string;
  postedBy?: string;
}

interface OpportunityCardProps {
  opportunity: Opportunity;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200">
      <div className="p-6">
        <div className="mb-2">
          <div className="flex justify-between items-start">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border-transparent ${opportunity.type === 'job'
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-blue-100 text-blue-700'
              }`}>
              {opportunity.type === 'job' ? 'Job Opportunity' : 'Educational Program'}
            </span>
            <div className="flex-shrink-0">
              {opportunity.type === 'job' ? (
                <Briefcase className="h-5 w-5 text-emerald-600" />
              ) : (
                <GraduationCap className="h-5 w-5 text-blue-600" />
              )}
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900">{opportunity.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{opportunity.description}</p>
      </div>

      <div className="p-6 pt-0">
        <div className="space-y-4">
          <p className="text-sm text-blue-600 font-medium">{opportunity.organization}</p>

          {opportunity.postedBy && (
            <p className="text-xs text-gray-500">Posted by {opportunity.postedBy}</p>
          )}

          {opportunity.link && (
            <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
              {opportunity.type === 'job' ? 'Apply Now' : 'Learn More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;

import React from 'react';
import { Calendar, Briefcase, GraduationCap, Clock, MapPin, ArrowUpRight } from 'lucide-react';

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: 'job' | 'education';
  location: string;
  deadline?: string;
  link?: string;
  description: string;
}

interface OpportunityCardProps {
  opportunity: Opportunity;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{opportunity.title}</h3>
          <p className="text-sm text-gray-600">{opportunity.organization}</p>
        </div>
        <div className="flex items-center justify-center rounded-full w-8 h-8 bg-emerald-50 text-emerald-600">
          {opportunity.type === 'job' ? (
            <Briefcase className="h-4 w-4" />
          ) : (
            <GraduationCap className="h-4 w-4" />
          )}
        </div>
      </div>

      <div className="mt-2 space-y-1">
        <div className="flex items-center text-xs text-gray-500">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          <span>{opportunity.location}</span>
        </div>

        {opportunity.deadline && (
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>Deadline: {opportunity.deadline}</span>
          </div>
        )}
      </div>

      <p className="mt-3 text-sm text-gray-700 line-clamp-2">{opportunity.description}</p>

      {opportunity.link && (
        <a
          href={opportunity.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center text-xs font-medium text-emerald-600 hover:text-emerald-800"
        >
          View details <ArrowUpRight className="ml-1 h-3 w-3" />
        </a>
      )}
    </div>
  );
};

export default OpportunityCard;

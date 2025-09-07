import React, { useState } from 'react';
import { X, Briefcase, GraduationCap } from 'lucide-react';
import type { Opportunity } from './OpportunityCard';

interface AddOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (opportunity: Omit<Opportunity, 'id'>) => void;
}

const AddOpportunityModal: React.FC<AddOpportunityModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [opportunityType, setOpportunityType] = useState<'job' | 'education'>('job');
  const [formData, setFormData] = useState<Omit<Opportunity, 'id' | 'type'>>({
    title: '',
    organization: '',
    location: '',
    deadline: '',
    link: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAdd({
      ...formData,
      type: opportunityType,
    });

    // Reset form
    setFormData({
      title: '',
      organization: '',
      location: '',
      deadline: '',
      link: '',
      description: '',
    });
    setOpportunityType('job');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h3 className="text-lg font-medium">Add Opportunity</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          {/* Opportunity Type Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Opportunity Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setOpportunityType('job')}
                className={`flex items-center justify-center gap-2 py-2 px-4 rounded-md ${opportunityType === 'job'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-gray-50 text-gray-500 border border-gray-200'
                  }`}
              >
                <Briefcase className="h-4 w-4" />
                Job
              </button>
              <button
                type="button"
                onClick={() => setOpportunityType('education')}
                className={`flex items-center justify-center gap-2 py-2 px-4 rounded-md ${opportunityType === 'education'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-gray-50 text-gray-500 border border-gray-200'
                  }`}
              >
                <GraduationCap className="h-4 w-4" />
                Education
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title*
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={handleInputChange}
                placeholder={opportunityType === 'job' ? 'e.g., Frontend Developer' : 'e.g., Web Development Bootcamp'}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                {opportunityType === 'job' ? 'Company*' : 'Institution*'}
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                required
                value={formData.organization}
                onChange={handleInputChange}
                placeholder={opportunityType === 'job' ? 'e.g., Acme Inc.' : 'e.g., Tech University'}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location*
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Kigali, Rwanda (or Remote)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Deadline */}
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                Deadline
              </label>
              <input
                id="deadline"
                name="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Link */}
            <div>
              <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">
                Link
              </label>
              <input
                id="link"
                name="link"
                type="url"
                value={formData.link}
                onChange={handleInputChange}
                placeholder="https://"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description*
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                required
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief description of the opportunity..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 border border-transparent rounded-md shadow-sm hover:bg-emerald-700"
            >
              Add Opportunity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOpportunityModal;

import { useState } from "react";
import { useNavigate } from "react-router";
import { Save, X, Plus, Trash2, Camera } from "lucide-react";
import AuthHeader from "../components/AuthHeader";
import TimezoneDropdown from "../components/ui/TimezoneDropdown";

// Define types for mentor profile data
interface Experience {
  position: string;
  company: string;
  duration: string;
  description?: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface ExpertiseArea {
  name: string;
}

interface MentorAvailability {
  day: string;
  startTime: string;
  endTime: string;
  isRecurring: boolean; // Whether this repeats weekly
}

interface MentorProfile {
  firstName: string;
  lastName: string;
  role: string;
  organization: string;
  profilePicture: string;
  bio: string;
  languages: string[];
  expertiseAreas: ExpertiseArea[];
  professionalBackground: {
    education: Education[];
    experience: Experience[];
  };
  location: string;
  timezone: string;
  linkedIn?: string;
  website?: string;
  availability: MentorAvailability[];
}

const EditMentorProfile = () => {
  const navigate = useNavigate();

  // Default mentor data
  const defaultMentorData: MentorProfile = {
    firstName: "Emmanuel",
    lastName: "Ntagungira",
    role: "Engineering Leader",
    organization: "IntegrityNext",
    profilePicture: "/emmanuel-portrait.png",
    bio: "Engineering Leader, former Engineering Manager of Platform Engineering at Personio SE & Co. KG, former Domain Quality Lead at Magento Commerce as a part of eBay Inc. QA Coach at StartIT Training Center for IT Specialists, helping talented people to start their new careers in IT.",
    languages: ["English", "German"],
    expertiseAreas: [
      { name: "Engineering Leadership" },
      { name: "System Architecture" },
      { name: "Team Management" },
      { name: "Quality Assurance" },
      { name: "Career Guidance" }
    ],
    professionalBackground: {
      education: [
        {
          degree: "MSc Computer Science",
          institution: "Technical University of Munich",
          year: "2015"
        },
        {
          degree: "BSc Software Engineering",
          institution: "Kyiv Polytechnic Institute",
          year: "2012"
        }
      ],
      experience: [
        {
          position: "Engineering Manager",
          company: "Personio SE & Co. KG",
          duration: "2020 - Present",
          description: "Led a team of 15 engineers, implementing agile methodologies and improving deployment frequency by 40%"
        },
        {
          position: "Domain Quality Lead",
          company: "Magento Commerce (eBay Inc.)",
          duration: "2016 - 2020",
          description: "Established QA processes and mentored junior team members on best practices"
        }
      ],
    },
    location: "Berlin, Germany",
    timezone: "UTC +02:00",
    linkedIn: "https://linkedin.com/in/denyspavlenko",
    website: "https://denys-portfolio.dev",
    availability: [
      { day: "Monday", startTime: "18:00", endTime: "21:00", isRecurring: true },
      { day: "Wednesday", startTime: "18:00", endTime: "21:00", isRecurring: true },
      { day: "Saturday", startTime: "10:00", endTime: "15:00", isRecurring: true },
    ]
  };

  // Initialize form with existing mentor data from localStorage or default data
  const [formData, setFormData] = useState<MentorProfile>(() => {
    // Try to get saved profile from localStorage
    const savedProfile = localStorage.getItem("mentorProfile");

    if (savedProfile) {
      try {
        const profileData = JSON.parse(savedProfile);
        // Return the saved profile data, with fallback to default values
        // for any missing fields
        return {
          ...defaultMentorData,
          ...profileData,
          // Make sure nested objects are properly merged
          professionalBackground: {
            ...defaultMentorData.professionalBackground,
            ...profileData.professionalBackground,
            education: profileData.professionalBackground?.education || defaultMentorData.professionalBackground.education,
            experience: profileData.professionalBackground?.experience || defaultMentorData.professionalBackground.experience
          },
          expertiseAreas: profileData.expertiseAreas || defaultMentorData.expertiseAreas,
          availability: profileData.availability || defaultMentorData.availability
        };
      } catch (error) {
        console.error("Error parsing profile data from localStorage:", error);
        return defaultMentorData;
      }
    }

    // Return default data if nothing in localStorage
    return defaultMentorData;
  });

  // UI state
  const [activeSection, setActiveSection] = useState<'basic' | 'professional' | 'availability'>('basic');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  // New item states
  const [newLanguage, setNewLanguage] = useState("");
  const [newExpertise, setNewExpertise] = useState<{ name: string }>({
    name: ""
  });
  const [newEducation, setNewEducation] = useState<Education>({
    degree: "",
    institution: "",
    year: ""
  });
  const [newExperience, setNewExperience] = useState<Experience>({
    position: "",
    company: "",
    duration: "",
    description: ""
  });
  const [newAvailability, setNewAvailability] = useState<MentorAvailability>({
    day: "Monday",
    startTime: "09:00",
    endTime: "10:00",
    isRecurring: true
  });

  // Handle simple field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: MentorProfile) => ({
      ...prev,
      [name]: value
    }));
  };

  // Expertise Areas
  const addExpertise = () => {
    if (newExpertise.name.trim()) {
      setFormData((prev: MentorProfile) => ({
        ...prev,
        expertiseAreas: [...prev.expertiseAreas, { name: newExpertise.name.trim() }]
      }));
      setNewExpertise({ name: "" });
    }
  };

  const removeExpertise = (index: number) => {
    setFormData((prev: MentorProfile) => ({
      ...prev,
      expertiseAreas: prev.expertiseAreas.filter((_, i) => i !== index)
    }));
  };

  const handleExpertiseChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewExpertise((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Languages
  const addLanguage = () => {
    if (newLanguage.trim() && !formData.languages.includes(newLanguage.trim())) {
      setFormData((prev: MentorProfile) => ({
        ...prev,
        languages: [...prev.languages, newLanguage.trim()]
      }));
      setNewLanguage("");
    }
  };

  const removeLanguage = (language: string) => {
    setFormData((prev: MentorProfile) => ({
      ...prev,
      languages: prev.languages.filter(l => l !== language)
    }));
  };

  // Education
  const addEducation = () => {
    if (newEducation.degree.trim() && newEducation.institution.trim() && newEducation.year.trim()) {
      setFormData((prev: MentorProfile) => ({
        ...prev,
        professionalBackground: {
          ...prev.professionalBackground,
          education: [...prev.professionalBackground.education, { ...newEducation }]
        }
      }));
      setNewEducation({ degree: "", institution: "", year: "" });
    }
  };

  const removeEducation = (index: number) => {
    setFormData((prev: MentorProfile) => ({
      ...prev,
      professionalBackground: {
        ...prev.professionalBackground,
        education: prev.professionalBackground.education.filter((_, i) => i !== index)
      }
    }));
  };

  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEducation((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Experience
  const addExperience = () => {
    if (newExperience.position.trim() && newExperience.company.trim() && newExperience.duration.trim()) {
      setFormData((prev: MentorProfile) => ({
        ...prev,
        professionalBackground: {
          ...prev.professionalBackground,
          experience: [...prev.professionalBackground.experience, { ...newExperience }]
        }
      }));
      setNewExperience({ position: "", company: "", duration: "", description: "" });
    }
  };

  const removeExperience = (index: number) => {
    setFormData((prev: MentorProfile) => ({
      ...prev,
      professionalBackground: {
        ...prev.professionalBackground,
        experience: prev.professionalBackground.experience.filter((_, i) => i !== index)
      }
    }));
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Helper function to check if two time ranges overlap
  const doTimeSlotsOverlap = (
    day1: string,
    start1: string,
    end1: string,
    day2: string,
    start2: string,
    end2: string
  ) => {
    // Different days don't overlap
    if (day1 !== day2) return false;

    // Check for overlap - if one slot starts after another ends, they don't overlap
    return !(end1 <= start2 || end2 <= start1);
  };

  // Availability
  const addAvailability = () => {
    // Check for exact duplicate availability slots
    const isExactDuplicate = formData.availability.some(
      slot =>
        slot.day === newAvailability.day &&
        slot.startTime === newAvailability.startTime &&
        slot.endTime === newAvailability.endTime
    );

    // Check for overlapping slots on the same day
    const hasOverlap = formData.availability.some(
      slot => doTimeSlotsOverlap(
        slot.day,
        slot.startTime,
        slot.endTime,
        newAvailability.day,
        newAvailability.startTime,
        newAvailability.endTime
      )
    );

    // Add only if no duplicates or overlaps
    if (isExactDuplicate) {
      alert("This exact time slot already exists. Please choose different times or a different day.");
    } else if (hasOverlap) {
      alert("This time slot overlaps with an existing slot on the same day. Please choose non-overlapping times.");
    } else {
      setFormData((prev: MentorProfile) => ({
        ...prev,
        availability: [...prev.availability, { ...newAvailability }]
      }));
      setNewAvailability({ day: "Monday", startTime: "09:00", endTime: "10:00", isRecurring: true });
    }
  };

  const removeAvailability = (index: number) => {
    setFormData((prev: MentorProfile) => ({
      ...prev,
      availability: prev.availability.filter((_, i) => i !== index)
    }));
  };

  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Create updated availability state
    const updatedAvailability = {
      ...newAvailability,
      [name]: value
    };

    // If changing start or end time, validate them
    if (name === 'startTime' || name === 'endTime') {
      const startTime = name === 'startTime' ? value : newAvailability.startTime;
      const endTime = name === 'endTime' ? value : newAvailability.endTime;

      // Check if end time is after start time
      if (startTime >= endTime) {
        alert("End time must be after start time.");
        return; // Don't update state if times are invalid
      }
    }

    // Update state with valid changes
    setNewAvailability(updatedAvailability);
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you'd upload this to Supabase Storage
      // For demo purposes, we'll just create a local URL
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev: MentorProfile) => ({
        ...prev,
        profilePicture: imageUrl
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      // Mock API call - this would be replaced with a real Supabase call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, store in localStorage
      localStorage.setItem("mentorProfile", JSON.stringify(formData));

      setFeedback({
        type: "success",
        message: "Profile updated successfully!"
      });

      // Navigate back to dashboard after a short delay
      setTimeout(() => {
        navigate("/mentor-dashboard");
      }, 2000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setFeedback({
        type: "error",
        message: "Failed to update profile. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Edit Mentor Profile</h1>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
          >
            <X className="h-4 w-4 mr-1" /> Cancel
          </button>
        </div>

        {feedback && (
          <div className={`mb-6 p-4 rounded-md ${feedback.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {feedback.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex flex-wrap -mb-px">
              <button
                type="button"
                onClick={() => setActiveSection('basic')}
                className={`py-4 px-1 border-b-2 font-medium text-sm mr-8 ${activeSection === 'basic'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                Basic Information
              </button>
              <button
                type="button"
                onClick={() => setActiveSection('professional')}
                className={`py-4 px-1 border-b-2 font-medium text-sm mr-8 ${activeSection === 'professional'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                Professional Background
              </button>
              <button
                type="button"
                onClick={() => setActiveSection('availability')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'availability'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                Availability
              </button>
            </nav>
          </div>

          {/* Basic Information Section */}
          {activeSection === 'basic' && (
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative bg-gray-200 group">
                  {formData.profilePicture ? (
                    <img
                      src={formData.profilePicture}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-400">
                      <Camera className="h-8 w-8" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <label htmlFor="profile-upload" className="cursor-pointer p-2 rounded-full bg-white text-gray-700 hover:bg-gray-100">
                      <Camera className="h-5 w-5" />
                      <input
                        id="profile-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
                <label htmlFor="profile-upload" className="text-sm text-emerald-600 cursor-pointer hover:underline">
                  Change profile picture
                </label>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Role & Organization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Role*
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                    Timezone*
                  </label>
                  <TimezoneDropdown
                    value={formData.timezone}
                    onChange={(value) => {
                      setFormData((prev) => ({
                        ...prev,
                        timezone: value
                      }));
                    }}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Select your timezone for accurate meeting scheduling
                  </p>
                </div>
              </div>

              {/* Mentoring Note */}
              <div>
                <div className="rounded-md bg-emerald-50 p-3">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-emerald-700">
                        Mentorship on ATLAS is provided for free to support the community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Bio*
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  required
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell mentees about your expertise, experience, and approach to mentoring..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Write a brief introduction about yourself, your background, and what you can offer as a mentor.
                </p>
              </div>

              {/* External Profiles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn Profile
                  </label>
                  <input
                    id="linkedIn"
                    name="linkedIn"
                    type="url"
                    value={formData.linkedIn || ""}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website || ""}
                    onChange={handleChange}
                    placeholder="https://your-website.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Languages */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Languages</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.languages.map((language, index) => (
                    <div key={index} className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
                      <span className="text-sm text-gray-800">{language}</span>
                      <button
                        type="button"
                        onClick={() => removeLanguage(language)}
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={newLanguage}
                    onChange={(e) => setNewLanguage(e.target.value)}
                    placeholder="Add a language"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={addLanguage}
                    className="px-3 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-md text-gray-600 hover:bg-gray-200"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Expertise Areas */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expertise Areas</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.expertiseAreas.map((area, index) => (
                    <div key={index} className="inline-flex items-center bg-emerald-50 text-emerald-700 rounded-full px-3 py-1">
                      <span className="text-sm">{area.name}</span>
                      <button
                        type="button"
                        onClick={() => removeExpertise(index)}
                        className="ml-1 text-emerald-600 hover:text-emerald-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    name="name"
                    value={newExpertise.name}
                    onChange={handleExpertiseChange}
                    placeholder="Add an expertise area"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={addExpertise}
                    className="px-3 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-md text-gray-600 hover:bg-gray-200"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Professional Background Section */}
          {activeSection === 'professional' && (
            <div className="space-y-6">
              {/* Education */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Education</label>
                <div className="space-y-4 mb-4">
                  {formData.professionalBackground.education.map((edu, index) => (
                    <div key={index} className="border border-gray-200 rounded-md p-4 relative">
                      <button
                        type="button"
                        onClick={() => removeEducation(index)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-sm text-gray-600">{edu.institution} • {edu.year}</p>
                    </div>
                  ))}
                </div>

                <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
                  <h4 className="text-sm font-medium mb-3">Add New Education</h4>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="degree" className="block text-sm text-gray-700 mb-1">
                        Degree/Certification
                      </label>
                      <input
                        id="degree"
                        name="degree"
                        type="text"
                        value={newEducation.degree}
                        onChange={handleEducationChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="institution" className="block text-sm text-gray-700 mb-1">
                        Institution
                      </label>
                      <input
                        id="institution"
                        name="institution"
                        type="text"
                        value={newEducation.institution}
                        onChange={handleEducationChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="year" className="block text-sm text-gray-700 mb-1">
                        Year
                      </label>
                      <input
                        id="year"
                        name="year"
                        type="text"
                        value={newEducation.year}
                        onChange={handleEducationChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={addEducation}
                      className="w-full py-2 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md hover:bg-emerald-100"
                    >
                      <Plus className="h-4 w-4 inline mr-1" />
                      Add Education
                    </button>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="mt-8">
                <label className="block text-lg font-medium text-gray-700 mb-3">Work Experience</label>
                <div className="space-y-4 mb-4">
                  {formData.professionalBackground.experience.map((exp, index) => (
                    <div key={index} className="border border-gray-200 rounded-md p-4 relative">
                      <button
                        type="button"
                        onClick={() => removeExperience(index)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <p className="font-medium">{exp.position}</p>
                      <p className="text-sm text-gray-600">{exp.company} • {exp.duration}</p>
                      {exp.description && <p className="text-sm text-gray-600 mt-2">{exp.description}</p>}
                    </div>
                  ))}
                </div>

                <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
                  <h4 className="text-sm font-medium mb-3">Add New Experience</h4>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="position" className="block text-sm text-gray-700 mb-1">
                        Position
                      </label>
                      <input
                        id="position"
                        name="position"
                        type="text"
                        value={newExperience.position}
                        onChange={handleExperienceChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={newExperience.company}
                        onChange={handleExperienceChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="duration" className="block text-sm text-gray-700 mb-1">
                        Duration
                      </label>
                      <input
                        id="duration"
                        name="duration"
                        type="text"
                        placeholder="e.g., Jan 2020 - Present"
                        value={newExperience.duration}
                        onChange={handleExperienceChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm text-gray-700 mb-1">
                        Description (optional)
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={2}
                        value={newExperience.description || ""}
                        onChange={handleExperienceChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={addExperience}
                      className="w-full py-2 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md hover:bg-emerald-100"
                    >
                      <Plus className="h-4 w-4 inline mr-1" />
                      Add Experience
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Availability Section */}
          {activeSection === 'availability' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">When are you available to mentor?</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Set your regular availability for mentoring sessions. Mentees will be able to book slots within these timeframes.
                </p>

                {/* Current availability times */}
                <div className="space-y-3 mb-6">
                  {formData.availability.map((slot, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{slot.day}:</span>{" "}
                          <span className="text-gray-600">{slot.startTime} - {slot.endTime}</span>
                          {slot.isRecurring && (
                            <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs bg-emerald-50 text-emerald-700">
                              Weekly
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeAvailability(index)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add new availability */}
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <h4 className="font-medium mb-4">Add Availability</h4>
                  <div className="grid grid-cols-3 gap-4 mb-2">
                    <div>
                      <label htmlFor="day" className="block text-sm text-gray-700 mb-1">
                        Day
                      </label>
                      <select
                        id="day"
                        name="day"
                        value={newAvailability.day}
                        onChange={handleAvailabilityChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="startTime" className="block text-sm text-gray-700 mb-1">
                        Start Time
                      </label>
                      <input
                        id="startTime"
                        name="startTime"
                        type="time"
                        value={newAvailability.startTime}
                        onChange={handleAvailabilityChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="endTime" className="block text-sm text-gray-700 mb-1">
                        End Time
                      </label>
                      <input
                        id="endTime"
                        name="endTime"
                        type="time"
                        value={newAvailability.endTime}
                        onChange={handleAvailabilityChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="isRecurring"
                      name="isRecurring"
                      type="checkbox"
                      checked={newAvailability.isRecurring}
                      onChange={(e) => setNewAvailability(prev => ({ ...prev, isRecurring: e.target.checked }))}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isRecurring" className="ml-2 block text-sm text-gray-700">
                      Repeats weekly
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={addAvailability}
                    className="w-full py-2 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md hover:bg-emerald-100"
                  >
                    <Plus className="h-4 w-4 inline mr-1" />
                    Add Time Slot
                  </button>
                </div>
              </div>
            </div>
          )}



          {/* Form Actions */}
          <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditMentorProfile;

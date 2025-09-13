import { useState } from "react";
import { useNavigate } from "react-router";
import { Save, X, Plus, Trash2, Camera, MapPin, Clock, Linkedin, Globe } from "lucide-react";
import AuthHeader from "../components/AuthHeader";
import TimezoneDropdown from "../components/ui/TimezoneDropdown";
// Note: this is a backup file; avoid importing runtime-only modules to prevent unused import errors

// Define types for our mentee data structure
interface Experience {
  position: string;
  company: string;
  duration: string;
}

interface ProfessionalBackground {
  education: string;
  experience: Experience[];
}

interface LearningPreferences {
  mentorshipStyle: string;
  preferredSessionFormat: string;
  learningGoals: string;
  availability: string;
}

interface SocialLinks {
  linkedin?: string;
  website?: string;
}

interface MenteeProfile {
  firstName: string;
  lastName: string;
  role: string;
  organization: string;
  location: string;
  timezone: string;
  profilePicture: string;
  bio: string;
  languages: string[];
  skills: string[];
  goals: string[];
  socials: SocialLinks;
  professionalBackground: ProfessionalBackground;
  learningPreferences: LearningPreferences;
}

const EditProfile = () => {
  const navigate = useNavigate();

  // Default mentee data
  const defaultMenteeData: MenteeProfile = {
    firstName: "Bienvenu",
    lastName: "Cyuzuzo",
    role: "Student",
    organization: "African Leadership University",
    location: "Kigali, Rwanda",
    timezone: "UTC+2",
    profilePicture: "/shema-portrait.png",
    bio: "I'm a software engineering student passionate about building web applications. I'm currently focused on full-stack development using JavaScript, React, and SQL. I'm seeking mentorship to strengthen my system design, problem-solving, and career navigation skills.",
    languages: ["English", "Français", "Ikinyarwanda"],
    skills: ["React", "JavaScript", "Node.js", "SQL", "HTML/CSS"],
    goals: ["Transition to Software Engineering", "Build Professional Network", "Develop Leadership Skills", "Prepare for technical interviews"],
    socials: {
      linkedin: "https://linkedin.com/in/bienvenu-cyuzuzo",
      website: "https://portfolio-bienvenu.com"
    },
    professionalBackground: {
      education: "B.S. Computer Science, African Leadership University, 2025 (Expected)",
      experience: [
        { position: "Software Engineering Intern", company: "Andela", duration: "Summer 2024" },
        { position: "Web Developer", company: "Student Projects", duration: "2023 - Present" }
      ],
    },
    learningPreferences: {
      mentorshipStyle: "Practical guidance with hands-on examples",
      preferredSessionFormat: "1:1 video calls with follow-up tasks",
      learningGoals: "Career development and technical skill improvement",
      availability: "Evenings and weekends",
    }
  };

  // Initialize form with existing mentee data from localStorage or default data
  // In a real app, this would be fetched from API/Supabase
  const [formData, setFormData] = useState<MenteeProfile>(() => {
    // Try to get saved profile from localStorage
    const savedProfile = localStorage.getItem("menteeProfile");

    if (savedProfile) {
      try {
        const profileData = JSON.parse(savedProfile);
        // Return the saved profile data, with fallback to default values
        // for any missing fields
        return {
          ...defaultMenteeData,
          ...profileData,
          // Make sure nested objects are properly merged
          professionalBackground: {
            ...defaultMenteeData.professionalBackground,
            ...profileData.professionalBackground
          },
          learningPreferences: {
            ...defaultMenteeData.learningPreferences,
            ...profileData.learningPreferences
          },
          // Make sure socials are properly merged
          socials: {
            ...defaultMenteeData.socials,
            ...profileData.socials
          }
        };
      } catch (error) {
        console.error("Error parsing profile data from localStorage:", error);
        return defaultMenteeData;
      }
    }

    // Return default data if nothing in localStorage
    return defaultMenteeData;
  });

  // UI state
  const [activeSection, setActiveSection] = useState<'basic' | 'professional' | 'preferences'>('basic');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  // New item states
  const [newLanguage, setNewLanguage] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newGoal, setNewGoal] = useState("");
  const [newExperience, setNewExperience] = useState<Experience>({ position: "", company: "", duration: "" });

  // Handle simple field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: MenteeProfile) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle nested field changes for learning preferences
  const handlePreferenceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: MenteeProfile) => ({
      ...prev,
      learningPreferences: {
        ...prev.learningPreferences,
        [name]: value
      }
    }));
  };

  // Handle nested field changes for social links
  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: MenteeProfile) => ({
      ...prev,
      socials: {
        ...prev.socials,
        [name]: value
      }
    }));
  };

  // Add new language
  const addLanguage = () => {
    if (newLanguage.trim() && !formData.languages.includes(newLanguage.trim())) {
      setFormData((prev: MenteeProfile) => ({
        ...prev,
        languages: [...prev.languages, newLanguage.trim()]
      }));
      setNewLanguage("");
    }
  };

  // Remove language
  const removeLanguage = (language: string) => {
    setFormData((prev: MenteeProfile) => ({
      ...prev,
      languages: prev.languages.filter(l => l !== language)
    }));
  };

  // Add new skill
  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData((prev: MenteeProfile) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  // Remove skill
  const removeSkill = (skill: string) => {
    setFormData((prev: MenteeProfile) => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  // Add new goal
  const addGoal = () => {
    if (newGoal.trim() && !formData.goals.includes(newGoal.trim())) {
      setFormData((prev: MenteeProfile) => ({
        ...prev,
        goals: [...prev.goals, newGoal.trim()]
      }));
      setNewGoal("");
    }
  };

  // Remove goal
  const removeGoal = (goal: string) => {
    setFormData((prev: MenteeProfile) => ({
      ...prev,
      goals: prev.goals.filter(g => g !== goal)
    }));
  };

  // Handle experience fields
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewExperience((prev: Experience) => ({
      ...prev,
      [name]: value
    }));
  };

  // Add new experience
  const addExperience = () => {
    if (newExperience.position.trim() && newExperience.company.trim() && newExperience.duration.trim()) {
      setFormData((prev: MenteeProfile) => ({
        ...prev,
        professionalBackground: {
          ...prev.professionalBackground,
          experience: [...prev.professionalBackground.experience, { ...newExperience }]
        }
      }));
      setNewExperience({ position: "", company: "", duration: "" });
    }
  };

  // Remove experience
  const removeExperience = (index: number) => {
    setFormData((prev: MenteeProfile) => ({
      ...prev,
      professionalBackground: {
        ...prev.professionalBackground,
        experience: prev.professionalBackground.experience.filter((_, i) => i !== index)
      }
    }));
  };

  // Update education
  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev: MenteeProfile) => ({
      ...prev,
      professionalBackground: {
        ...prev.professionalBackground,
        education: value
      }
    }));
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
      localStorage.setItem("menteeProfile", JSON.stringify(formData));

      setFeedback({
        type: "success",
        message: "Profile updated successfully!"
      });

      // Navigate back to profile after a short delay
      setTimeout(() => {
        navigate("/mentee-dashboard");
      }, 2000);
    } catch (error) {
      console.error('Error updating profile:', error)
      setFeedback({
        type: "error",
        message: "Failed to update profile. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you'd upload this to Supabase Storage
      // For demo purposes, we'll just create a local URL
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev: MenteeProfile) => ({
        ...prev,
        profilePicture: imageUrl
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
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
            <nav className="flex -mb-px space-x-8">
              <button
                type="button"
                onClick={() => setActiveSection('basic')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'basic'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                Basic Information
              </button>
              <button
                type="button"
                onClick={() => setActiveSection('professional')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'professional'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                Professional Background
              </button>
              <button
                type="button"
                onClick={() => setActiveSection('preferences')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'preferences'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                Learning Preferences
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
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Location*
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, Country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
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

              {/* Social Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn Profile
                  </label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    value={formData.socials.linkedin || ""}
                    onChange={handleSocialChange}
                    placeholder="https://linkedin.com/in/your-profile"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <Globe className="h-4 w-4 mr-1" />
                    Personal Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.socials.website || ""}
                    onChange={handleSocialChange}
                    placeholder="https://your-website.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
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
                  placeholder="Tell mentors about yourself, your background, and what you're looking to achieve..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Write a brief introduction about yourself, your background, and what you're looking to achieve through mentorship.
                </p>
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

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="inline-flex items-center bg-emerald-50 text-emerald-700 rounded-full px-3 py-1">
                      <span className="text-sm">{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
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
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="px-3 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-md text-gray-600 hover:bg-gray-200"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Goals */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Learning Goals</label>
                <div className="space-y-2 mb-3">
                  {formData.goals.map((goal, index) => (
                    <div key={index} className="flex items-center bg-gray-50 border border-gray-100 rounded-md p-2">
                      <span className="text-sm text-gray-800 flex-grow">{goal}</span>
                      <button
                        type="button"
                        onClick={() => removeGoal(goal)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                    placeholder="Add a learning goal"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={addGoal}
                    className="px-3 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-md text-gray-600 hover:bg-gray-200"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  What specific skills or knowledge are you hoping to develop through mentorship?
                </p>
              </div>
            </div>
          )}

          {/* Professional Background Section */}
          {activeSection === 'professional' && (
            <div className="space-y-6">
              {/* Education */}
              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                  Education
                </label>
                <input
                  id="education"
                  name="education"
                  type="text"
                  value={formData.professionalBackground.education}
                  onChange={handleEducationChange}
                  placeholder="e.g., B.S. Computer Science, University Name, 2025 (Expected)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Include your degree, institution, and expected/completion date
                </p>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work Experience</label>
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
                        placeholder="e.g., Jan 2023 - Present"
                        value={newExperience.duration}
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

          {/* Learning Preferences Section */}
          {activeSection === 'preferences' && (
            <div className="space-y-6">
              {/* Mentorship Style */}
              <div>
                <label htmlFor="mentorshipStyle" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Mentorship Style
                </label>
                <textarea
                  id="mentorshipStyle"
                  name="mentorshipStyle"
                  rows={3}
                  value={formData.learningPreferences.mentorshipStyle}
                  onChange={handlePreferenceChange}
                  placeholder="Describe your preferred mentorship style..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Do you prefer hands-on guidance, theoretical discussions, project-based learning, etc.?
                </p>
              </div>

              {/* Session Format */}
              <div>
                <label htmlFor="preferredSessionFormat" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Session Format
                </label>
                <select
                  id="preferredSessionFormat"
                  name="preferredSessionFormat"
                  value={formData.learningPreferences.preferredSessionFormat}
                  onChange={handlePreferenceChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="1:1 video calls with follow-up tasks">1:1 video calls with follow-up tasks</option>
                  <option value="Chat-based mentoring with occasional calls">Chat-based mentoring with occasional calls</option>
                  <option value="Code review sessions">Code review sessions</option>
                  <option value="Project-based collaboration">Project-based collaboration</option>
                  <option value="Career guidance discussions">Career guidance discussions</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  How do you prefer to interact with your mentor?
                </p>
              </div>

              {/* Learning Goals */}
              <div>
                <label htmlFor="learningGoals" className="block text-sm font-medium text-gray-700 mb-1">
                  Learning Focus
                </label>
                <textarea
                  id="learningGoals"
                  name="learningGoals"
                  rows={3}
                  value={formData.learningPreferences.learningGoals}
                  onChange={handlePreferenceChange}
                  placeholder="Describe your main learning focus areas..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  What areas are you most interested in developing through mentorship?
                </p>
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                  Availability
                </label>
                <textarea
                  id="availability"
                  name="availability"
                  rows={2}
                  value={formData.learningPreferences.availability}
                  onChange={handlePreferenceChange}
                  placeholder="When are you generally available for mentoring sessions?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Provide general availability (e.g., "Weekday evenings", "Weekend mornings")
                </p>
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

export default EditProfile;

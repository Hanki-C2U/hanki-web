import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Save, X, Plus, Trash2, Camera, MapPin, Clock, Linkedin, Globe } from "lucide-react";
import AuthHeader from "../components/AuthHeader";
import TimezoneDropdown from "../components/ui/TimezoneDropdown";
import { useAuthStore } from "../store/authStore";
import { supabasase } from "../supabase_creds/supabase";
import { getProfilePictureUrl, uploadProfilePicture } from "../utils/profilePicture";

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
  const { user } = useAuthStore();

  // UI state
  const [activeSection, setActiveSection] = useState<'basic' | 'professional' | 'preferences'>('basic');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  // Default mentee data structure
  const defaultMenteeData: MenteeProfile = {
    firstName: "",
    lastName: "",
    role: "",
    organization: "",
    location: "",
    timezone: "Africa/Kigali",
    profilePicture: "https://nuxcfyhkrkiihdiztzcy.supabase.co/storage/v1/object/public/Project_Pics/anonymous.jpg",
    bio: "",
    languages: [],
    skills: [],
    goals: [],
    socials: {
      linkedin: "",
      website: ""
    },
    professionalBackground: {
      education: "",
      experience: []
    },
    learningPreferences: {
      mentorshipStyle: "",
      preferredSessionFormat: "",
      learningGoals: "",
      availability: "",
    }
  };

  // Initialize form with fetched data
  const [formData, setFormData] = useState<MenteeProfile>(defaultMenteeData);

  // New item states
  const [newLanguage, setNewLanguage] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newGoal, setNewGoal] = useState("");
  const [newExperience, setNewExperience] = useState<Experience>({ position: "", company: "", duration: "" });

  // Fetch mentee data from Supabase
  useEffect(() => {
    const fetchMenteeData = async () => {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      try {
        console.log('🔄 Fetching mentee data for user:', user.id);
        
        const { data: menteeData, error } = await supabasase
          .from('mentee')
          .select('*')
          .eq('supabaseId', user.id)
          .single();

        if (error) {
          console.error('❌ Error fetching mentee data:', error);
          setFeedback({
            type: "error",
            message: "Failed to load profile data"
          });
          setLoading(false);
          return;
        }

        if (menteeData) {
          console.log('✅ Mentee data fetched:', menteeData);
          
          // Fetch profile picture from Supabase Storage
          const profilePicUrl = await getProfilePictureUrl(user.id, 'mentee');
          
          // Map database fields to form data structure
          const mappedData: MenteeProfile = {
            firstName: menteeData.first_name || "",
            lastName: menteeData.last_name || "",
            role: "", // Not in DB schema, will use default
            organization: "", // Not in DB schema, will use default
            location: menteeData.location || "",
            timezone: "Africa/Kigali", // Default timezone
            profilePicture: profilePicUrl,
            bio: menteeData.bio || "",
            languages: [], // Will be a separate table in future
            skills: [], // Will be a separate table in future
            goals: menteeData.Interests || [],
            socials: {
              linkedin: menteeData.LinkedIn || "",
              website: menteeData.Website || ""
            },
            professionalBackground: {
              education: "", // Will be a separate table in future
              experience: [] // Will be a separate table in future
            },
            learningPreferences: {
              mentorshipStyle: "", // Will be separate fields in future
              preferredSessionFormat: "",
              learningGoals: "",
              availability: "",
            }
          };

          setFormData(mappedData);
        }
      } catch (error) {
        console.error('💥 Unexpected error fetching mentee data:', error);
        setFeedback({
          type: "error",
          message: "An unexpected error occurred"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMenteeData();
  }, [user?.id]);

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

  // Handle social links changes
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

  // Handle professional background changes
  const handleProfessionalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: MenteeProfile) => ({
      ...prev,
      professionalBackground: {
        ...prev.professionalBackground,
        [name]: value
      }
    }));
  };

  // Add functions for managing arrays
  const addLanguage = () => {
    if (newLanguage.trim()) {
      setFormData(prev => ({
        ...prev,
        languages: [...prev.languages, newLanguage.trim()]
      }));
      setNewLanguage("");
    }
  };

  const removeLanguage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addGoal = () => {
    if (newGoal.trim()) {
      setFormData(prev => ({
        ...prev,
        goals: [...prev.goals, newGoal.trim()]
      }));
      setNewGoal("");
    }
  };

  const removeGoal = (index: number) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.filter((_, i) => i !== index)
    }));
  };

  const addExperience = () => {
    if (newExperience.position && newExperience.company && newExperience.duration) {
      setFormData(prev => ({
        ...prev,
        professionalBackground: {
          ...prev.professionalBackground,
          experience: [...prev.professionalBackground.experience, newExperience]
        }
      }));
      setNewExperience({ position: "", company: "", duration: "" });
    }
  };

  const removeExperience = (index: number) => {
    setFormData(prev => ({
      ...prev,
      professionalBackground: {
        ...prev.professionalBackground,
        experience: prev.professionalBackground.experience.filter((_, i) => i !== index)
      }
    }));
  };

  // Handle form submission with Supabase update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user?.id) {
      setFeedback({
        type: "error",
        message: "User not authenticated"
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      console.log('🔄 Updating mentee profile for user:', user.id);
      
      // Prepare data for Supabase update
      const updateData: any = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        location: formData.location,
        bio: formData.bio,
        Interests: formData.goals,
        LinkedIn: formData.socials.linkedin || null,
        Website: formData.socials.website || null,
        updateAt: new Date().toISOString()
      };

      // Include profile_picture if it's a valid URL (not blob and not default)
      if (formData.profilePicture && 
          !formData.profilePicture.startsWith('blob:') &&
          !formData.profilePicture.includes('anonymous.jpg')) {
        updateData.profile_picture = formData.profilePicture;
      }

      const { data, error } = await supabasase
        .from('mentee')
        .update(updateData)
        .eq('supabaseId', user.id)
        .select()
        .single();

      if (error) {
        console.error('❌ Error updating mentee profile:', error);
        throw new Error(error.message);
      }

      console.log('✅ Profile updated successfully:', data);

      setFeedback({
        type: "success",
        message: "Profile updated successfully!"
      });

      // Navigate back to profile after a short delay
      setTimeout(() => {
        navigate("/mentee-dashboard", {
          state: { message: "Profile updated successfully!" }
        });
      }, 2000);
    } catch (error) {
      console.error('💥 Error updating profile:', error);
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to update profile. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle image upload with Supabase Storage
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user?.id) return;

    try {
      setFeedback({
        type: "success",
        message: "Uploading image..."
      });

      // Upload to Supabase Storage
      const uploadedUrl = await uploadProfilePicture(file, user.id);
      
      if (uploadedUrl) {
        // Update form data with the uploaded URL
        setFormData((prev: MenteeProfile) => ({
          ...prev,
          profilePicture: uploadedUrl
        }));
        
        setFeedback({
          type: "success",
          message: "Image uploaded successfully!"
        });
      } else {
        // If upload fails, create a local preview
        const imageUrl = URL.createObjectURL(file);
        setFormData((prev: MenteeProfile) => ({
          ...prev,
          profilePicture: imageUrl
        }));
        
        setFeedback({
          type: "error",
          message: "Image upload failed. Showing preview only."
        });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setFeedback({
        type: "error",
        message: "Error uploading image. Please try again."
      });
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AuthHeader />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Edit Profile</h1>
              <p className="mt-2 text-gray-600">Update your information and preferences</p>
            </div>
            <button
              onClick={() => navigate("/mentee-dashboard")}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <X className="h-4 w-4" />
              Cancel
            </button>
          </div>
        </div>

        {/* Feedback */}
        {feedback && (
          <div className={`mb-6 p-4 rounded-lg ${
            feedback.type === 'success' 
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
              : 'bg-red-50 border border-red-200 text-red-700'
          }`}>
            {feedback.message}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: 'basic', name: 'Basic Information', icon: Camera },
              { id: 'professional', name: 'Professional', icon: MapPin },
              { id: 'preferences', name: 'Learning Preferences', icon: Clock }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id as any)}
                  className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeSection === tab.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* Basic Information Section */}
            {activeSection === 'basic' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-6">Basic Information</h3>
                
                {/* Profile Picture */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Profile Picture</label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                      <img
                        src={formData.profilePicture}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="profile-upload"
                      />
                      <label
                        htmlFor="profile-upload"
                        className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        <Camera className="h-4 w-4" />
                        Change Photo
                      </label>
                    </div>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>

                {/* Location and Timezone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, Country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Timezone
                    </label>
                    <TimezoneDropdown
                      value={formData.timezone}
                      onChange={(timezone) => setFormData(prev => ({ ...prev, timezone }))}
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about yourself, your interests, and what you're looking to achieve..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-vertical"
                  />
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Social Links</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                        <Linkedin className="inline h-4 w-4 mr-1" />
                        LinkedIn
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={formData.socials.linkedin || ""}
                        onChange={handleSocialChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                        <Globe className="inline h-4 w-4 mr-1" />
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.socials.website || ""}
                        onChange={handleSocialChange}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Languages</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.languages.map((language, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm"
                      >
                        {language}
                        <button
                          type="button"
                          onClick={() => removeLanguage(index)}
                          className="ml-1 text-emerald-600 hover:text-emerald-800"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newLanguage}
                      onChange={(e) => setNewLanguage(e.target.value)}
                      placeholder="Add a language"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLanguage())}
                    />
                    <button
                      type="button"
                      onClick={addLanguage}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Skills</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(index)}
                          className="ml-1 text-blue-600 hover:text-blue-800"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a skill"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Goals */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Learning Goals</label>
                  <div className="space-y-2 mb-3">
                    {formData.goals.map((goal, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="text-sm">{goal}</span>
                        <button
                          type="button"
                          onClick={() => removeGoal(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newGoal}
                      onChange={(e) => setNewGoal(e.target.value)}
                      placeholder="Add a learning goal"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addGoal())}
                    />
                    <button
                      type="button"
                      onClick={addGoal}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Professional Section - Simplified for current DB schema */}
            {activeSection === 'professional' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-6">Professional Background</h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Extended professional background features (education, experience) will be available in a future update. 
                    For now, you can include this information in your bio above.
                  </p>
                </div>

                {/* Role and Organization - placeholder for future */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="e.g., Software Developer, Student"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">This field will be added to the database in a future update</p>
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g., Company Name, University"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">This field will be added to the database in a future update</p>
                  </div>
                </div>
              </div>
            )}

            {/* Learning Preferences Section - placeholder for future */}
            {activeSection === 'preferences' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-6">Learning Preferences</h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Detailed learning preferences will be available in a future update with expanded database schema.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="mentorshipStyle" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Mentorship Style
                    </label>
                    <textarea
                      id="mentorshipStyle"
                      name="mentorshipStyle"
                      value={formData.learningPreferences.mentorshipStyle}
                      onChange={handlePreferenceChange}
                      rows={3}
                      placeholder="Describe your preferred mentorship approach..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-vertical"
                    />
                    <p className="text-xs text-gray-500 mt-1">This field will be saved to database in a future update</p>
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                      Availability
                    </label>
                    <input
                      type="text"
                      id="availability"
                      name="availability"
                      value={formData.learningPreferences.availability}
                      onChange={handlePreferenceChange}
                      placeholder="e.g., Weekday evenings, Weekend mornings"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">This field will be saved to database in a future update</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/mentee-dashboard")}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center gap-2 px-6 py-2 rounded-md text-white font-medium transition-colors ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
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

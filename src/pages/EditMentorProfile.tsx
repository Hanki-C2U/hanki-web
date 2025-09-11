import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Save, X, Plus, Trash2, Camera, MapPin, Clock, Linkedin, Globe, Github, Instagram, Twitter } from "lucide-react";
import AuthHeader from "../components/AuthHeader";
import TimezoneDropdown from "../components/ui/TimezoneDropdown";
import { useAuthStore } from "../store/authStore";
import { supabasase } from "../supabase_creds/supabase";
import { getProfilePictureUrl, uploadProfilePicture } from "../utils/profilePicture";

// Define types for mentor profile data structure
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

interface SocialLinks {
  linkedin?: string;
  website?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
}

interface MentorAvailability {
  day: string;
  startTime: string;
  endTime: string;
  isRecurring: boolean;
}

interface MentorProfile {
  firstName: string;
  lastName: string;
  role: string;
  organization: string;
  profilePicture: string;
  bio: string;
  location: string;
  timezone: string;
  languages: string[];
  expertiseAreas: ExpertiseArea[];
  professionalBackground: {
    education: Education[];
    experience: Experience[];
  };
  socials: SocialLinks;
  availability: MentorAvailability[];
}

const EditMentorProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  // UI state
  const [activeSection, setActiveSection] = useState<'basic' | 'professional' | 'availability'>('basic');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  // Default mentor data structure
  const defaultMentorData: MentorProfile = {
    firstName: "",
    lastName: "",
    role: "",
    organization: "",
    profilePicture: "https://nuxcfyhkrkiihdiztzcy.supabase.co/storage/v1/object/public/Project_Pics/anonymous.jpg",
    bio: "",
    location: "",
    timezone: "Africa/Kigali",
    languages: [],
    expertiseAreas: [],
    professionalBackground: {
      education: [],
      experience: []
    },
    socials: {
      linkedin: "",
      website: "",
      github: "",
      instagram: "",
      twitter: ""
    },
    availability: []
  };

  // Initialize form with fetched data
  const [formData, setFormData] = useState<MentorProfile>(defaultMentorData);

  // New item states
  const [newLanguage, setNewLanguage] = useState("");
  const [newExpertise, setNewExpertise] = useState<{ name: string }>({ name: "" });
  const [newEducation, setNewEducation] = useState<Education>({ degree: "", institution: "", year: "" });
  const [newExperience, setNewExperience] = useState<Experience>({ position: "", company: "", duration: "", description: "" });
  const [newAvailability, setNewAvailability] = useState<MentorAvailability>({
    day: "Monday",
    startTime: "09:00",
    endTime: "10:00",
    isRecurring: true
  });

  // Fetch mentor data from Supabase
  useEffect(() => {
    const fetchMentorData = async () => {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      try {
        console.log('🔄 Fetching mentor data for user:', user.id);
        
        const { data: mentorData, error } = await supabasase
          .from('mentor')
          .select('*')
          .eq('supabaseId', user.id)
          .single();

        if (error) {
          console.error('❌ Error fetching mentor data:', error);
          setFeedback({
            type: "error",
            message: "Failed to load profile data"
          });
          setLoading(false);
          return;
        }

        if (mentorData) {
          console.log('✅ Mentor data fetched:', mentorData);
          
          // Parse experience JSON field
          let experienceArray: Experience[] = [];
          try {
            if (mentorData.experience && typeof mentorData.experience === 'string') {
              experienceArray = JSON.parse(mentorData.experience);
            } else if (Array.isArray(mentorData.experience)) {
              experienceArray = mentorData.experience;
            }
          } catch (e) {
            console.warn('⚠️ Could not parse experience JSON:', e);
            experienceArray = [];
          }

          // Fetch profile picture from Supabase Storage
          const profilePicUrl = await getProfilePictureUrl(user.id, 'mentor');

          // Map database fields to form data structure
          const mappedData: MentorProfile = {
            firstName: mentorData.first_name || "",
            lastName: mentorData.last_name || "",
            role: "", // Will be derived from experience or stored separately in future
            organization: "", // Will be derived from experience or stored separately in future
            profilePicture: profilePicUrl,
            bio: mentorData.bio || "",
            location: mentorData.location || "",
            timezone: "Africa/Kigali", // Default timezone
            languages: [], // Will be a separate table in future
            expertiseAreas: (mentorData.expertise || []).map((exp: string) => ({ name: exp })),
            professionalBackground: {
              education: [], // Will be a separate table in future
              experience: experienceArray
            },
            socials: {
              linkedin: mentorData.LinkedIn || "",
              website: mentorData.Website || "",
              github: mentorData.Github || "",
              instagram: mentorData.Instagram || "",
              twitter: mentorData.Twitter || ""
            },
            availability: [] // Will be a separate table in future
          };

          setFormData(mappedData);
        }
      } catch (error) {
        console.error('💥 Unexpected error fetching mentor data:', error);
        setFeedback({
          type: "error",
          message: "An unexpected error occurred"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMentorData();
  }, [user?.id]);

  // Handle simple field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: MentorProfile) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle social links changes
  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: MentorProfile) => ({
      ...prev,
      socials: {
        ...prev.socials,
        [name]: value
      }
    }));
  };

  // Handle professional background changes
  const handleProfessionalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    const { value } = e.target;
    setFormData((prev: MentorProfile) => ({
      ...prev,
      professionalBackground: {
        ...prev.professionalBackground,
        [field]: value
      }
    }));
  };

  // Language management
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

  // Expertise management
  const addExpertise = () => {
    if (newExpertise.name.trim()) {
      setFormData(prev => ({
        ...prev,
        expertiseAreas: [...prev.expertiseAreas, { name: newExpertise.name.trim() }]
      }));
      setNewExpertise({ name: "" });
    }
  };

  const removeExpertise = (index: number) => {
    setFormData(prev => ({
      ...prev,
      expertiseAreas: prev.expertiseAreas.filter((_, i) => i !== index)
    }));
  };

  const handleExpertiseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewExpertise({ name: value });
  };

  // Education management
  const addEducation = () => {
    if (newEducation.degree && newEducation.institution && newEducation.year) {
      setFormData(prev => ({
        ...prev,
        professionalBackground: {
          ...prev.professionalBackground,
          education: [...prev.professionalBackground.education, newEducation]
        }
      }));
      setNewEducation({ degree: "", institution: "", year: "" });
    }
  };

  const removeEducation = (index: number) => {
    setFormData(prev => ({
      ...prev,
      professionalBackground: {
        ...prev.professionalBackground,
        education: prev.professionalBackground.education.filter((_, i) => i !== index)
      }
    }));
  };

  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Education) => {
    const { value } = e.target;
    setNewEducation(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Experience management
  const addExperience = () => {
    if (newExperience.position && newExperience.company && newExperience.duration) {
      setFormData(prev => ({
        ...prev,
        professionalBackground: {
          ...prev.professionalBackground,
          experience: [...prev.professionalBackground.experience, newExperience]
        }
      }));
      setNewExperience({ position: "", company: "", duration: "", description: "" });
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

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Experience) => {
    const { value } = e.target;
    setNewExperience(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Availability management
  const addAvailability = () => {
    setFormData(prev => ({
      ...prev,
      availability: [...prev.availability, newAvailability]
    }));
    setNewAvailability({
      day: "Monday",
      startTime: "09:00",
      endTime: "10:00",
      isRecurring: true
    });
  };

  const removeAvailability = (index: number) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.filter((_, i) => i !== index)
    }));
  };

  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: keyof MentorAvailability) => {
    const { value, type, checked } = e.target as HTMLInputElement;
    setNewAvailability(prev => ({
      ...prev,
      [field]: type === 'checkbox' ? checked : value
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
      console.log('🔄 Updating mentor profile for user:', user.id);
      
      // Prepare data for Supabase update
      const updateData: any = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        location: formData.location,
        bio: formData.bio,
        expertise: formData.expertiseAreas.map(area => area.name),
        experience: JSON.stringify(formData.professionalBackground.experience),
        LinkedIn: formData.socials.linkedin || null,
        Website: formData.socials.website || null,
        Github: formData.socials.github || null,
        Instagram: formData.socials.instagram || null,
        Twitter: formData.socials.twitter || null,
        updateAt: new Date().toISOString()
      };

      // Include profile_picture if it's a valid URL (not blob and not default)
      if (formData.profilePicture && 
          !formData.profilePicture.startsWith('blob:') &&
          !formData.profilePicture.includes('anonymous.jpg')) {
        updateData.profile_picture = formData.profilePicture;
      }

      const { data, error } = await supabasase
        .from('mentor')
        .update(updateData)
        .eq('supabaseId', user.id)
        .select()
        .single();

      if (error) {
        console.error('❌ Error updating mentor profile:', error);
        throw new Error(error.message);
      }

      console.log('✅ Profile updated successfully:', data);

      setFeedback({
        type: "success",
        message: "Profile updated successfully!"
      });

      // Navigate back to dashboard after a short delay
      setTimeout(() => {
        navigate("/mentor-dashboard", {
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
        setFormData((prev: MentorProfile) => ({
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
        setFormData((prev: MentorProfile) => ({
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
              <h1 className="text-3xl font-bold text-gray-900">Edit Mentor Profile</h1>
              <p className="mt-2 text-gray-600">Update your mentor information and expertise</p>
            </div>
            <button
              onClick={() => navigate("/mentor-dashboard")}
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
              { id: 'availability', name: 'Availability', icon: Clock }
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
                    placeholder="Tell us about your professional background, expertise, and what you can offer to mentees..."
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
                    <div>
                      <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-2">
                        <Github className="inline h-4 w-4 mr-1" />
                        GitHub
                      </label>
                      <input
                        type="url"
                        id="github"
                        name="github"
                        value={formData.socials.github || ""}
                        onChange={handleSocialChange}
                        placeholder="https://github.com/yourusername"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-2">
                        <Twitter className="inline h-4 w-4 mr-1" />
                        Twitter
                      </label>
                      <input
                        type="url"
                        id="twitter"
                        name="twitter"
                        value={formData.socials.twitter || ""}
                        onChange={handleSocialChange}
                        placeholder="https://twitter.com/yourusername"
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
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Languages will be stored in the database in a future update.
                    </p>
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

                {/* Expertise Areas */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Areas of Expertise</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.expertiseAreas.map((area, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {area.name}
                        <button
                          type="button"
                          onClick={() => removeExpertise(index)}
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
                      value={newExpertise.name}
                      onChange={handleExpertiseChange}
                      placeholder="Add an area of expertise"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addExpertise())}
                    />
                    <button
                      type="button"
                      onClick={addExpertise}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Professional Section */}
            {activeSection === 'professional' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-6">Professional Background</h3>

                {/* Current Role and Organization - placeholder for future */}
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
                      placeholder="e.g., Senior Software Engineer, Engineering Manager"
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

                {/* Work Experience */}
                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-4">Work Experience</h4>
                  
                  {/* Current Experience List */}
                  <div className="space-y-4 mb-4">
                    {formData.professionalBackground.experience.map((exp, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900">{exp.position}</h5>
                            <p className="text-sm text-gray-600">{exp.company}</p>
                            <p className="text-sm text-gray-500">{exp.duration}</p>
                            {exp.description && (
                              <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => removeExperience(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add New Experience */}
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <h5 className="font-medium text-gray-900 mb-3">Add Work Experience</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Position"
                        value={newExperience.position}
                        onChange={(e) => handleExperienceChange(e, 'position')}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <input
                        type="text"
                        placeholder="Company"
                        value={newExperience.company}
                        onChange={(e) => handleExperienceChange(e, 'company')}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Duration (e.g., 2020 - Present)"
                      value={newExperience.duration}
                      onChange={(e) => handleExperienceChange(e, 'duration')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 mb-4"
                    />
                    <textarea
                      placeholder="Description (optional)"
                      value={newExperience.description || ""}
                      onChange={(e) => handleExperienceChange(e, 'description')}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 mb-4 resize-vertical"
                    />
                    <button
                      type="button"
                      onClick={addExperience}
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      Add Experience
                    </button>
                  </div>
                </div>

                {/* Education - placeholder for future */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Education</h4>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Education details will be stored in a separate database table in a future update.
                    </p>
                  </div>

                  {/* Current Education List */}
                  <div className="space-y-4 mb-4">
                    {formData.professionalBackground.education.map((edu, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900">{edu.degree}</h5>
                            <p className="text-sm text-gray-600">{edu.institution}</p>
                            <p className="text-sm text-gray-500">{edu.year}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeEducation(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add New Education */}
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <h5 className="font-medium text-gray-900 mb-3">Add Education</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Degree"
                        value={newEducation.degree}
                        onChange={(e) => handleEducationChange(e, 'degree')}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <input
                        type="text"
                        placeholder="Institution"
                        value={newEducation.institution}
                        onChange={(e) => handleEducationChange(e, 'institution')}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Year"
                      value={newEducation.year}
                      onChange={(e) => handleEducationChange(e, 'year')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 mb-4"
                    />
                    <button
                      type="button"
                      onClick={addEducation}
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      Add Education
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Availability Section - placeholder for future */}
            {activeSection === 'availability' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-6">Availability Settings</h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Detailed availability scheduling will be available in a future update with expanded database schema.
                  </p>
                </div>

                {/* Current Availability List */}
                <div className="space-y-4 mb-4">
                  {formData.availability.map((slot, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {slot.day}: {slot.startTime} - {slot.endTime}
                          </p>
                          <p className="text-sm text-gray-500">
                            {slot.isRecurring ? 'Recurring weekly' : 'One-time'}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeAvailability(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add New Availability */}
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h4 className="font-medium text-gray-900 mb-3">Add Availability Slot</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <select
                      value={newAvailability.day}
                      onChange={(e) => handleAvailabilityChange(e, 'day')}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    <input
                      type="time"
                      value={newAvailability.startTime}
                      onChange={(e) => handleAvailabilityChange(e, 'startTime')}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <input
                      type="time"
                      value={newAvailability.endTime}
                      onChange={(e) => handleAvailabilityChange(e, 'endTime')}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      id="isRecurring"
                      checked={newAvailability.isRecurring}
                      onChange={(e) => handleAvailabilityChange(e, 'isRecurring')}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isRecurring" className="text-sm text-gray-700">
                      Recurring weekly
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={addAvailability}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    Add Availability
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/mentor-dashboard")}
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

export default EditMentorProfile;

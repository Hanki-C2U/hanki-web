import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Tabs, TabsTrigger, TabsList } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import { Users, GraduationCap } from "lucide-react";
import ChipSelection from "../components/ui/ChipSelectionContext";
import { supabasase } from "../supabase_creds/supabase";
import { useAuthStore } from "../store/authStore";
// import { getOnboardingErrorMessage } from "../utils/onboardingUtils";

const Onboarding = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState<"mentor" | "mentee">("mentee");
  const [chosen, setChosen] = useState(true);
  const [Data, setData] = useState<{ results: any[] }>({ results: [] });

  // Use Zustand store for session management
  // You can now access user session data from anywhere in your app!
  // Example usage:
  // const { user, isAuthenticated, getUserId, getUserEmail } = useAuthStore();
  const { user, setUser, setSession, clearSession } = useAuthStore();

  // Debug user state
  useEffect(() => {
    console.log('🔍 User state changed:', user);
    console.log('🔍 User authenticated:', !!user);
    if (user) {
      console.log('🔍 User ID:', user.id);
      console.log('🔍 User email:', user.email);
    }
  }, [user]);

  const api_key = import.meta.env.VITE_APP_GEOLOCATION_API_KEY;




  
  // Form data for additional profile information - separated by role
  const [menteeData, setMenteeData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    experience: "",
    number: "",
    gender: "",
    profilePic: null as File | null,
    bio: "",
    location: "",
    goals: ""
  });

  const [mentorData, setMentorData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    experience: "",
    number: "",
    gender: "",
    profilePic: null as File | null,
    bio: "",
    expertise: [] as string[],
    location: ""
  });

  // Get current profile data based on role
  const getCurrentProfileData = () => {
    return role === 'mentee' ? menteeData : mentorData;
  };

  // Update profile data based on role
  const updateProfileData = (updates: any) => {
    if (role === 'mentee') {
      setMenteeData(prev => ({ ...prev, ...updates }));
    } else {
      setMentorData(prev => ({ ...prev, ...updates }));
    }
  };

  useEffect(()=>{
    const suggestions = async () => {
      const currentData = getCurrentProfileData();
      const data = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?type=city&format=json&lang=en&text=${currentData.location}&apiKey=${api_key}`)
      const data_json = await data.json()
      setData(data_json)
    }
    
    // Simple debounce implementation
    const timeoutId = setTimeout(() => {
      const currentData = getCurrentProfileData();
      if(currentData.location){
        suggestions()
      }
    }, 300)
    
    return () => clearTimeout(timeoutId)
  },[role, menteeData.location, mentorData.location, api_key])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProfileData({ location: e.target.value });
    setChosen(true)
  }
  
  const [showChipSelection, setShowChipSelection] = useState(false);

  // Get current user on component mount and update Zustand store
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { session }, error } = await supabasase.auth.getSession();
      
      if (error) {
        console.error('Error getting session:', error);
        navigate('/login');
        return;
      }

      if (session && session.user) {
        // Update Zustand store with session data
        setSession(session);
        setUser(session.user);
      } else {
        // Redirect to login if no user
        navigate('/login');
      }
    };

    getCurrentUser();
  }, [navigate, setSession, setUser]);



  // Handle expertise selection from ChipSelection component
  const handleExpertiseChange = (selectedExpertise: string[]) => {
    updateProfileData({ expertise: selectedExpertise });
  };

  // Handle role change
  const handleRoleChange = (newRole: "mentor" | "mentee") => {
    setRole(newRole);
    setShowChipSelection(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    
    console.log('🔥 FORM SUBMITTED - handleSubmit called!');
    console.log('👤 Current user:', user);
    console.log('🎯 Current role:', role);
    console.log('📊 Mentor data:', mentorData);
    console.log('📊 Mentee data:', menteeData);
    
    if (!user) {
      console.error('❌ User not authenticated');
      setError("User not authenticated. Please log in again.");
      return;
    }

    // Basic validation
    const currentData = getCurrentProfileData();
    if (!currentData.firstName || !currentData.lastName) {
      setError("Please fill in your first and last name");
      return;
    }

    if (!currentData.number) {
      setError("Please enter your phone number");
      return;
    }

    if (!currentData.location) {
      setError("Please enter your location");
      return;
    }

    if (!currentData.age || parseInt(currentData.age) < 13 || parseInt(currentData.age) > 120) {
      setError("Please enter a valid age (13-120)");
      return;
    }

    if (!currentData.bio || currentData.bio.trim().length < 10) {
      setError("Please write a brief bio (at least 10 characters)");
      return;
    }

    if (role === 'mentor' && mentorData.expertise.length === 0) {
      setError("Please select at least one area of expertise");
      return;
    }

    if (role === 'mentee' && (!menteeData.goals || menteeData.goals.trim().length < 10)) {
      setError("Please describe your learning goals (at least 10 characters)");
      return;
    }

    console.log('✅ User is authenticated and validation passed, proceeding...');
    setLoading(true);
    setError(null);
    
    try {
      console.log('🚀 Starting onboarding process for user:', user.id);
      
      const currentData = getCurrentProfileData();
      console.log('📋 Current role:', role);
      console.log('📋 Profile data:', currentData);
      
      // Handle profile picture upload
      let profilePicUrl = '';
      if (currentData.profilePic) {
        console.log('📸 Uploading profile picture...');
        const fileExt = currentData.profilePic.name.split('.').pop();
        const fileName = `${user.id}-${Date.now()}.${fileExt}`;
        
        const { error: uploadError } = await supabasase.storage
          .from('Project_Pics')
          .upload(fileName, currentData.profilePic);

        if (uploadError) {
          console.error('❌ Error uploading profile picture:', uploadError);
          throw new Error(`Failed to upload profile picture: ${uploadError.message}`);
        }

        const { data: urlData } = supabasase.storage
          .from('Project_Pics')
          .getPublicUrl(fileName);
        
        profilePicUrl = urlData.publicUrl;
        console.log('✅ Profile picture uploaded successfully:', profilePicUrl);
      }

      // Prepare user data from Google auth + additional profile data
      const userData = {
        first_name: currentData.firstName || user.user_metadata?.given_name || '',
        last_name: currentData.lastName || user.user_metadata?.family_name || '',
        email: user.email,
        password: 'OAUTH_USER', // Placeholder for OAuth users
        supabaseId: user.id,
        age: parseInt(currentData.age) || 20,
        experience: parseInt(currentData.experience) || 0,
        phone_number: currentData.number || `TEMP_${user.id.slice(0, 8)}`, // Fallback to prevent conflicts
        gender: currentData.gender || 'Not specified',
        profile_picture: profilePicUrl || 
          'https://nuxcfyhkrkiihdiztzcy.supabase.co/storage/v1/object/public/Project_Pics/anonymous.jpg',
        location: currentData.location,
        updateAt: new Date().toISOString(),
      };

      console.log('💾 Inserting user data into database...');

      if (role === 'mentor') {
        console.log('📝 Creating mentor profile...');
        
        const mentorInsertData = {
          ...userData,
          expertise: mentorData.expertise,
          Biography: currentData.bio, // Using 'Biography' field name for mentor table
        };
        
        console.log('📋 Mentor data to insert:', mentorInsertData);
        
        const { data, error } = await supabasase
          .from('mentor')
          .insert([mentorInsertData])
          .select();

        if (error) {
          console.error('❌ Error creating mentor profile:', error);
          console.error('❌ Error details:', JSON.stringify(error, null, 2));
          throw new Error(`Failed to create mentor profile: ${error.message || error.details || 'Unknown database error'}`);
        }

        console.log('✅ Mentor profile created successfully:', data);
        
        // Update the session store with the new role
        const { setUserRole } = useAuthStore.getState();
        setUserRole('mentor');
        
        navigate('/mentor-dashboard', { replace: true });
      } else {
        console.log('📝 Creating mentee profile...');
        
        const menteeInsertData = {
          ...userData,
          Interests: [menteeData.goals], // Using actual DB column name "Interests"
          bio: currentData.bio,
        };
        
        console.log('📋 Mentee data to insert:', menteeInsertData);
        console.log('📋 menteeData.goals:', menteeData.goals);
        console.log('📋 currentData.bio:', currentData.bio);
        
        const { data, error } = await supabasase
          .from('mentee')
          .insert([menteeInsertData])
          .select();

        console.log('📊 Mentee insertion result:', { data, error });

        if (error) {
          console.error('❌ Error creating mentee profile:', error);
          console.error('❌ Error details:', JSON.stringify(error, null, 2));
          console.error('❌ Error code:', error.code);
          console.error('❌ Error hint:', error.hint);
          throw new Error(`Failed to create mentee profile: ${error.message || error.details || 'Unknown database error'}`);
        }

        console.log('✅ Mentee profile created successfully:', data);
        
        // Update the session store with the new role
        const { setUserRole } = useAuthStore.getState();
        setUserRole('mentee');
        
        navigate('/mentee-dashboard', { replace: true });
      }
    } catch (error: any) {
      console.error('❌ Onboarding error:', error);
      setError(error.message || 'An unexpected error occurred during onboarding');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Loading...</h2>
          <p className="text-muted-foreground">Please wait while we set up your account.</p>
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-card gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Complete Your Profile</CardTitle>
            <CardDescription>
              Welcome {user.user_metadata?.given_name}! Let's set up your SkillsConnect profile.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs value={role} onValueChange={(value) => handleRoleChange(value as "mentor" | "mentee")} className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mentee" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  I want to learn (Mentee)
                </TabsTrigger>
                <TabsTrigger value="mentor" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  I want to mentor (Mentor)
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error Display */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Onboarding Error
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{error}</p>
                      </div>
                      <div className="mt-4">
                        <div className="flex space-x-2">
                          <button
                            type="button"
                            onClick={() => setError(null)}
                            className="bg-red-100 px-2 py-1 rounded-md text-sm font-medium text-red-800 hover:bg-red-200"
                          >
                            Try Again
                          </button>
                          <button
                            type="button"
                            onClick={async () => {
                              try {
                                await supabasase.auth.signOut();
                                clearSession();
                                navigate('/signup');
                              } catch (e) {
                                console.error('Error signing out:', e);
                              }
                            }}
                            className="bg-red-100 px-2 py-1 rounded-md text-sm font-medium text-red-800 hover:bg-red-200"
                          >
                            Start Over
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Common fields for both roles */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={getCurrentProfileData().firstName}
                    onChange={(e) => updateProfileData({ firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={getCurrentProfileData().lastName}
                    onChange={(e) => updateProfileData({ lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="25"
                    value={getCurrentProfileData().age}
                    onChange={(e) => updateProfileData({ age: e.target.value })}
                    min="16"
                    max="100"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <select
                    id="gender"
                    name="gender"
                    value={getCurrentProfileData().gender}
                    onChange={(e) => updateProfileData({ gender: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="number">Phone Number</Label>
                  <Input
                    id="number"
                    name="number"
                    type="tel"
                    placeholder="+1234567890"
                    value={getCurrentProfileData().number}
                    onChange={(e)=>{updateProfileData({number:e.target.value})}}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="e.g., Kigali, Rwanda"
                    value={getCurrentProfileData().location}
                    onChange={handleChange}
                    required
                  />
                    {chosen && Data.results.map((x,idx)=>{
                      return (<div key={idx} className="rounded-md border-2 border-slate-600">
                        <p  onClick={()=>{
                          updateProfileData({ location: `${x.state}, ${x.country}` });
                          if(getCurrentProfileData().location){
                          setChosen(false)
                          }
                        }}> 
                      {x.state}, {x.country}
                        </p>
                      </div>)
                    })}
                  
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profilePic">Profile Picture (Optional)</Label>
                <Input
                  id="profilePic"
                  name="profilePic"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      updateProfileData({ profilePic: file });
                    }
                  }}
                  className="cursor-pointer"
                />
                <p className="text-xs text-muted-foreground">
                  Upload a profile picture (JPG, PNG, GIF) or use the default image
                </p>
              </div>

              {role === "mentor" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="expertise">Areas of Expertise</Label>
                    <Input
                      id="expertise"
                      name="expertise"
                      placeholder="Click below to select your areas of expertise"
                      value={role === 'mentor' ? (mentorData.expertise || []).join(', ') : ''}
                      readOnly
                      onClick={() => setShowChipSelection(prev => !prev)}
                      className="cursor-pointer"
                      required
                    />
                    {showChipSelection && (
                      <div className="mt-2">
                        <ChipSelection 
                          selectedChips={role === 'mentor' ? mentorData.expertise : []}
                          onSelectionChange={handleExpertiseChange}
                          maxSelections={5}
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      name="experience"
                      type="number"
                      placeholder="5"
                      value={getCurrentProfileData().experience}
                      onChange={(e) => updateProfileData({ experience: e.target.value })}
                      min="0"
                      max="50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      placeholder="Tell us about your professional background and what you can help others with..."
                      value={getCurrentProfileData().bio}
                      onChange={(e) => updateProfileData({ bio: e.target.value })}
                      required
                    />
                  </div>
                </>
              )}

              {role === "mentee" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      name="experience"
                      type="number"
                      placeholder="2"
                      value={getCurrentProfileData().experience}
                      onChange={(e) => updateProfileData({ experience: e.target.value })}
                      min="0"
                      max="50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">Learning Goals</Label>
                    <Textarea
                      id="goals"
                      name="goals"
                      placeholder="What do you hope to achieve through mentorship? What skills do you want to develop?"
                      value={role === 'mentee' ? menteeData.goals : ''}
                      onChange={(e) => {
                        if (role === 'mentee') {
                          setMenteeData(prev => ({ ...prev, goals: e.target.value }));
                        }
                      }}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">About Yourself</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      placeholder="Tell us about yourself, your background, and what you're passionate about..."
                      value={getCurrentProfileData().bio}
                      onChange={(e) => updateProfileData({ bio: e.target.value })}
                      required
                    />
                  </div>
                </>
              )}
              
              <Button 
                type="submit"
                className="w-full gradient-hero text-white font-medium transition-smooth hover:shadow-elevated"
                disabled={loading}
              >
                {loading ? "Setting up your profile..." : `Complete ${role === "mentor" ? "Mentor" : "Mentee"} Profile`}
              </Button>
            </form>
          </CardContent>
        </Card>
        <button 
          onClick={async () => {
            await supabasase.auth.signOut();
            clearSession();
            navigate('/login');
          }}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sign Out 
        </button>
      </div>
    </div>
  );
};

export default Onboarding;

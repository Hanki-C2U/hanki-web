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
import useSessionStore from "../stateStore/useSessionStore";
import { getOnboardingErrorMessage } from "../utils/onboardingUtils";

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
  // const { user, isAuthenticated, getUserId, getUserEmail } = useSessionStore();
  const { user, setUser, setSession, clearSession } = useSessionStore();

  const api_key = import.meta.env.VITE_APP_GEOLOCATION_API_KEY;




  
  // Form data for additional profile information
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    experience: "",
    number: "",
    gender: "",
    profilePic: null as File | null,
    bio: "",
    expertise: [] as string[],
    location: "",
    goals: ""
  });

  useEffect(()=>{
    const suggestions = async () => {
      const data = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?type=city&format=json&lang=en&text=${profileData.location}&apiKey=${api_key}`)
      const data_json = await data.json()
      setData(data_json)
    }
    
    // Simple debounce implementation
    const timeoutId = setTimeout(() => {
      if(profileData.location){
        suggestions()
      }
    }, 1000)
    
    return () => clearTimeout(timeoutId)
  },[profileData.location, api_key])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData(prev => ({ ...prev, location: e.target.value }))
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
    setProfileData(prev => ({
      ...prev,
      expertise: selectedExpertise
    }));
  };

  // Handle role change
  const handleRoleChange = (newRole: "mentor" | "mentee") => {
    setRole(newRole);
    setShowChipSelection(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setError(null);
    
    try {
      console.log('Starting onboarding process for user:', user.id);
      
      // Handle profile picture upload
      let profilePicUrl = '';
      if (profileData.profilePic) {
        console.log('Uploading profile picture...');
        const fileExt = profileData.profilePic.name.split('.').pop();
        const fileName = `${user.id}-${Date.now()}.${fileExt}`;
        
        const { error: uploadError } = await supabasase.storage
          .from('Project_Pics')
          .upload(fileName, profileData.profilePic);

        if (uploadError) {
          console.error('Error uploading profile picture:', uploadError);
          throw new Error(`Failed to upload profile picture: ${uploadError.message}`);
        }

        const { data: urlData } = supabasase.storage
          .from('Project_Pics')
          .getPublicUrl(fileName);
        
        profilePicUrl = urlData.publicUrl;
        console.log('Profile picture uploaded successfully:', profilePicUrl);
      }

      // Prepare user data from Google auth + additional profile data
      const userData = {
        first_name: profileData.firstName || user.user_metadata?.given_name || '',
        last_name: profileData.lastName || user.user_metadata?.family_name || '',
        email: user.email,
        password: 'OAUTH_USER', // Placeholder for OAuth users
        supabaseId: user.id,
        age: parseInt(profileData.age) || 20,
        experience: parseInt(profileData.experience) || 0,
        phone_number: profileData.number,
        gender: profileData.gender || 'Not specified',
        profile_picture: profilePicUrl || 
          'https://nuxcfyhkrkiihdiztzcy.supabase.co/storage/v1/object/public/Project_Pics/anonymous.jpg',
        location: profileData.location,
        updateAt: new Date().toISOString(),
      };

      console.log('Inserting user data into database...');

      if (role === 'mentor') {
        const { data, error } = await supabasase
          .from('mentor')
          .insert([{
            ...userData,
            expertise: profileData.expertise,
            Biography: profileData.bio,
          }])
          .select();

        if (error) {
          console.error('Error creating mentor profile:', error);
          throw new Error(`Failed to create mentor profile: ${error.message || 'Unknown database error'}`);
        }

        console.log('Mentor profile created successfully:', data);
        
        // Update the session store with the new role
        const { setUserRole } = useSessionStore.getState();
        setUserRole('mentor');
        
        navigate('/mentor-dashboard', { replace: true });
      } else {
        const { data, error } = await supabasase
          .from('mentee')
          .insert([{
            ...userData,
            Interests: [profileData.goals],
            bio: profileData.bio,
          }])
          .select();

        if (error) {
          console.error('Error creating mentee profile:', error);
          throw new Error(`Failed to create mentee profile: ${error.message || 'Unknown database error'}`);
        }

        console.log('Mentee profile created successfully:', data);
        
        // Update the session store with the new role
        const { setUserRole } = useSessionStore.getState();
        setUserRole('mentee');
        
        navigate('/mentee-dashboard', { replace: true });
      }
    } catch (error: any) {
      console.error('Onboarding error:', error);
      setError(getOnboardingErrorMessage(error));
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

  const handleSignOut = () => {
    return supabasase.auth.signOut()
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
                    value={profileData.firstName}
                    onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
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
                    value={profileData.lastName}
                    onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
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
                    value={profileData.age}
                    onChange={(e) => setProfileData(prev => ({ ...prev, age: e.target.value }))}
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
                    value={profileData.gender}
                    onChange={(e) => setProfileData(prev => ({ ...prev, gender: e.target.value }))}
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
                    value={profileData.number}
                    onChange={(e) => setProfileData(prev => ({ ...prev, number: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="e.g., Kigali, Rwanda"
                    value={profileData.location}
                    onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                    required
                  />
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
                      setProfileData(prev => ({ ...prev, profilePic: file }));
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
                      value={profileData.expertise.join(', ')}
                      readOnly
                      onClick={() => setShowChipSelection(prev => !prev)}
                      className="cursor-pointer"
                      required
                    />
                    {showChipSelection && (
                      <div className="mt-2">
                        <ChipSelection 
                          selectedChips={profileData.expertise}
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
                      value={profileData.experience}
                      onChange={(e) => setProfileData(prev => ({ ...prev, experience: e.target.value }))}
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
                      value={profileData.bio}
                      onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
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
                      value={profileData.experience}
                      onChange={(e) => setProfileData(prev => ({ ...prev, experience: e.target.value }))}
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
                      value={profileData.goals}
                      onChange={(e) => setProfileData(prev => ({ ...prev, goals: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">About Yourself</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      placeholder="Tell us about yourself, your background, and what you're passionate about..."
                      value={profileData.bio}
                      onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
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

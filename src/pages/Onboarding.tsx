import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import { Users, GraduationCap } from "lucide-react";
import ChipSelection from "../components/ui/ChipSelectionContext";
import { mockMentors, mockMentees, type MockUser } from "../data/mockData";

const Onboarding = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<MockUser | null>(null);
  const [role, setRole] = useState<"mentor" | "mentee">("mentee");

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

  const [showChipSelection, setShowChipSelection] = useState(false);

  // Get current user on component mount
  useEffect(() => {
    const getCurrentUser = () => {
      const storedUser = localStorage.getItem('mockUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        // Redirect to login if no user
        navigate('/login');
      }
    };

    getCurrentUser();
  }, [navigate]);

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
    try {
      // Use local profile picture or default
      let profilePicUrl = 'https://via.placeholder.com/150';
      if (profileData.profilePic) {
        // Simulate file upload by creating an object URL
        // This URL will only last for the current session
        profilePicUrl = URL.createObjectURL(profileData.profilePic);
      }

      // Prepare user data from mock user + additional profile data
      const userData = {
        id: Math.floor(Math.random() * 10000).toString(), // Generate random ID
        first_name: profileData.firstName || user.user_metadata?.given_name || '',
        last_name: profileData.lastName || user.user_metadata?.family_name || '',
        email: user.email,
        supabaseId: user.id,
        age: parseInt(profileData.age) || 20,
        experience: parseInt(profileData.experience) || 0,
        phone_number: profileData.number,
        gender: profileData.gender || 'Not specified',
        profile_picture: profilePicUrl,
        location: profileData.location,
        updateAt: new Date().toISOString(),
      };

      if (role === 'mentor') {
        // Create a new mentor in mock data
        const newMentor = {
          ...userData,
          expertise: profileData.expertise,
          Biography: profileData.bio,
        };

        // Add to mock mentors (in a real scenario we'd update the mock data)
        console.log('Mentor profile created successfully:', newMentor);

        // Store user type in localStorage
        localStorage.setItem('userType', 'mentor');
        localStorage.setItem('mockUserProfile', JSON.stringify(newMentor));

        navigate('/mentor-dashboard');
      } else {
        // Create a new mentee in mock data
        const newMentee = {
          ...userData,
          Interests: [profileData.goals],
          bio: profileData.bio,
        };

        // Add to mock mentees (in a real scenario we'd update the mock data)
        console.log('Mentee profile created successfully:', newMentee);

        // Store user type in localStorage
        localStorage.setItem('userType', 'mentee');
        localStorage.setItem('mockUserProfile', JSON.stringify(newMentee));

        navigate('/mentee-dashboard');
      }
    } catch (error) {
      console.error('Onboarding error:', error);
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
    localStorage.removeItem('mockUser');
    localStorage.removeItem('userType');
    localStorage.removeItem('mockUserProfile');
    navigate('/login');
    return;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-card gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Complete Your Profile</CardTitle>
            <CardDescription>
              Welcome {user.user_metadata?.given_name}! Let's set up your ATLAS profile.
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
        <button onClick={() => handleSignOut()}>Sign Out</button>
      </div>
    </div>
  );
};

export default Onboarding;

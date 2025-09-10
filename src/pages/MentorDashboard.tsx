import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from 'uuid';
import {
  Calendar,
  Users,
  Clock,
  MessageCircle,
  Video,
  Star,
  Linkedin,
  Globe,
  MessageSquare,
  Edit,
  Briefcase,
  GraduationCap,
  MapPin,
  Clock3
} from "lucide-react";
import AuthHeader from "../components/AuthHeader";
import OpportunityList from "../components/OpportunityList";
import type { Opportunity } from "../components/OpportunityCard";
import { DayPicker } from "react-day-picker";
import { format, isToday, isSameDay, parseISO } from "date-fns";
import "react-day-picker/dist/style.css";
import { getCurrentTimeInTimezone, getTimezoneOffset } from "../utils/timezones";

// Define types for mentor profile data - matching EditMentorProfile
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

interface Review {
  id: number;
  mentee: string;
  rating: number;
  date: string;
  comment: string;
}

interface Session {
  id: number;
  menteeId: number;
  mentee: string;
  topic: string;
  date: string; // ISO format date
  startTime: string;
  endTime: string;
  duration: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

interface Request {
  id: number;
  mentee: string;
  topic: string;
  message: string;
}

const MentorDashboard = () => {
  // Tabs for the profile view
  const [activeTab, setActiveTab] = useState<'bio' | 'reviews' | 'schedule' | 'opportunities'>('bio');
  // State for the selected date in the calendar
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  // State to track current time for display
  const [currentTime, setCurrentTime] = useState<string>(format(new Date(), 'h:mm a'));
  const navigate = useNavigate();

  // We'll update this after mentorData is defined

  // Helper function to identify days that have sessions
  const getDaysWithSessions = (sessions: Session[]) => {
    return sessions.map(session => parseISO(session.date));
  };

  // Sample opportunities data
  const initialOpportunities: Opportunity[] = [
    {
      id: "1",
      title: "Frontend Developer Position",
      organization: "Tech Rwanda Ltd",
      type: "job",
      link: "https://example.com/job",
      description: "Exciting opportunity for a frontend developer with React experience to join our growing team in Kigali.",
      postedBy: "Emmanuel Ntagungira"
    },
    {
      id: "2",
      title: "Web Development Bootcamp Scholarship",
      organization: "Code Academy Rwanda",
      type: "education",
      link: "https://example.com/bootcamp",
      description: "12-week intensive bootcamp covering full-stack web development. Scholarships available for promising students.",
      postedBy: "Sarah Mukamana"
    },
    {
      id: "3",
      title: "Junior Backend Developer",
      organization: "Fintech Startup",
      type: "job",
      link: "https://example.com/backend-job",
      description: "Looking for a skilled backend developer with Node.js experience to help scale our financial services platform.",
      postedBy: "David Nkurunziza"
    }
  ];

  // State to store opportunities
  const [opportunities, setOpportunities] = useState<Opportunity[]>(initialOpportunities);

  // Load opportunities from localStorage
  useEffect(() => {
    const storedOpportunities = localStorage.getItem('mentorOpportunities');
    if (storedOpportunities) {
      try {
        setOpportunities(JSON.parse(storedOpportunities));
      } catch (error) {
        console.error("Failed to parse opportunities from localStorage:", error);
      }
    }
  }, []);

  // Save opportunities to localStorage when they change
  useEffect(() => {
    // Save to both mentorOpportunities and opportunities (shared with mentees)
    localStorage.setItem('mentorOpportunities', JSON.stringify(opportunities));
    localStorage.setItem('opportunities', JSON.stringify(opportunities));
  }, [opportunities]);

  // Function to handle adding new opportunities
  const handleAddOpportunity = (newOpportunity: Omit<Opportunity, 'id'>) => {
    const opportunityWithId: Opportunity = {
      ...newOpportunity,
      id: uuidv4()
    };

    setOpportunities(prev => [opportunityWithId, ...prev]);
  };

  // Default mentor data
  const defaultMentorData: MentorProfile = {
    firstName: "Emmanuel",
    lastName: "Ntagungira",
    role: "Engineering Leader",
    organization: "IntegrityNext",
    profilePicture: "/emmanuel-portrait.png",
    bio: "Emmanuel Ntagungira is an Engineering Leader, former Engineering Manager of Platform Engineering at Personio SE & Co. KG, former Domain Quality Lead at Magento Commerce as a part of eBay Inc. QA Coach at StartIT Training Center for IT Specialists, where he helps talented people to start their new careers in IT.",
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
      ]
    },
    location: "Berlin, Germany",
    timezone: "GMT+01:00",
    linkedIn: "https://linkedin.com/in/denyspavlenko",
    website: "https://denys-portfolio.dev",
    availability: [
      { day: "Monday", startTime: "18:00", endTime: "21:00", isRecurring: true },
      { day: "Wednesday", startTime: "18:00", endTime: "21:00", isRecurring: true },
      { day: "Saturday", startTime: "10:00", endTime: "15:00", isRecurring: true },
    ]
  };

  // State to hold mentor data, initially populated with default
  const [mentorData, setMentorData] = useState<MentorProfile>(defaultMentorData);

  // Load mentor data from localStorage on component mount
  useEffect(() => {
    const storedMentorData = localStorage.getItem('mentorProfile');
    if (storedMentorData) {
      try {
        const parsedData = JSON.parse(storedMentorData);
        setMentorData(parsedData);
      } catch (error) {
        console.error("Failed to parse mentor data from localStorage:", error);
      }
    }
  }, []);

  // Update the current time every minute
  useEffect(() => {
    // Helper function to update the time
    const updateTime = () => {
      // Use the timezone utility to get correct time in the mentor's timezone
      setCurrentTime(getCurrentTimeInTimezone(mentorData.timezone));
    };

    // Set the current time immediately
    updateTime();

    const timer = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [mentorData.timezone]);

  const reviews: Review[] = [
    {
      id: 1,
      mentee: "Alice Mutoni",
      rating: 5,
      date: "August 25, 2025",
      comment: "Denys has been an incredible mentor. His guidance on system architecture helped me restructure my project completely."
    },
    {
      id: 2,
      mentee: "David Nshuti",
      rating: 5,
      date: "August 15, 2025",
      comment: "I appreciate Denys's direct and practical approach. He didn't just give me theoretical advice but showed me how to apply it in real-world scenarios."
    }
  ];

  const upcomingSessions: Session[] = [
    {
      id: 1,
      menteeId: 101,
      mentee: "Alice Mutoni",
      topic: "Career Transition to Tech",
      date: "2025-09-16", // Today
      startTime: "14:00",
      endTime: "15:00",
      duration: "1 hour",
      status: 'scheduled'
    },
    {
      id: 2,
      menteeId: 102,
      mentee: "David Nshuti",
      topic: "Startup Strategy Review",
      date: "2025-09-29", // Tomorrow
      startTime: "10:00",
      endTime: "10:45",
      duration: "45 minutes",
      status: 'scheduled'
    },
    {
      id: 3,
      menteeId: 103,
      mentee: "Maria Uwase",
      topic: "Technical Interview Prep",
      date: "2025-09-12", // Next Friday
      startTime: "15:00",
      endTime: "16:00",
      duration: "1 hour",
      status: 'scheduled'
    }
  ];

  const pendingRequests: Request[] = [
    {
      id: 1,
      mentee: "Sarah Uwimana",
      topic: "Marketing Career Guidance",
      message: "I'm looking for guidance on transitioning from traditional marketing to digital marketing..."
    },
    {
      id: 2,
      mentee: "Jean Baptiste",
      topic: "Engineering Leadership",
      message: "I'd like to discuss leadership skills and career advancement in tech..."
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  // Handle edit profile button click
  const handleEditProfile = () => {
    navigate("/edit-mentor-profile");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Information */}
          <div className="md:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={mentorData.profilePicture}
                    alt={`${mentorData.firstName} ${mentorData.lastName}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold">{mentorData.firstName} {mentorData.lastName}</h1>
                <p className="text-gray-600">{mentorData.role} at {mentorData.organization}</p>


                <div className="flex flex-wrap justify-center gap-1 mt-3">
                  {mentorData.languages.map((language, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                {/* Location and Timezone - GitHub Style */}
                <div className="mt-3 flex flex-col gap-1.5 items-start">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{mentorData.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Clock3 className="h-4 w-4" />
                    <span className="text-sm">{currentTime} ({getTimezoneOffset(mentorData.timezone)})</span>
                  </div>
                </div>

                <div className="w-full mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-center space-x-3">
                    {mentorData.linkedIn && (
                      <a
                        href={mentorData.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {mentorData.website && (
                      <a
                        href={mentorData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-emerald-600"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleEditProfile}
                  className="mt-4 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  <Edit className="h-3.5 w-3.5 mr-1" />
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Your Impact</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 mx-auto text-emerald-600 mb-2" />
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-sm text-gray-600">Mentees</p>
                </div>

                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Clock className="h-6 w-6 mx-auto text-emerald-600 mb-2" />
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-gray-600">Hours</p>
                </div>

                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Video className="h-6 w-6 mx-auto text-emerald-600 mb-2" />
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-sm text-gray-600">Sessions</p>
                </div>

                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Star className="h-6 w-6 mx-auto text-emerald-600 mb-2" />
                  <p className="text-2xl font-bold">4.9</p>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
              </div>
            </div>

            {/* Pending Requests Card - Always visible */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Pending Requests</h3>
                {pendingRequests.length > 0 && (
                  <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
                    {pendingRequests.length}
                  </span>
                )}
              </div>

              {pendingRequests.length > 0 ? (
                <div className="space-y-4">
                  {pendingRequests.map((request) => (
                    <div key={request.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{request.mentee}</h4>
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800">New</span>
                      </div>
                      <p className="text-sm font-medium text-emerald-600 mb-1">{request.topic}</p>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{request.message}</p>
                      <div className="flex gap-2">
                        <button className="flex-1 px-3 py-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 text-sm">
                          Accept
                        </button>
                        <button className="flex-1 px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                          Decline
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <MessageCircle className="h-10 w-10 mx-auto text-gray-300 mb-2" />
                  <p className="text-gray-500 text-sm">No pending requests</p>
                </div>
              )}
            </div>


          </div>

          {/* Right Column - Content Area */}
          <div className="md:col-span-2 space-y-6">
            {/* Upcoming Sessions Preview Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                  Next Session
                </h3>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  View all sessions
                </button>
              </div>

              {upcomingSessions.length > 0 ? (
                <div
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div>
                    <h4 className="font-medium">{upcomingSessions[0].mentee}</h4>
                    <p className="text-sm text-gray-600">{upcomingSessions[0].topic}</p>
                    <p className="text-xs text-gray-500">
                      {isToday(parseISO(upcomingSessions[0].date)) ? "Today" : format(parseISO(upcomingSessions[0].date), 'EEE, MMM d')},
                      {upcomingSessions[0].startTime} • {upcomingSessions[0].duration}
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105 cursor-pointer">
                    <Video className="h-4 w-4" />
                    <span>Join</span>
                  </button>
                </div>
              ) : (
                <div className="text-center py-4 bg-gray-50 rounded-lg">
                  <Clock className="h-8 w-8 mx-auto text-gray-300 mb-2" />
                  <p className="text-gray-500">No upcoming sessions</p>
                  <button className="mt-2 px-4 py-1.5 text-sm bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                    Set Availability
                  </button>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="border-b">
                <nav className="flex" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('bio')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'bio'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Bio
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'reviews'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Reviews
                  </button>
                  <button
                    onClick={() => setActiveTab('schedule')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'schedule'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Schedule
                  </button>
                  <button
                    onClick={() => setActiveTab('opportunities')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'opportunities'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Opportunities
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'bio' && (
                  <div className="space-y-8">
                    {/* About Me */}
                    <section>
                      <h3 className="text-lg font-semibold mb-3">About Me</h3>
                      <p className="text-gray-700">{mentorData.bio}</p>
                    </section>

                    {/* Expertise Areas */}
                    <section>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Briefcase className="h-5 w-5 mr-2 text-emerald-600" />
                        Expertise Areas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {mentorData.expertiseAreas?.map((area, index) => (
                          <div
                            key={index}
                            className="px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-800"
                          >
                            {area.name}
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Work Experience */}
                    <section>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Briefcase className="h-5 w-5 mr-2 text-emerald-600" />
                        Work Experience
                      </h3>
                      <div className="space-y-4">
                        {mentorData.professionalBackground?.experience?.map((exp, index) => (
                          <div key={index} className="border-l-2 border-emerald-200 pl-4">
                            <h4 className="font-medium">{exp.position}</h4>
                            <p className="text-sm text-gray-600">{exp.company} • {exp.duration}</p>
                            {exp.description && <p className="text-sm text-gray-600 mt-1">{exp.description}</p>}
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Education */}
                    <section>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-emerald-600" />
                        Education
                      </h3>
                      <div className="space-y-4">
                        {mentorData.professionalBackground?.education?.map((edu, index) => (
                          <div key={index} className="border-l-2 border-emerald-200 pl-4">
                            <h4 className="font-medium">{edu.degree}</h4>
                            <p className="text-sm text-gray-600">{edu.institution} • {edu.year}</p>
                          </div>
                        ))}
                      </div>
                    </section>



                    {/* Availability */}
                    <section>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
                        Regular Availability
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {mentorData.availability?.map((slot, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded-md text-sm">
                            <div className="flex items-center gap-1">
                              <span className="font-medium">{slot.day}:</span>
                              <span>{slot.startTime} - {slot.endTime}</span>
                              {slot.isRecurring && (
                                <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs bg-emerald-50 text-emerald-700">
                                  Weekly
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Reviews from Mentees</h3>

                    {reviews.length > 0 ? (
                      <div className="space-y-4">
                        {reviews.map(review => (
                          <div key={review.id} className="border-b pb-4 last:border-0">
                            <div className="flex justify-between mb-2">
                              <h4 className="font-medium">{review.mentee}</h4>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <MessageSquare className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                        <p className="text-gray-500">No reviews yet</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'opportunities' && (
                  <div>
                    <OpportunityList
                      opportunities={opportunities}
                      onAddOpportunity={handleAddOpportunity}
                    />
                  </div>
                )}

                {activeTab === 'schedule' && (
                  <div>
                    {/* Calendar and sessions section */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
                      {/* Calendar */}
                      <div className="lg:col-span-3 border rounded-lg p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-emerald-600" />
                            Calendar
                          </h3>
                          <p className="text-sm text-gray-500">Select a date to view sessions</p>
                        </div>

                        {/* React Day Picker Calendar */}
                        <div className="calendar-container">
                          <style>
                            {`
                              .rdp {
                                --rdp-cell-size: 40px;
                                margin: 0;
                              }
                              .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover {
                                background-color: #10b981 !important; /* emerald-500 */
                                color: white !important;
                              }
                              .rdp-day_today:not(.rdp-day_selected) {
                                font-weight: bold;
                                color: #10b981;
                              }
                              .rdp-day_has_session:not(.rdp-day_selected) {
                                border: 1px solid #10b981 !important;
                                color: #10b981 !important;
                              }
                              .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
                                background-color: #e2f8f0 !important;
                              }
                              .rdp-chevron {
                                fill: #10b981;
                              }
                              .rdp-caption_label {
                                color: #238b69;
                                font-size: 1rem;
                              }
                            `}
                          </style>

                          <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => setSelectedDate(date || new Date())}
                            modifiersClassNames={{
                              selected: 'rdp-day_selected',
                              today: 'rdp-day_today',
                              hasSession: 'rdp-day_has_session',
                            }}
                            modifiers={{
                              hasSession: getDaysWithSessions(upcomingSessions),
                            }}
                            modifiersStyles={{
                              hasSession: {
                                fontWeight: 'bold',
                                color: '#10b981',
                              },
                              today: {
                                fontWeight: 'bold',
                                color: '#10b981',
                              }
                            }}
                          />

                          <div className="mt-4 flex gap-4">
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 bg-emerald-500"></div>
                              <span className="text-xs">Today</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 border border-emerald-500"></div>
                              <span className="text-xs">Has sessions</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Selected day sessions */}
                      <div className="lg:col-span-2 border rounded-lg p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold">
                            {isToday(selectedDate) ? "Today's Sessions" : "Selected Day Sessions"}
                          </h3>
                          <p className="text-sm text-gray-500">{format(selectedDate, 'MMMM d, yyyy')}</p>
                        </div>

                        <div className="space-y-3">
                          {upcomingSessions
                            .filter(session => isSameDay(parseISO(session.date), selectedDate))
                            .map((session) => (
                              <div key={session.id} className="border rounded-lg p-3">
                                <div className="flex justify-between">
                                  <span className="text-sm font-medium">{session.startTime} - {session.endTime}</span>
                                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                                    {session.duration}
                                  </span>
                                </div>
                                <h4 className="font-medium mt-1">{session.mentee}</h4>
                                <p className="text-sm text-gray-600">{session.topic}</p>
                                <button className="mt-2 inline-flex items-center text-xs text-emerald-600 hover:text-emerald-800">
                                  <Video className="h-3.5 w-3.5 mr-1" />
                                  Join Session
                                </button>
                              </div>
                            ))}

                          {upcomingSessions.filter(session => isSameDay(parseISO(session.date), selectedDate)).length === 0 && (
                            <div className="text-center py-8 text-gray-500">
                              <Clock className="h-10 w-10 mx-auto text-gray-300 mb-2" />
                              <p>No sessions scheduled for this day</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Upcoming sessions */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>

                      {upcomingSessions.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {upcomingSessions
                            .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime())
                            .map((session) => {
                              // Format date
                              const sessionDate = parseISO(session.date);
                              const formattedDate = format(sessionDate, 'EEE, MMM d');

                              const isTodaySession = isToday(sessionDate);
                              const isTomorrowSession = isSameDay(sessionDate, new Date(new Date().setDate(new Date().getDate() + 1)));
                              const isSelectedDay = isSameDay(sessionDate, selectedDate);

                              let displayDate = formattedDate;
                              if (isTodaySession) displayDate = "Today";
                              if (isTomorrowSession) displayDate = "Tomorrow";

                              return (
                                <div
                                  key={session.id}
                                  className={`flex items-center justify-between p-4 border rounded-lg ${isSelectedDay ? 'bg-emerald-50 border-emerald-300' : ''} cursor-pointer hover:bg-gray-50`}
                                  onClick={() => {
                                    setSelectedDate(sessionDate);
                                    setActiveTab('schedule');
                                  }}
                                >
                                  <div>
                                    <h4 className="font-medium">{session.mentee}</h4>
                                    <p className="text-sm text-gray-600">{session.topic}</p>
                                    <p className="text-xs text-gray-500">
                                      {displayDate}, {session.startTime} • {session.duration}
                                    </p>
                                  </div>
                                  <button className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
                                    <Video className="h-4 w-4" />
                                    <span>Join</span>
                                  </button>
                                </div>
                              );
                            })}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                          <p className="text-gray-500">No upcoming sessions</p>
                        </div>
                      )}
                    </div>

                    {/* We've moved Pending Requests to a separate card in the left column */}
                  </div>
                )}
              </div>
            </div>

            {/* Featured Mentees Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Featured Mentees</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="p-3 border border-gray-200 rounded-lg hover:border-emerald-200 hover:bg-emerald-50 transition-colors cursor-pointer"
                  onClick={() => navigate('/mentee/2')}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                      <img src="/mary-portrait.webp" alt="Alice Mutoni" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium">Alice Mutoni</h4>
                      <p className="text-xs text-gray-500">Software Engineer • 3 sessions</p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between">

                    <span className="text-xs text-emerald-600 hover:text-emerald-800">
                      View Profile
                    </span>
                  </div>
                </div>

                <div
                  className="p-3 border border-gray-200 rounded-lg hover:border-emerald-200 hover:bg-emerald-50 transition-colors cursor-pointer"
                  onClick={() => navigate('/mentee/1')}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                      <img src="/shema-portrait.png" alt="Bienvenu Cyuzuzo" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium">Bienvenu Cyuzuzo</h4>
                      <p className="text-xs text-gray-500">Student • 2 sessions</p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between">
                   
                    <span className="text-xs text-emerald-600 hover:text-emerald-800">
                      View Profile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;
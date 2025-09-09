import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowLeft,
  MapPin,
  Star,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  MessageSquare,
  Clock,
  Linkedin,
  Globe
} from "lucide-react";
import AuthHeader from "../components/AuthHeader";
import { format } from "date-fns";

// Helper function to get current time in mentor's timezone
const getCurrentTimeInTimezone = (timezone: string): string => {
  // In a real implementation, we would use proper timezone conversion
  // For the hackathon demo, we'll just format the current time
  return format(new Date(), 'HH:mm');
};

const MentorProfile = () => {
  // For a real implementation, we would use the id to fetch mentor data
  // const { id } = useParams();

  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [activeTab, setActiveTab] = useState("experience");
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  const navigate = useNavigate();

  // Mock data - in real app, this would be fetched based on ID
  const mentor = {
    id: 1,
    name: "Emmanuel Ntagungira",
    title: "Principal Software Engineer",
    company: "Microsoft",
    expertise: "Software Engineering",
    specializations: ["AI/ML", "Cloud Computing", "System Design"],
    location: "Toronto, Canada",
    timezone: "UTC-5",
    rating: 4.9,
    sessions: 120,
    yearsOfExperience: 15,
    languages: ["English", "French", "Kinyarwanda"],
    socials: {
      linkedin: "https://linkedin.com/in/emmanuel-ntagungira",
      website: "https://emmanuelntagungira.com"
    },
    bio: "15+ years in tech industry, currently Principal Engineer at Microsoft. Passionate about helping African youth break into tech.",
    experience: [
      {
        role: "Principal Software Engineer",
        company: "Microsoft",
        period: "2019 - Present",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro quaerat asperiores provident, aut a iusto itaque id libero labore.'
      },
      {
        role: "Senior Software Engineer",
        company: "Google",
        period: "2016 - 2019",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro quaerat asperiores provident, aut a iusto itaque id libero labore.'
      },
      {
        role: "Software Engineer",
        company: "Amazon",
        period: "2013 - 2016",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro quaerat asperiores provident, aut a iusto itaque id libero labore.'
      }
    ],
    education: [
      {
        degree: "PhD Computer Science",
        institution: "University of Toronto",
        year: "2013"
      },
      {
        degree: "MSc Computer Science",
        institution: "University of Rwanda",
        year: "2008"
      }
    ],
    achievements: [
      "Led teams of 50+ engineers",
      "Contributed to major open-source projects",
      "Mentor of the Year Award - Microsoft 2022"
    ],
    availability: [
      { day: "Monday", slots: ["10:00 AM", "2:00 PM", "4:00 PM"] },
      { day: "Wednesday", slots: ["9:00 AM", "1:00 PM", "3:00 PM"] },
      { day: "Friday", slots: ["11:00 AM", "2:00 PM", "5:00 PM"] }
    ],
    reviews: [
      {
        id: 1,
        mentee: "Alice Mukamana",
        rating: 5,
        comment: "Emmanuel provided invaluable guidance on my career transition into tech. His insights on system design and industry trends were incredibly helpful.",
        date: "2 weeks ago"
      },
      {
        id: 2,
        mentee: "David Nshuti",
        rating: 5,
        comment: "Outstanding mentor! He helped me prepare for technical interviews and land my dream job at a FAANG company.",
        date: "1 month ago"
      }
    ],
    profilePicture: "/professional-headshot-of-young-hispanic-freelancer.png"
  };

  // Update the current time every minute
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(getCurrentTimeInTimezone(mentor.timezone));
    };

    // Set initial time
    updateTime();

    // Update time every minute
    const timer = setInterval(updateTime, 60000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [mentor.timezone]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            to="/discover-mentors"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Mentors
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Information */}
          <div className="md:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={mentor.profilePicture}
                    alt={`${mentor.name}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold">{mentor.name}</h1>
                <p className="text-gray-600">{mentor.title} at {mentor.company}</p>

                <div className="flex flex-wrap justify-center gap-1 mt-3">
                  {mentor.languages.map((language, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                {/* Location */}
                <div className="mt-3 flex items-center gap-1.5 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{mentor.location}</span>
                </div>

                {/* Timezone and Current Time */}
                <div className="mt-2 flex items-center gap-1.5 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{currentTime} ({mentor.timezone})</span>
                </div>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{mentor.rating}</span>
                  <span className="text-gray-600">({mentor.sessions} sessions)</span>
                </div>

                {/* Social Links */}
                <div className="mt-3 flex items-center justify-center gap-3">
                  <a
                    href={mentor.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={mentor.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                    aria-label="Personal Website"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="w-full mt-4 space-y-3">
                  <button
                    onClick={() => {
                      const element = document.getElementById('booking-section');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"

                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book a Session
                  </button>

                  <button
                    onClick={() => navigate(`/messages/mentor/${mentor.id}`)}
                    className="w-full inline-flex items-center justify-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-emerald-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message {mentor.name.split(' ').slice(0, 2).join(' ')}
                  </button>

                </div>

                {/* Specializations */}
                <div className="w-full mt-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-700">Specializations</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {mentor.specializations.map((spec, index) => (
                      <span key={index} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Sidebar - Kept from original */}
            <div id="booking-section" className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5" />
                Book a Session
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Schedule a 1-on-1 mentoring session
              </p>

              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Available Time Slots</h4>
                  {mentor.availability.map((daySlot, dayIndex) => (
                    <div key={dayIndex}>
                      <h5 className="text-sm font-medium text-gray-600 mb-2">{daySlot.day}</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {daySlot.slots.map((slot, slotIndex) => (
                          <button
                            key={slotIndex}
                            className={`inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${selectedTimeSlot === `${daySlot.day}-${slot}`
                              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                              : 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-900'
                              }`}
                            onClick={() => setSelectedTimeSlot(`${daySlot.day}-${slot}`)}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <button
                    className={`w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${!selectedTimeSlot
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-emerald-500 text-white hover:bg-emerald-600'
                      }`}
                    disabled={!selectedTimeSlot}
                    onClick={() => navigate(`/book-session/${mentor.id}?slot=${selectedTimeSlot}`)}
                  >
                    Book Selected Time
                  </button>
                </div>

                <div className="text-center pt-4 border-t">
                  <p className="text-lg font-semibold text-emerald-600">Free Sessions</p>
                  <p className="text-sm text-gray-600">
                    This mentor offers complimentary sessions to support Rwandan youth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content Area */}
          <div className="md:col-span-2 space-y-6">
            {/* Mentor Bio Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-semibold mb-4">About {mentor.name.split(' ')[0]}</h3>
              <p className="text-gray-700">{mentor.bio}</p>

              {mentor.yearsOfExperience && (
                <div className="mt-4 inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                  <Briefcase className="h-4 w-4" />
                  <span className="font-medium">{mentor.yearsOfExperience}+ years experience</span>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="border-b">
                <nav className="flex" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('experience')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'experience'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => setActiveTab('education')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'education'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Education
                  </button>
                  <button
                    onClick={() => setActiveTab('achievements')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'achievements'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Achievements
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
                </nav>
              </div>

              <div className="p-6">
                {/* Experience Tab Content */}
                {activeTab === "experience" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-emerald-600" />
                      Professional Experience
                    </h3>
                    <div className="space-y-6">
                      {mentor.experience.map((exp, index) => (
                        <div key={index} className="border-l-2 border-emerald-500 pl-6 relative">
                          <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-2 top-0"></div>
                          <h3 className="font-semibold text-lg">{exp.role}</h3>
                          <p className="text-emerald-600 font-medium">{exp.company}</p>
                          <p className="text-sm text-gray-600 mb-2">{exp.period}</p>
                          <p className="text-gray-600">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education Tab Content */}
                {activeTab === "education" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-emerald-600" />
                      Education
                    </h3>
                    <div className="space-y-4">
                      {mentor.education.map((edu, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <h3 className="font-semibold">{edu.degree}</h3>
                          <p className="text-emerald-600">{edu.institution}</p>
                          <p className="text-sm text-gray-600">{edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements Tab Content */}
                {activeTab === "achievements" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-emerald-600" />
                      Achievements & Recognition
                    </h3>
                    <ul className="space-y-3">
                      {mentor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-emerald-500 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Reviews Tab Content */}
                {activeTab === "reviews" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-emerald-600" />
                      Mentee Reviews
                    </h3>
                    <div className="space-y-6">
                      {mentor.reviews.map((review) => (
                        <div key={review.id} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{review.mentee}</h4>
                            <div className="flex items-center gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-2">{review.comment}</p>
                          <p className="text-sm text-gray-600">{review.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorProfile;
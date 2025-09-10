import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import {
  ArrowLeft,
  MapPin,
  Star,
  Clock,
  Calendar,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Award,
  Users
} from "lucide-react";

const MentorProfile = () => {
  const { id } = useParams();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [activeTab, setActiveTab] = useState("experience");

  const navigate = useNavigate()

  // Mock data - in real app, this would be fetched based on ID
  const mentor = {
    id: 1,
    name: "Dr. Emmanuel Ntagungira",
    title: "Principal Software Engineer",
    company: "Microsoft",
    expertise: "Software Engineering",
    specializations: ["AI/ML", "Cloud Computing", "System Design", "Leadership"],
    location: "Toronto, Canada",
    rating: 4.9,
    totalSessions: 120,
    responseTime: "2 hours",
    languages: ["English", "Kinyarwanda", "French"],
    bio: "Passionate software engineer with 15+ years of experience building scalable systems at top tech companies. Originally from Rwanda, I'm dedicated to empowering the next generation of African tech talent through mentorship and knowledge sharing.",
    experience: [
      {
        role: "Principal Software Engineer",
        company: "Microsoft",
        period: "2019 - Present",
        description: "Leading cloud infrastructure initiatives and mentoring junior engineers"
      },
      {
        role: "Senior Software Engineer",
        company: "Google",
        period: "2016 - 2019",
        description: "Developed machine learning pipelines for Google Search"
      },
      {
        role: "Software Engineer",
        company: "Amazon",
        period: "2013 - 2016",
        description: "Built distributed systems for AWS services"
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
      "Published 25+ research papers in top-tier conferences",
      "Patent holder for 3 cloud computing innovations",
      "Mentor of the Year Award - Microsoft 2022",
      "Speaker at 20+ international tech conferences"
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
        comment: "Dr. Emmanuel provided invaluable guidance on my career transition into tech. His insights on system design and industry trends were incredibly helpful.",
        date: "2 weeks ago"
      },
      {
        id: 2,
        mentee: "David Nshuti",
        rating: 5,
        comment: "Outstanding mentor! He helped me prepare for technical interviews and land my dream job at a FAANG company.",
        date: "1 month ago"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-subtle border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/discover-mentors" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-smooth">
                <ArrowLeft className="h-4 w-4" />
                Back to Discovery
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold">Mentor Profile</h1>
            </div>
            <Link to="/" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              SkillsConnect
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <div className="lg:col-span-2">
            {/* Profile Header */}
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm mb-8">
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-professional-blue rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                    EN
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
                    <p className="text-xl text-professional-blue font-medium mb-1">{mentor.title} at {mentor.company}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{mentor.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{mentor.rating}</span>
                        <span className="text-gray-600">({mentor.totalSessions} sessions)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-success" />
                        <span className="text-success font-medium">Responds in {mentor.responseTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.specializations.map((spec, index) => (
                        <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900">{spec}</span>
                      ))}
                    </div>

                    <p className="text-gray-600">{mentor.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="space-y-6">
              {/* Tab Navigation */}
              <div className="grid grid-cols-4 bg-gray-100 rounded-lg p-1">
                {[
                  { id: "experience", label: "Experience" },
                  { id: "education", label: "Education" },
                  { id: "achievements", label: "Achievements" },
                  { id: "reviews", label: "Reviews" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab.id
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Experience Tab */}
              {activeTab === "experience" && (
                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Professional Experience
                    </h3>
                  </div>
                  <div className="p-6 pt-0 space-y-6">
                    {mentor.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary pl-6 relative">
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-0"></div>
                        <h3 className="font-semibold text-lg">{exp.role}</h3>
                        <p className="text-professional-blue font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-600 mb-2">{exp.period}</p>
                        <p className="text-gray-600">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === "education" && (
                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Education
                    </h3>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    {mentor.education.map((edu, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-professional-blue">{edu.institution}</p>
                        <p className="text-sm text-gray-600">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements Tab */}
              {activeTab === "achievements" && (
                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Achievements & Recognition
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    <ul className="space-y-3">
                      {mentor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-accent mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === "reviews" && (
                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Mentee Reviews
                    </h3>
                  </div>
                  <div className="p-6 pt-0 space-y-6">
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

          {/* Booking Sidebar */}
          <div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm sticky top-8">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book a Session
                </h3>
                <p className="text-sm text-gray-600">
                  Schedule a 1-on-1 mentoring session
                </p>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Available Time Slots</h4>
                  {mentor.availability.map((daySlot, dayIndex) => (
                    <div key={dayIndex}>
                      <h5 className="text-sm font-medium text-gray-600 mb-2">{daySlot.day}</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {daySlot.slots.map((slot, slotIndex) => (
                          <button
                            key={slotIndex}
                            className={`inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${selectedTimeSlot === `${daySlot.day}-${slot}`
                                ? 'bg-orange-500 text-white hover:bg-orange-600'
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

                <div className="pt-4 border-t space-y-3">
                  <button
                    className={`w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${!selectedTimeSlot
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                      }`}
                    disabled={!selectedTimeSlot}
                    onClick={() => navigate(`/book-session/${mentor.id}?slot=${selectedTimeSlot}`)}
                  >
                    Book Selected Time
                  </button>

                  <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </button>
                </div>

                <div className="text-center pt-4 border-t">
                  <p className="text-lg font-semibold text-success">Free Sessions</p>
                  <p className="text-sm text-gray-600">
                    This mentor offers complimentary sessions to support Rwandan youth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorProfile;
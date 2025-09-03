import { useState } from "react";
import {
  Calendar,
  Users,
  Clock,
  MessageCircle,
  Video,
  Star,
  Linkedin,
  Globe,
  MessageSquare
} from "lucide-react";
import AuthHeader from "../components/AuthHeader";

const MentorDashboard = () => {
  // Tabs for the profile view
  const [activeTab, setActiveTab] = useState<'bio' | 'reviews' | 'schedule'>('bio');

  // Mock data
  const mentorData = {
    id: 1,
    firstName: "Denys",
    lastName: "Pavlenko",
    role: "Engineering Leader",
    organization: "IntegrityNext",
    profilePicture: "/professional-headshot-of-young-hispanic-freelancer.png",
    bio: "Denys Pavlenko is an Engineering Leader, former Engineering Manager of Platform Engineering at Personio SE & Co. KG, former Domain Quality Lead at Magento Commerce as a part of eBay Inc. QA Coach at StartIT Training Center for IT Specialists, where he helps talented people to start their new careers in IT.",
    languages: ["English", "Deutsch", "русский язык", "українська мова"],
    linkedIn: "https://linkedin.com/in/denyspavlenko",
    website: "https://denys-portfolio.dev"
  };

  const reviews = [
    {
      id: 1,
      mentee: "Alice Mukamana",
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

  const upcomingSessions = [
    {
      id: 1,
      mentee: "Alice Mukamana",
      topic: "Career Transition to Tech",
      time: "Today, 2:00 PM",
      duration: "1 hour"
    },
    {
      id: 2,
      mentee: "David Nshuti",
      topic: "Startup Strategy Review",
      time: "Tomorrow, 10:00 AM",
      duration: "45 minutes"
    }
  ];

  const pendingRequests = [
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

                <div className="flex justify-center mt-4 space-x-3">
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
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Your Impact</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 mx-auto text-emerald-600 mb-2" />
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-gray-600">Mentees</p>
                </div>

                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Clock className="h-6 w-6 mx-auto text-emerald-600 mb-2" />
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-sm text-gray-600">Hours</p>
                </div>

                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Video className="h-6 w-6 mx-auto text-emerald-600 mb-2" />
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-gray-600">Sessions</p>
                </div>

                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Star className="h-6 w-6 mx-auto text-emerald-600 mb-2" />
                  <p className="text-2xl font-bold">4.9</p>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content Area */}
          <div className="md:col-span-2 space-y-6">
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
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'bio' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">About Me</h3>
                    <p className="text-gray-700 mb-6">{mentorData.bio}</p>

                    <div className="mt-6">
                      <h4 className="font-medium mb-3">Edit Profile Information</h4>
                      <div className="flex flex-col gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            LinkedIn Profile
                          </label>
                          <input
                            type="url"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="https://linkedin.com/in/yourprofile"
                            defaultValue={mentorData.linkedIn}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Personal Website (optional)
                          </label>
                          <input
                            type="url"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="https://yourwebsite.com"
                            defaultValue={mentorData.website}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Bio
                          </label>
                          <textarea
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="Tell mentees about yourself..."
                            defaultValue={mentorData.bio}
                          />
                        </div>
                        <div className="mt-2">
                          <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
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
                            <div className="flex mb-2">
                              {renderStars(review.rating)}
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

                {activeTab === 'schedule' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>

                    {upcomingSessions.length > 0 ? (
                      <div className="space-y-4">
                        {upcomingSessions.map((session) => (
                          <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h4 className="font-medium">{session.mentee}</h4>
                              <p className="text-sm text-gray-600">{session.topic}</p>
                              <p className="text-xs text-gray-500">{session.time} • {session.duration}</p>
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
                              <Video className="h-4 w-4" />
                              <span>Join</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                        <p className="text-gray-500">No upcoming sessions</p>
                      </div>
                    )}

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">Pending Requests</h3>

                      {pendingRequests.length > 0 ? (
                        <div className="space-y-4">
                          {pendingRequests.map((request) => (
                            <div key={request.id} className="p-4 border rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium">{request.mentee}</h4>
                                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800">New</span>
                              </div>
                              <p className="text-sm font-medium text-emerald-600 mb-1">{request.topic}</p>
                              <p className="text-sm text-gray-600 mb-3">{request.message}</p>
                              <div className="flex gap-2">
                                <button className="px-3 py-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                                  Accept
                                </button>
                                <button className="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50">
                                  Decline
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <MessageCircle className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                          <p className="text-gray-500">No pending requests</p>
                        </div>
                      )}
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

export default MentorDashboard;
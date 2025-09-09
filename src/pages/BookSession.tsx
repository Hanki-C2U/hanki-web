import { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router";
import {
  ArrowLeft,
  Calendar,
  Video,
  MessageCircle,
  CheckCircle
} from "lucide-react";

const BookSession = () => {

  const { mentorId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [goals, setGoals] = useState("");
  const [experience, setExperience] = useState("");

  // Mock mentor data - would fetch based on mentorId in a real application
  const mentor = {
    id: 1,
    name: "Emmanuel Ntagungira",
    expertise: "Software Engineering",
    company: "Microsoft",
    avatar: "EN"
  };

  // Use useMemo to prevent arrays from being recreated on each render
  const availableDates = useMemo(() => [
    { date: "2024-01-15", label: "Mon, Jan 15" },
    { date: "2024-01-17", label: "Wed, Jan 17" },
    { date: "2024-01-19", label: "Fri, Jan 19" },
    { date: "2024-01-22", label: "Mon, Jan 22" }
  ], []);

  const timeSlots = useMemo(() => [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ], []);

  // Parse the selected slot from URL query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const slotParam = searchParams.get('slot');

    if (slotParam) {
      // Format: "day-time" (e.g., "Friday-11:00 AM")
      const [day, time] = slotParam.split('-');

      // Find the matching date for the day
      const dateOption = availableDates.find(date => date.label.includes(day.substring(0, 3)));
      if (dateOption) {
        setSelectedDate(dateOption.date);
      }

      // Set the time if it exists in our time slots
      if (timeSlots.includes(time)) {
        setSelectedTime(time);
      }

      // Also set a default session type for better UX
      if (!sessionType) {
        setSessionType("general-mentoring");
      }
    }
  }, [location.search, availableDates, timeSlots, sessionType]);

  const sessionTypes = [
    { value: "career-guidance", label: "Career Guidance" },
    { value: "technical-review", label: "Technical Review" },
    { value: "interview-prep", label: "Interview Preparation" },
    { value: "project-discussion", label: "Project Discussion" },
    { value: "general-mentoring", label: "General Mentoring" }
  ];

  const handleBookSession = () => {
    // Simulate booking success
    navigate("/mentee-dashboard", {
      state: { message: "Session booked successfully!" }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-subtle border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to={`/mentor/${mentorId}`} className="flex items-center gap-2 text-gray-600 hover:text-emerald-700 transition-smooth">
                <ArrowLeft className="h-4 w-4" />
                Back to Profile
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold">Book Session</h1>
            </div>
            <Link to="/" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              SkillsConnect
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule Your Session
                </h3>
                <p className="text-sm text-gray-600">
                  Book a mentoring session with {mentor.name}
                </p>
              </div>
              <div className="p-6 pt-0 space-y-6">
                {/* Session Type */}
                <div className="space-y-2">
                  <label htmlFor="session-type" className="block text-sm font-medium text-gray-700">Session Type</label>
                  <select
                    value={sessionType}
                    onChange={(e) => setSessionType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                  >
                    <option value="">What would you like to discuss?</option>
                    {sessionTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Select Date</label>
                  <div className="grid grid-cols-2 gap-3">
                    {availableDates.map((dateOption) => (
                      <button
                        key={dateOption.date}
                        className={`inline-flex items-center justify-start gap-2 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${selectedDate === dateOption.date
                          ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                          : 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-900'
                          }`}
                        onClick={() => setSelectedDate(dateOption.date)}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        {dateOption.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Select Time</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        className={`inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${selectedTime === time
                          ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                          : 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-900'
                          }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div className="space-y-2">
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700">Session Goals</label>
                  <textarea
                    id="goals"
                    placeholder="What specific goals do you want to achieve in this session? Be as detailed as possible to help your mentor prepare."
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-vertical"
                  />
                </div>

                {/* Experience Level */}
                <div className="space-y-2">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Your Background</label>
                  <textarea
                    id="experience"
                    placeholder="Briefly describe your current experience level, background, and any relevant context for this session."
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-vertical"
                  />
                </div>

                {/* Additional Preferences */}
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Session Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-gray-600">60 minutes</p>
                    </div>
                    <div>
                      <p className="font-medium">Platform</p>
                      <p className="text-gray-600">Google Meet (link will be provided)</p>
                    </div>
                    <div>
                      <p className="font-medium">Cost</p>
                      <p className="text-emerald-600 font-medium">Free</p>
                    </div>
                    <div>
                      <p className="font-medium">Reschedule</p>
                      <p className="text-gray-600">Up to 24 hours before</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm sticky top-8">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Booking Summary</h3>
              </div>
              <div className="p-6 pt-0 space-y-4">
                {/* Mentor Info */}
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {mentor.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium">{mentor.name}</h4>
                    <p className="text-sm text-emerald-600">{mentor.expertise}</p>
                    <p className="text-xs text-gray-600">{mentor.company}</p>
                  </div>
                </div>

                {/* Session Details */}
                <div className="space-y-3">
                  {sessionType && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Type:</span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-50 text-emerald-700">
                        {sessionTypes.find(t => t.value === sessionType)?.label}
                      </span>
                    </div>
                  )}

                  {selectedDate && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Date:</span>
                      <span className="text-sm font-medium">
                        {availableDates.find(d => d.date === selectedDate)?.label}
                      </span>
                    </div>
                  )}

                  {selectedTime && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Time:</span>
                      <span className="text-sm font-medium">{selectedTime}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Duration:</span>
                    <span className="text-sm font-medium">60 minutes</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cost:</span>
                    <span className="text-sm font-bold text-emerald-600">Free</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4 border-t">
                  <button
                    className={`w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${!selectedDate || !selectedTime || !sessionType
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-emerald-500 text-white hover:bg-emerald-600'
                      }`}
                    onClick={handleBookSession}
                    disabled={!selectedDate || !selectedTime || !sessionType}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Confirm Booking
                  </button>

                  <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Mentor
                  </button>
                </div>

                <div className="text-xs text-gray-600 pt-4 border-t">
                  <p>By booking this session, you agree to our terms of service and cancellation policy.</p>
                  <p className="mt-2 text-emerald-600">This mentor offers complimentary sessions to support Rwandan youth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookSession;
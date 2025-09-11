import { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { 
  ArrowLeft, 
  Calendar, 
  Video, 
  MessageCircle,
  User,
  CheckCircle,
  Loader2,
  Clock
} from "lucide-react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import '../styles/day-picker.css';
import { supabasase } from '../supabase_creds/supabase';
import { useAuthStore } from '../store/authStore';

interface Mentor {
  id: number;
  supabaseId: string;
  first_name: string;
  last_name: string;
  email: string;
  expertise: string[];
  bio: string;
  experience: number;
  profile_picture: string;
  location: string;
  phone_number: string;
  ratings: number;
}

const BookSession = () => {
  const { mentorId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  
  // Form fields matching sessions table
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState(""); // For display purposes
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goals, setGoals] = useState("");
  const [experience, setExperience] = useState("");
  const [additionalParticipants] = useState<string[]>([]);
  
  // Component state
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch mentor data
  useEffect(() => {
    const fetchMentor = async () => {
      if (!mentorId) {
        setError("No mentor ID provided");
        setLoading(false);
        return;
      }

      try {
        const { data: mentorData, error: mentorError } = await supabasase
          .from('mentor')
          .select('*')
          .eq('supabaseId', mentorId)
          .single();

        if (mentorError) {
          console.error('Error fetching mentor:', mentorError);
          setError("Mentor not found");
          setLoading(false);
          return;
        }

        setMentor(mentorData);
        setLoading(false);
      } catch (err) {
        console.error('Error:', err);
        setError("Failed to load mentor data");
        setLoading(false);
      }
    };

    fetchMentor();
  }, [mentorId]);

  // Generate available time slots for any day
  const timeSlots = useMemo(() => [
    { start: "09:00", end: "10:00", label: "9:00 AM - 10:00 AM" },
    { start: "10:00", end: "11:00", label: "10:00 AM - 11:00 AM" },
    { start: "11:00", end: "12:00", label: "11:00 AM - 12:00 PM" },
    { start: "13:00", end: "14:00", label: "1:00 PM - 2:00 PM" },
    { start: "14:00", end: "15:00", label: "2:00 PM - 3:00 PM" },
    { start: "15:00", end: "16:00", label: "3:00 PM - 4:00 PM" },
    { start: "16:00", end: "17:00", label: "4:00 PM - 5:00 PM" },
    { start: "17:00", end: "18:00", label: "5:00 PM - 6:00 PM" }
  ], []);

  // Function to check if a date is available for booking
  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day
    
    // Allow dates from today onwards
    return date >= today;
  };

  // Helper function to check if a time slot is available 
  // For testing: All time slots are always available
  const isTimeSlotAvailable = (): boolean => {
    return true; // Always return true for testing purposes
  };

  const sessionTypes = [
    { value: "career-guidance", label: "Career Guidance" },
    { value: "technical-review", label: "Technical Review" },
    { value: "interview-prep", label: "Interview Preparation" },
    { value: "project-discussion", label: "Project Discussion" },
    { value: "general-mentoring", label: "General Mentoring" }
  ];

  const handleBookSession = async () => {
    if (!mentor || !selectedDate || !startTime || !endTime || !title) {
      alert("Please fill in all required fields");
      return;
    }

    if (!user?.id) {
      alert("You must be logged in to book a session");
      return;
    }

    // For testing: Skip all time validations - allow any date/time
    setBookingLoading(true);
    
    try {
      console.log('🔄 Booking session for user:', user.id, 'with mentor:', mentor.supabaseId);

      // Generate unique room ID and meeting URL
      const jitsiRoomId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const meetingUrl = `https://meet.jit.si/${jitsiRoomId}`;
      
      // Combine description, goals, and experience into a comprehensive description
      const fullDescription = [
        description && `Session Description: ${description}`,
        goals && `Goals: ${goals}`,
        experience && `Background: ${experience}`
      ].filter(Boolean).join(' | ');
      
      // Create session in database
      const sessionData = {
        menteeId: user.id,
        mentorId: mentor.supabaseId,
        title,
        description: fullDescription || null,
        startTime,
        endTime,
        sessionDate: selectedDate.toISOString().split('T')[0], // Use date only (YYYY-MM-DD)
        jitsiRoomId,
        meetingUrl,
        status: 'PENDING',
        additionalParticipants: additionalParticipants
      };

      console.log('📅 Session data to be inserted:', sessionData);

      const { data, error } = await supabasase
        .from('sessions')
        .insert([sessionData])
        .select()
        .single();

      if (error) {
        console.error('❌ Error booking session:', error);
        console.error('❌ Session data that failed:', sessionData);
        if (error.code === '23505') {
          throw new Error("This time slot is already booked. Please choose a different time.");
        }
        throw new Error(`Failed to book session: ${error.message}`);
      }

      console.log('✅ Session booked successfully:', data);
      
      // Navigate back with success message
      navigate("/mentee-dashboard", { 
        state: { message: "Session booked successfully! The mentor will be notified." }
      });
      
    } catch (err) {
      console.error('Booking error:', err);
      alert(err instanceof Error ? err.message : "Failed to book session. Please try again.");
    } finally {
      setBookingLoading(false);
    }
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
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              SkillsConnect
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading mentor details...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Mentor Not Found</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              <Link 
                to="/mentee-dashboard"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        ) : mentor ? (
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
                  Book a mentoring session with {mentor.first_name} {mentor.last_name}
                </p>
              </div>
              <div className="p-6 pt-0 space-y-6">
                {/* Session Type */}
                <div className="space-y-2">
                  <label htmlFor="session-type" className="block text-sm font-medium text-gray-700">Session Type</label>
                  <select
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                  >
                    <option value="">What would you like to discuss?</option>
                    {sessionTypes.map((type) => (
                      <option key={type.value} value={type.label}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Selection with React Day Picker */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Select Date</label>
                  <div className="border border-gray-300 rounded-md p-4 bg-white">
                    <DayPicker
                      mode="single"
                      selected={selectedDate || undefined}
                      onSelect={(date) => {
                        setSelectedDate(date || null);
                        // Reset time selection when date changes
                        setSelectedTime("");
                        setStartTime("");
                        setEndTime("");
                      }}
                      disabled={[
                        { before: new Date() }, // Disable past dates
                        { dayOfWeek: [0] } // Optionally disable Sundays (0 = Sunday)
                      ]}
                      modifiers={{
                        available: isDateAvailable
                      }}
                      modifiersClassNames={{
                        selected: 'bg-emerald-500 text-white hover:bg-emerald-600',
                        today: 'font-bold text-emerald-600',
                        available: 'hover:bg-emerald-50'
                      }}
                      className="mx-auto"
                      captionLayout="dropdown"
                      fromYear={2024}
                      toYear={2026}
                    />
                  </div>
                  {selectedDate && (
                    <p className="text-sm text-emerald-600 font-medium">
                      Selected: {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  )}
                </div>

                {/* Time Selection - Only show when date is selected */}
                {selectedDate && (
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      <Clock className="h-4 w-4 inline mr-2" />
                      Select Time Slot
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((timeSlot) => {
                        const isAvailable = isTimeSlotAvailable(); // Always true for testing
                        const isSelected = startTime === timeSlot.start && endTime === timeSlot.end;
                        
                        return (
                          <button
                            key={`${timeSlot.start}-${timeSlot.end}`}
                            className={`inline-flex items-center justify-center gap-2 h-12 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${
                              !isAvailable 
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                : isSelected
                                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                                  : 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-900'
                            }`}
                            onClick={() => {
                              if (isAvailable) {
                                setSelectedTime(timeSlot.label);
                                setStartTime(timeSlot.start);
                                setEndTime(timeSlot.end);
                              }
                            }}
                            disabled={!isAvailable}
                          >
                            <Video className="h-4 w-4" />
                            {timeSlot.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

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

                {/* Session Description */}
                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Additional Notes (Optional)</label>
                  <textarea
                    id="description"
                    placeholder="Any additional information or specific topics you'd like to cover?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                    {mentor.first_name ? mentor.first_name.charAt(0).toUpperCase() : 'M'}
                  </div>
                  <div>
                    <h4 className="font-medium">{mentor.first_name} {mentor.last_name}</h4>
                    <p className="text-sm text-emerald-600">{mentor.expertise?.join(', ') || 'Mentor'}</p>
                    <p className="text-xs text-gray-600">{mentor.location || 'Professional Mentor'}</p>
                  </div>
                </div>

                {/* Session Details */}
                <div className="space-y-3">
                  {title && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Type:</span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-50 text-emerald-700">
                        {title}
                      </span>
                    </div>
                  )}

                  {selectedDate && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Date:</span>
                      <span className="text-sm font-medium">
                        {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
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
                    className={`w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${
                      !selectedDate || !startTime || !endTime || !title || bookingLoading
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-emerald-500 text-white hover:bg-emerald-600'
                    }`}
                    onClick={handleBookSession}
                    disabled={!selectedDate || !startTime || !endTime || !title || bookingLoading}
                  >
                    {bookingLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Confirm Booking
                      </>
                    )}
                  </button>
                  
                  <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Mentor
                  </button>
                </div>

                <div className="text-xs text-gray-600 pt-4 border-t">
                  <p>By booking this session, you agree to our terms of service and cancellation policy.</p>
                  <p className="mt-2 text-emerald-600">This mentor offers complimentary sessions to support professional growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) : null}
      </main>
    </div>
  );
};

export default BookSession;

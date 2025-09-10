import { Award, ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Mentor } from "../types";
import { useState } from "react";

export default function MentorShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Patricia Nkunda",
      photo: "/claudine-portrait.png",
      role: "Senior Data Scientist",
      flag: "🇬🇧",
      rating: 4.9,
      certified: false
    },
    {
      id: 2,
      name: "Eric Gasana",
      photo: "/emmanuel-portrait.png",
      role: "Product Manager",
      flag: "🇺🇸",
      rating: 4.8,
      certified: true
    },
    {
      id: 3,
      photo: "/mary-portrait.webp",
      name: "Aline Uwimana",
      role: "Marketing Director",
      flag: "🇨🇦",
      rating: 5.0,
      certified: false
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, mentors.length - 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, mentors.length - 2)) % Math.max(1, mentors.length - 2))
  }
  return (
    <section id="mentor-showcase" className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from the Best
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with successful Rwandan diaspora professionals who are ready
            to share their expertise and guide your career journey.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous mentors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next mentors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
            >
              {mentors.map((mentor) => (
                <div key={mentor.id} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={mentor.photo || "/placeholder.svg"}
                        alt={mentor.name}
                        className="w-full h-64 object-cover"
                      />
                      {mentor.rating && (
                        <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-sm">{mentor.rating}</span>
                        </div>
                      )}
                      {mentor.certified && (
                        <div className="absolute top-4 right-4 bg-emerald-600 text-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold text-sm">Certified</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-gray-900">{mentor.name}</h3>
                        <span className="text-lg">{mentor.flag}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{mentor.role}</p>

                      <div className="w-12 h-1 bg-teal-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

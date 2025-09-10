import type { Testimonial } from "../types";
import { useState } from "react";

const testimonies: Testimonial[] = [
  {
    id: 1,
    name: "Alice Mukamana",
    role: "Software Engineer at Andela",
    avatar: "AM",
    rating: 5,
    quote:
      "Through ATLAS, I transitioned from finance to tech in 8 months. My mentor guided me through every step, from learning to code to landing my first developer role.",
    company: "Andela",
  },
  {
    id: 2,
    name: "Jean Baptiste Nsengimana",
    role: "Product Manager at Zipline",
    avatar: "JB",
    rating: 5,
    quote:
      "The career planning sessions were game-changing. My mentor helped me land my dream job at Zipline and taught me how to think like a product leader.",
    company: "Zipline",
  },
  {
    id: 3,
    name: "Sarah Uwimana",
    role: "Marketing Director at Kigali Heights",
    avatar: "SU",
    rating: 5,
    quote:
      "From university student to marketing director in 3 years. My mentor's guidance on leadership and strategy was invaluable for my rapid career growth.",
    company: "Kigali Heights",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const currentUser = testimonies[currentTestimonial];


  return (
    <section
      id="testimonials"
      className="relative bg-gray-900 py-16 lg:py-24 overflow-hidden"
    >
      {/* Enhanced grain texture overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Testimonial Display */}
        <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8 lg:p-12 text-center mb-16 shadow-xl">
          {/* Testimonial grain overlay */}
          <div
            className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='testimonialNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23testimonialNoise)' opacity='0.15'/%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative z-10">
            <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed mb-12">
              "{currentUser.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-emerald-400 font-bold text-lg mb-4">
                {currentUser.avatar}
              </div>
              <div className="text-white font-semibold text-lg">
                {currentUser.name}
              </div>
              <div className="text-gray-400 text-sm">{currentUser.role}</div>

              {/* Navigation Dots */}
              <div className="flex gap-2 mt-8">
                {testimonies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-white' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Build self-confidence Card */}
          <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8 hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
            {/* Card grain overlay */}
            <div
              className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='cardNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23cardNoise)' opacity='0.15'/%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-lg mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">
                Build self-confidence
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Not sure if you are progressing well as a programmer? Push yourself
                to your limits and show yourself what you are really made of.
              </p>
            </div>
          </div>

          {/* Become a Mentor Card */}
          <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8 hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
            {/* Card grain overlay */}
            <div
              className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='cardNoise2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23cardNoise2)' opacity='0.15'/%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-lg mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.002 2.002 0 0 0 18.06 7h-.72c-.8 0-1.54.5-1.85 1.26l-1.92 5.76c-.16.48.08 1 .57 1.16.48.16 1-.08 1.16-.57L16.22 11H18v11h2z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">
                Become a mentor
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lend your expertise to others, either indirectly by contributing
                great solutions or directly by creating your own kata and reviewing code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

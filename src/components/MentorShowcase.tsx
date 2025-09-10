import { Award, Star } from "lucide-react";
import type { Mentor } from "../types";

export default function MentorShowcase() {
  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Patricia Nkunda",
      photo: "/professional-headshot-of-confident-hispanic-sales-.png",
      role: "Senior Data Scientist",
      flag: "🇬🇧",
      rating: 4.9,
      certified: false
    },
    {
      id: 2,
      name: "Eric Gasana",
      photo: "/professional-headshot-of-young-hispanic-freelancer.png",
      role: "Product Manager",
      flag: "🇺🇸",
      rating: 4.8,
      certified: true
    },
    {
      id: 3,
      photo: "/professional-headshot-of-african-woman-hr-professi.png",
      name: "Aline Uwimana",
      role: "Marketing Director",
      flag: "🇨🇦",
      rating: 5.0,
      certified: false
    },
  ];

  return (
    <section id="mentor-showcase" className="relative bg-slate-900 py-16 lg:py-24 overflow-hidden">
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Learn from the Best
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Connect with successful Rwandan diaspora professionals who are ready
            to share their expertise and guide your career journey.
          </p>
        </div>

        {/* Bento Grid for Mentors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Featured Mentor - Large Card */}
          <div className="lg:col-span-2 lg:row-span-2 bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
            <div className="relative h-64 lg:h-80">
              <img
                src={mentors[0].photo || "/placeholder.svg"}
                alt={mentors[0].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              {mentors[0].rating && (
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  <span className="font-semibold text-sm text-white">{mentors[0].rating}</span>
                </div>
              )}
              {mentors[0].certified && (
                <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white rounded-full px-3 py-1 flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold text-sm">Certified</span>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-xl text-white">{mentors[0].name}</h3>
                <span className="text-lg">{mentors[0].flag}</span>
              </div>
              <p className="text-gray-300 mb-4">{mentors[0].role}</p>
              <div className="w-12 h-1 bg-emerald-400 rounded-full"></div>
            </div>
          </div>

          {/* Second Mentor - Medium Card */}
          <div className="lg:col-span-1 bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
            <div className="relative h-48">
              <img
                src={mentors[1].photo || "/placeholder.svg"}
                alt={mentors[1].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              {mentors[1].rating && (
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  <span className="font-semibold text-sm text-white">{mentors[1].rating}</span>
                </div>
              )}
              {mentors[1].certified && (
                <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white rounded-full px-3 py-1 flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold text-sm">Certified</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-lg text-white">{mentors[1].name}</h3>
                <span className="text-sm">{mentors[1].flag}</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">{mentors[1].role}</p>
              <div className="w-8 h-1 bg-emerald-400 rounded-full"></div>
            </div>
          </div>

          {/* Third Mentor - Medium Card */}
          <div className="lg:col-span-1 bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
            <div className="relative h-48">
              <img
                src={mentors[2].photo || "/placeholder.svg"}
                alt={mentors[2].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              {mentors[2].rating && (
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  <span className="font-semibold text-sm text-white">{mentors[2].rating}</span>
                </div>
              )}
              {mentors[2].certified && (
                <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white rounded-full px-3 py-1 flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold text-sm">Certified</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-lg text-white">{mentors[2].name}</h3>
                <span className="text-sm">{mentors[2].flag}</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">{mentors[2].role}</p>
              <div className="w-8 h-1 bg-emerald-400 rounded-full"></div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-white font-semibold mb-1">Expert Mentors</div>
              <div className="text-gray-400 text-sm">Ready to guide you</div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-white font-bold mb-2">Meet Our Mentors</h3>
              <p className="text-gray-300 text-sm mb-4">Discover expertise across industries</p>
              <button className="w-full border border-emerald-500 text-emerald-400 hover:bg-emerald-600/10 hover:text-emerald-300 px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                Browse All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

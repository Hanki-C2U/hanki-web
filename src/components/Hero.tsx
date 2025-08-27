import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-emerald-100 border border-emerald-200 rounded-full px-3 py-1.5 mb-6">
            <span className="text-emerald-700 text-xs font-medium">
              🇷🇼 Empowering Rwanda's Future
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gray-900">Unlock Your Potential with</span>
            <br />
            <span className="text-emerald-600">SkillsConnect Rwanda</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Connect with successful Rwandan diaspora professionals worldwide. 
            Get mentored, build networks, and transform your career through meaningful relationships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="primary" size="lg" icon={ArrowRight} className="min-w-[200px]">
              Start Your Journey
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              Become a Mentor
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Expert Mentors
              </div>
              <div className="text-gray-500 text-xs mt-1">
                From top companies worldwide
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                2,000+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Successful Matches
              </div>
              <div className="text-gray-500 text-xs mt-1">
                Life-changing connections made
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                85%
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Career Growth Rate
              </div>
              <div className="text-gray-500 text-xs mt-1">
                Within 12 months of mentorship
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

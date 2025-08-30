import { ArrowRight } from 'lucide-react';
import {Button} from './ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 py-20 lg:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 mb-8 lg:mb-12">
            <span className="text-emerald-700 text-sm lg:text-base font-medium">
              🇷🇼 Empowering Rwanda's Future
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 lg:mb-8 leading-tight">
            Unlock Your Potential with <span className="text-emerald-600">SkillsConnect Rwanda</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 lg:mb-12 text-pretty leading-relaxed">
            Connect with successful Rwandan diaspora professionals worldwide. Get mentored, build networks, and
            transform your career through meaningful relationships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12 lg:mb-16">
            <Button variant="primary" size="lg" icon={ArrowRight} className="min-w-[180px] text-base py-3">
              Start Your Journey
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[180px] text-base py-3">
              Become a Mentor
            </Button>
          </div>

          {/* Statistics */}
         <section className="container mx-auto px-4 py-6 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div className="space-y-2 lg:space-y-3">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600">500+</div>
              <div className="text-lg lg:text-xl font-semibold text-foreground">Expert Mentors</div>
              <div className="text-sm lg:text-base text-muted-foreground">From top companies worldwide</div>
            </div>
            <div className="space-y-2 lg:space-y-3">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600">2,000+</div>
              <div className="text-lg lg:text-xl font-semibold text-foreground">Successful Matches</div>
              <div className="text-sm lg:text-base text-muted-foreground">Life-changing connections made</div>
            </div>
            <div className="space-y-2 lg:space-y-3">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600">85%</div>
              <div className="text-lg lg:text-xl font-semibold text-foreground">Career Growth Rate</div>
              <div className="text-sm lg:text-base text-muted-foreground">Within 12 months of mentorship</div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </section>
  );
}

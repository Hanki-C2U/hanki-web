import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function WhyRwandaTeaser() {
  return (
    <section className="bg-gradient-to-r from-emerald-50 to-blue-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <span className="text-6xl mr-3">🇷🇼</span>
            <span className="text-emerald-700 text-sm font-medium">
              Land of a Thousand Hills, Home of Endless Opportunity
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Rwanda? Why Now?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Rwanda is Africa's fastest-growing tech hub with a thriving diaspora network. 
            Our platform harnesses this momentum to bridge local talent with global expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">#2</div>
            <div className="text-sm font-medium text-gray-900">Ease of Business</div>
            <div className="text-xs text-gray-500 mt-1">In Africa</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">67%</div>
            <div className="text-sm font-medium text-gray-900">Population Under 30</div>
            <div className="text-xs text-gray-500 mt-1">Young & educated</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">500K+</div>
            <div className="text-sm font-medium text-gray-900">Diaspora Professionals</div>
            <div className="text-xs text-gray-500 mt-1">Ready to mentor</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">250+</div>
            <div className="text-sm font-medium text-gray-900">Tech Companies</div>
            <div className="text-xs text-gray-500 mt-1">Growing ecosystem</div>
          </div>
        </div>

        <div className="text-center">
          <NavLink 
            to="/why-rwanda" 
            className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Discover Rwanda's Potential <ArrowRight className="ml-2 w-5 h-5" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

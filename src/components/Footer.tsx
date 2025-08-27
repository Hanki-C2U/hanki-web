import { Heart, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of Rwandans building brighter careers through meaningful mentorship connections.
          </p>
          <button className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer Content */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="w-12 h-3 bg-gradient-to-r from-emerald-600 to-teal-500 rounded mb-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connecting Rwanda's future with its success through meaningful mentorship.
              </p>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Platform</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    Find Mentors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
              © 2024 SkillsConnect Rwanda. Made with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              {' '}for Rwanda's future.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
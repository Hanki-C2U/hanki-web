import { Star } from 'lucide-react';
import type { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alice Mukamana",
      role: "Software Engineer at Andela",
      avatar: "AM",
      rating: 5,
      quote: "Through ATLAS, I transitioned from finance to tech in 8 months. My mentor guided me through every step, from learning to code to landing my first developer role.",
      company: "Andela"
    },
    {
      id: 2,
      name: "Jean Baptiste Nsengimana",
      role: "Product Manager at Zipline",
      avatar: "JB",
      rating: 5,
      quote: "The career planning sessions were game-changing. My mentor helped me land my dream job at Zipline and taught me how to think like a product leader.",
      company: "Zipline"
    },
    {
      id: 3,
      name: "Sarah Uwimana",
      role: "Marketing Director at Kigali Heights",
      avatar: "SU",
      rating: 5,
      quote: "From university student to marketing director in 3 years. My mentor's guidance on leadership and strategy was invaluable for my rapid career growth.",
      company: "Kigali Heights"
    }
  ];

  return (
    <section id="testimonials" className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real transformations from our community
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              role="article"
              aria-labelledby={`testimonial-${testimonial.id}-name`}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-amber-400 to-emerald-500 rounded-full flex items-center justify-center"
                  role="img"
                  aria-label={`Avatar for ${testimonial.name}`}
                >
                  <span className="text-white font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-6" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 text-center mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <h4 id={`testimonial-${testimonial.id}-name`} className="font-semibold text-gray-900 mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-emerald-600 font-medium">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alice Mukamana",
      role: "Software Engineer at Tech Company",
      avatar: "AM",
      rating: 5,
      quote: "Through SkillsConnect, I transitioned from finance to tech in 8 months. My mentor's guidance was invaluable."
    },
    {
      id: 2,
      name: "Jean Baptiste",
      role: "Product Manager",
      avatar: "JB",
      rating: 5,
      quote: "The career planning sessions helped me land my dream job. The network I built here opened many doors."
    },
    {
      id: 3,
      name: "Sarah Uwimana",
      role: "Marketing Director",
      avatar: "SU",
      rating: 5,
      quote: "From student to executive - my mentor helped me navigate every step of my career journey."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
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
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
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
                <h4 className="font-semibold text-gray-900 mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-emerald-600 font-medium">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-slate-900 text-white py-16 lg:py-20 h-[95vh] flex items-center overflow-hidden"
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* 3D Hexagonal Globe with Space Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Space background with stars */}
        <div className="absolute inset-0">
          {/* Scattered stars */}
          <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-[25%] right-[30%] w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
          <div className="absolute top-[60%] left-[15%] w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-[40%] right-[20%] w-0.5 h-0.5 bg-white rounded-full opacity-30"></div>
          <div className="absolute top-[80%] left-[40%] w-1 h-1 bg-white rounded-full opacity-45 animate-pulse delay-2000"></div>
          <div className="absolute top-[15%] left-[60%] w-0.5 h-0.5 bg-white rounded-full opacity-35"></div>
          <div className="absolute bottom-[20%] left-[70%] w-1 h-1 bg-white rounded-full opacity-55 animate-pulse delay-500"></div>
          <div className="absolute top-[45%] right-[10%] w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
        </div>

        {/* 3D Globe Container */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] transform translate-x-1/3 translate-y-1/6">
          <div 
            className="relative w-full h-full rounded-full"
            style={{
              background: `
                radial-gradient(circle at 35% 25%, rgba(150, 220, 255, 0.6) 0%, rgba(70, 180, 255, 0.5) 15%, rgba(16, 185, 129, 0.7) 35%, rgba(34, 139, 34, 0.8) 55%, rgba(0, 80, 120, 0.85) 75%, rgba(0, 0, 0, 0.95) 100%)
              `,
              boxShadow: `
                inset -120px -120px 200px rgba(0, 0, 0, 0.9),
                inset 60px 60px 120px rgba(16, 185, 129, 0.3),
                inset 20px 20px 60px rgba(150, 220, 255, 0.2),
                0 0 200px rgba(16, 185, 129, 0.4),
                0 30px 60px rgba(0, 0, 0, 0.7),
                0 10px 30px rgba(0, 0, 0, 0.5)
              `,
              animation: 'globe-rotate 200s linear infinite'
            }}
          >
            {/* Hexagonal Pattern Overlay */}
            <svg
              className="absolute inset-0 w-full h-full rounded-full"
              viewBox="0 0 600 600"
              style={{
                clipPath: 'circle(50% at 50% 50%)',
                animation: 'hex-rotate 180s linear infinite'
              }}
            >
              <defs>
                <pattern
                  id="globeHexPattern"
                  x="0"
                  y="0"
                  width="25"
                  height="22"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon
                    points="12.5,1 22,6 22,16 12.5,21 3,16 3,6"
                    fill="none"
                    stroke="rgba(16, 185, 129, 0.6)"
                    strokeWidth="0.5"
                  />
                </pattern>
                
                {/* Continent-like regions */}
                <g id="continents">
                  <ellipse cx="200" cy="150" rx="80" ry="40" fill="rgba(16, 185, 129, 0.3)" opacity="0.7" />
                  <ellipse cx="350" cy="250" rx="60" ry="80" fill="rgba(16, 185, 129, 0.4)" opacity="0.6" />
                  <ellipse cx="150" cy="320" rx="70" ry="50" fill="rgba(16, 185, 129, 0.3)" opacity="0.5" />
                  <ellipse cx="400" cy="180" rx="50" ry="30" fill="rgba(16, 185, 129, 0.35)" opacity="0.6" />
                </g>
              </defs>
              
              <circle cx="300" cy="300" r="300" fill="url(#globeHexPattern)" opacity="0.4" />
            </svg>

            {/* Atmospheric glow */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)',
                filter: 'blur(2px)'
              }}
            ></div>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes globe-rotate {
          from {
            transform: translateX(33.33%) translateY(16.67%) perspective(1000px) rotateX(10deg) rotateY(-15deg) rotateZ(0deg);
          }
          to {
            transform: translateX(33.33%) translateY(16.67%) perspective(1000px) rotateX(10deg) rotateY(-15deg) rotateZ(360deg);
          }
        }
        
        @keyframes hex-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-emerald-900/30 border border-emerald-500/30 rounded-full px-6 py-3 mb-8 lg:mb-12">
            <span className="text-emerald-300 text-sm lg:text-base font-medium">
              🇷🇼 Empowering Rwanda's Future
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 lg:mb-12">
            <span className="text-white">Unlock Your Potential with </span>
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              ATLAS
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 lg:mb-16">
            Connect with successful Rwandan diaspora professionals worldwide.
            Get mentored, build networks, and transform your career through
            meaningful relationships.
          </p>

          {/* Single CTA Button */}
          <div>
            <Button
              variant="outline"
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700 border-emerald-600 font-semibold px-10 py-4 text-lg min-w-[220px] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

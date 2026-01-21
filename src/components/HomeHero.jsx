import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

/* ---------------- SLIDER DATA ---------------- */

const SLIDES = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070",
    category: "SUMMER COLLECTION 2025",
    title: "The Art of Elegance",
    subtitle: "Discover the new season's defining silhouettes and premium fabrics.",
    button: "View Collection",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070",
    category: "EXCLUSIVE EDIT",
    title: "Modern Minimalism",
    subtitle: "Clean lines, neutral tones, and effortless sophistication.",
    button: "Shop The Look",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2070",
    category: "LIMITED EDITION",
    title: "Urban Luxe",
    subtitle: "Statement pieces crafted for the contemporary lifestyle.",
    button: "Explore Now",
  },
];

/* ---------------- HOME HERO ---------------- */

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  /* MANUAL NAVIGATION HANDLERS */
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  /* AUTO SLIDE EFFECT */
  useEffect(() => {
    // Clear any existing timer
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Only set a new timer if not paused
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        // We do not check isAnimating here to ensure the loop is continuous
        // The interval (6000ms) is much larger than the animation duration (1000ms)
        setIsAnimating(true);
        setCurrent((prev) => (prev + 1) % SLIDES.length);
        setTimeout(() => setIsAnimating(false), 1000);
      }, 6000);
    }

    // Cleanup on unmount or dependency change
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPaused]); // Removed isAnimating from dependencies to prevent timer resets

  return (
    <section 
      className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-black text-white group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* SLIDES */}
      {SLIDES.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* IMAGE WITH KEN BURNS EFFECT */}
            <div className={`absolute inset-0 overflow-hidden`}>
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transform transition-transform duration-[8000ms] ease-linear ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 max-w-4xl mx-auto">
                {/* ANIMATED TEXT WRAPPER */}
                {isActive && (
                  <div className="flex flex-col items-center">
                    
                    {/* CATEGORY TAG */}
                    <span className="inline-block mb-4 text-sm md:text-base font-medium tracking-[0.3em] uppercase text-white/80 animate-fade-in-down">
                      {slide.category}
                    </span>

                    {/* TITLE */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 tracking-tight leading-tight animate-fade-in-up delay-100">
                      {slide.title}
                    </h1>

                    {/* SUBTITLE */}
                    <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                      {slide.subtitle}
                    </p>

                    {/* BUTTON */}
                    <button className="group relative px-8 py-4 bg-white text-black font-semibold tracking-wide overflow-hidden rounded-sm animate-fade-in-up delay-300 hover:bg-gray-100 transition-colors">
                      <span className="relative z-10 flex items-center gap-2">
                        {slide.button}
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* NAVIGATION ARROWS (Hidden on mobile, visible on hover desktop) */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 hidden md:block backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 hidden md:block backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* PROGRESS BAR / DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isAnimating) setCurrent(i);
            }}
            className={`group relative py-4 cursor-pointer`}
          >
            <div
              className={`h-[2px] transition-all duration-500 overflow-hidden relative ${
                i === current ? "bg-white/30 w-16" : "bg-white/30 w-12 hover:bg-white/60"
              }`}
            >
              {i === current && (
                <div 
                  key={current} // This forces the progress bar to restart animation on slide change
                  className="absolute inset-0 bg-white"
                  style={{
                    animation: 'progress 6000ms linear forwards',
                    animationPlayState: isPaused ? 'paused' : 'running'
                  }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* CSS FOR ANIMATIONS */}
      <style>{`
        @keyframes progress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
};

export default HomeHero;
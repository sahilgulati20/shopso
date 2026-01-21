import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ---------------- TRENDING DATA ---------------- */

const TRENDING_PRODUCTS = [
  {
    id: 1,
    title: "The Cotton Kurta",
    brand: "Sutara",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1627889868739-65d38c64183d?q=80&w=600", // Fixed Image
  },
  {
    id: 2,
    title: "Floral Mid-Day Dress",
    brand: "Aura",
    price: "₹1,799",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600",
  },
  {
    id: 3,
    title: "Urban Leather Sneakers",
    brand: "Street Soul",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1528701800489-20be3c5fa8a0?q=80&w=600",
  },
  {
    id: 4,
    title: "Signature Tote",
    brand: "Luxe",
    price: "₹1,999",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1c1?q=80&w=600",
  },
  {
    id: 5,
    title: "Series 7 Chrono",
    brand: "TechWear",
    price: "₹3,999",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=600",
  },
  {
    id: 6,
    title: "Vintage Denim Jacket",
    brand: "Denim Co.",
    price: "₹2,199",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=600",
  },
];

/* ---------------- COMPONENT ---------------- */

const TrendingNow = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  /* AUTO SCROLL LOGIC */
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current && !isPaused) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const isEnd = scrollLeft + clientWidth >= scrollWidth - 50;
        
        if (isEnd) {
             sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Updated scroll distance for smaller cards (240px width + 32px gap = 272px)
            sliderRef.current.scrollBy({
                left: 272, 
                behavior: "smooth",
            });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -272, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 272, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-24 border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER - CENTERED */}
        <div className="mb-12 text-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-3 block">
              This Week's Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Trending Now
            </h2>
        </div>

        {/* SLIDER CONTAINER */}
        <div 
            className="relative group/slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
          {/* Custom Navigation Arrows (Absolute Positioned) */}
          <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 p-3 bg-white shadow-lg rounded-full border border-gray-100 opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-4 transition-all duration-300 hover:bg-black hover:text-white"
                aria-label="Previous"
            >
                <ChevronLeft size={20} />
            </button>
            <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 p-3 bg-white shadow-lg rounded-full border border-gray-100 opacity-0 group-hover/slider:opacity-100 group-hover/slider:-translate-x-4 transition-all duration-300 hover:bg-black hover:text-white"
                aria-label="Next"
            >
                <ChevronRight size={20} />
            </button>

          <div
            ref={sliderRef}
            className="flex space-x-8 overflow-x-auto scroll-smooth scrollbar-hide pb-10 px-1"
          >
            {TRENDING_PRODUCTS.map((item) => (
              <div
                key={item.id}
                className="min-w-[240px] group cursor-pointer"
              >
                {/* IMAGE CARD */}
                <div className="relative h-[320px] w-full overflow-hidden mb-4 bg-gray-100">
                   {/* Badge */}
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider z-10">
                       Best Seller
                   </div>
                   
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  
                  {/* Quick Action Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-center bg-gradient-to-t from-black/20 to-transparent">
                      <button className="bg-white text-black text-xs font-bold uppercase tracking-widest py-3 px-8 hover:bg-black hover:text-white transition-colors w-full shadow-lg">
                          Quick Add
                      </button>
                  </div>
                </div>

                {/* PRODUCT INFO */}
                <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">
                    {item.brand}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 font-serif">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
           {/* View All Button (Mobile Only) */}
           <div className="mt-4 text-center md:hidden">
                <button className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                    View All Products
                    <ArrowRight size={14} className="ml-2" />
                </button>
           </div>
        </div>
      </div>
      
      {/* Hide Scrollbar Utility */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TrendingNow;
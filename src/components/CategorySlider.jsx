import React from "react";

/* ---------------- CATEGORY DATA ---------------- */

const CATEGORIES = [
  {
    name: "Men's Kurtas",
    image: "https://images.unsplash.com/photo-1627889868739-65d38c64183d?q=80&w=400", // Traditional Ethnic Wear
  },
  {
    name: "Women's Sarees",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400", // Traditional Saree
  },
  {
    name: "Women's Dresses",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=400", // White Dress
  },
  {
    name: "Men's Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400", // Sneakers
  },
  {
    name: "Women's Tops",
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=400", // Fashion Top
  },
  {
    name: "Men's Jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=400", // Denim
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400", // Smart Watch/Gadget
  },
  {
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400", // Modern Chair/Decor
  },
];

/* ---------------- COMPONENT ---------------- */

const CategorySlider = () => {
  return (
    <section className="bg-white py-20 overflow-hidden border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-3 block">
          Collections
        </span>
        <h2 className="text-3xl font-serif text-gray-900">
          Shop by Category
        </h2>
      </div>

      {/* AUTO SCROLL CONTAINER */}
      <div className="relative w-full">
        {/* We use two sets of categories to ensure seamless looping */}
        <div 
          className="flex space-x-12 w-max px-6"
          style={{
            animation: 'scroll 40s linear infinite',
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {/* TRIPLE array for smoother infinite scroll on wide screens */}
          {[...CATEGORIES, ...CATEGORIES, ...CATEGORIES].map((cat, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center min-w-[140px] cursor-pointer"
            >
              {/* IMAGE WRAPPER */}
              <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-200 p-1 bg-white shadow-sm group-hover:border-gray-900 transition-colors duration-500">
                <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
              </div>

              {/* TEXT */}
              <p className="mt-5 text-sm font-medium text-gray-900 text-center tracking-wide uppercase group-hover:text-gray-600 transition-colors">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Move 1/3 because we tripled the array */
        }
      `}</style>
    </section>
  );
};

export default CategorySlider;
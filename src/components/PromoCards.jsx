import React from "react";
import { ArrowRight } from "lucide-react";

const PromoCards = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* -------- LEFT CARD (Winter/Cozy) -------- */}
        <div className="group relative h-[280px] w-full overflow-hidden cursor-pointer rounded-sm">
          <div className="absolute inset-0 bg-gray-200">
             <img
                src="https://images.unsplash.com/photo-1485230946086-1d99d5297123?q=80&w=1200"
                alt="Winter Collection"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
             />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
          
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2 opacity-90">
                Limited Edition
            </span>
            <h2 className="text-2xl font-serif mb-4 leading-tight">
                Winter Essentials
            </h2>
            
            <button className="w-max border-b border-white pb-0.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-gray-200 hover:border-gray-200 transition-colors flex items-center gap-2">
                Shop Collection <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* -------- RIGHT CARD (Brands/Sale) -------- */}
        <div className="group relative h-[280px] w-full overflow-hidden cursor-pointer rounded-sm">
          <div className="absolute inset-0 bg-gray-200">
             <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200"
                alt="Global Brands"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
             />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2 opacity-90">
                Flash Sale
            </span>
            <h2 className="text-2xl font-serif mb-4 leading-tight">
                Designers & Icons
            </h2>
            
            <button className="w-max border-b border-white pb-0.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-gray-200 hover:border-gray-200 transition-colors flex items-center gap-2">
                View Offers <ArrowRight size={12} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoCards;
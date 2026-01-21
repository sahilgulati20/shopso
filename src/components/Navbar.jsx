import React, { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, Heart, User } from "lucide-react";

/* -------------------- NAVIGATION DATA -------------------- */

const NAVIGATION_LINKS = [
  { id: "men", label: "MEN" },
  { id: "women", label: "WOMEN" },
  { id: "kids", label: "KIDS" },
  { id: "living", label: "HOME & LIVING" },
  { id: "beauty", label: "BEAUTY" },
  { id: "studio", label: "STUDIO", isNew: true },
];

const MEGA_MENU_DATA = {
  men: {
    columns: [
      { title: "Topwear", items: ["Printed T-Shirts", "Oversized Tees", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Jackets"] },
      { title: "Bottomwear", items: ["Jeans", "Casual Trousers", "Joggers", "Shorts", "Boxers", "Formal Trousers"] },
      { title: "Footwear & Accessories", items: ["Sneakers", "Formal Shoes", "Sandals", "Watches", "Sunglasses", "Wallets"] },
    ],
    images: [
      { 
        url: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=600", 
        title: "Streetwear Edits", 
        cta: "Explore Collection" 
      },
      { 
        url: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=600", 
        title: "Workwear Essentials", 
        cta: "Shop Formals" 
      }
    ]
  },
  women: {
    columns: [
      { title: "Indian & Fusion Wear", items: ["Kurtas & Suits", "Sarees", "Ethnic Skirts", "Lehengas", "Dupattas", "Palazzos"] },
      { title: "Western Wear", items: ["Dresses", "Tops & Tees", "Jeans & Jeggings", "Jumpsuits", "Shrugs", "Co-ords"] },
      { title: "Footwear & Bags", items: ["Heels", "Flat Sandals", "Boots", "Handbags", "Totes", "Jewellery"] },
    ],
    images: [
      { 
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600", 
        title: "Summer Breeze", 
        cta: "Shop Dresses" 
      },
      { 
        url: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=600", 
        title: "The Saree Edit", 
        cta: "Shop Ethnic" 
      }
    ]
  },
  kids: {
    columns: [
      { title: "Boys Clothing", items: ["T-Shirts", "Shirts", "Shorts", "Jeans", "Trousers", "Ethnic Wear"] },
      { title: "Girls Clothing", items: ["Dresses", "Tops", "T-shirts", "Skirts", "Leggings", "Jumpsuits"] },
      { title: "Toys & Baby", items: ["Learning Toys", "Soft Toys", "Action Figures", "Baby Care", "School Bags", "Activity Kits"] },
    ],
    images: [
      { 
        url: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600", 
        title: "Playtime Favorites", 
        cta: "Shop Kids" 
      },
      { 
        url: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=600", 
        title: "New Season Styles", 
        cta: "See More" 
      }
    ]
  },
  living: {
    columns: [
      { title: "Bed Linen & Furnishing", items: ["Bedsheets", "Bedding Sets", "Blankets & Quilts", "Pillows", "Curtains", "Cushion Covers"] },
      { title: "Flooring & Bath", items: ["Carpets", "Floor Mats", "Door Mats", "Bath Towels", "Hand Towels", "Bath Robes"] },
      { title: "Decor & Lighting", items: ["Wall Decor", "Clocks", "Photo Frames", "Plants & Planters", "Table Lamps", "String Lights"] },
    ],
    images: [
      { 
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=600", 
        title: "Minimalist Living", 
        cta: "Shop Decor" 
      },
      { 
        url: "https://images.unsplash.com/photo-1522771753037-633361652bff?q=80&w=600", 
        title: "Cozy Bedrooms", 
        cta: "Shop Bedding" 
      }
    ]
  },
  beauty: {
    columns: [
      { title: "Makeup", items: ["Lipstick", "Lip Gloss", "Mascara", "Foundation", "Blush", "Nail Polish"] },
      { title: "Skincare", items: ["Face Moisturizer", "Cleanser", "Sunscreen", "Serum", "Masks", "Eye Cream"] },
      { title: "Hair & Body", items: ["Shampoo", "Conditioner", "Hair Oil", "Perfume", "Body Wash", "Scrub"] },
    ],
    images: [
      { 
        url: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=600", 
        title: "Glow Essentials", 
        cta: "Shop Skincare" 
      },
      { 
        url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600", 
        title: "Makeup Masterclass", 
        cta: "View Products" 
      }
    ]
  },
  studio: {
    columns: [
      { title: "Studio Trends", items: ["Street Style", "Influencer Picks", "New Drops", "Editor's Choice", "Trending Now"] },
      { title: "Collections", items: ["Party Glitch", "Y2K Fashion", "Retro Rewind", "Minimalist", "Abstract Arts"] },
      { title: "Content", items: ["Style Guides", "Lookbooks", "Fashion News", "Behind the Scenes", "Community"] },
    ],
    images: [
      { 
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600", 
        title: "Studio Exclusive", 
        cta: "Explore Trends" 
      },
      { 
        url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600", 
        title: "Runway Ready", 
        cta: "Shop Collection" 
      }
    ]
  },
};

/* -------------------- MEGA MENU COMPONENT -------------------- */

const MegaMenu = ({ category, isVisible, onMouseEnter, onMouseLeave }) => {
  if (!isVisible || !MEGA_MENU_DATA[category]) return null;
  
  const data = MEGA_MENU_DATA[category];

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-10">
        <div className="grid grid-cols-5 gap-8">

          {/* TEXT COLUMNS (Dynamic Data) */}
          {data.columns.map((col, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="mb-4 text-sm font-bold text-gray-900 uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-500 hover:text-pink-600 hover:font-medium cursor-pointer transition-all"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* IMAGE CARDS (Dynamic Data from 'images' array) */}
          {data.images.map((img, idx) => (
            <div key={idx} className="col-span-1 group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-3">
                <img
                  src={img.url}
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  alt={img.title}
                />
              </div>
              <p className="text-base font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                {img.title}
              </p>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide group-hover:underline">
                {img.cta}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

/* -------------------- MAIN NAVBAR -------------------- */

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const hideMenuTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (id) => {
    if (hideMenuTimer.current) clearTimeout(hideMenuTimer.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    hideMenuTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 bg-white z-[100] transition-all duration-300 ${
          isScrolled ? "shadow-md py-2" : "border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12">

          {/* LEFT: LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
              S
            </div>
            <span className="font-bold text-gray-900 text-xl tracking-tight">
              SHOPSO
            </span>
          </div>

          {/* CENTER: NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center h-full gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <div
                key={link.id}
                onMouseEnter={() => handleMouseEnter(link.id)}
                onMouseLeave={handleMouseLeave}
                className="relative h-full flex items-center"
              >
                <span
                  className={`text-xs font-bold tracking-widest cursor-pointer py-4 border-b-[3px] transition-all duration-200 ${
                    activeMenu === link.id
                      ? "border-pink-500 text-gray-900"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                  {link.isNew && (
                    <span className="absolute -top-1 -right-3 text-[9px] font-bold text-pink-600">
                      NEW
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT: ICONS & SEARCH */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center bg-gray-100/80 rounded-full px-4 py-2 w-64 focus-within:bg-white focus-within:ring-1 focus-within:ring-gray-200 transition-all">
              <Search size={16} className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder:text-gray-400 font-medium"
              />
            </div>
            
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center cursor-pointer group">
                 <User size={20} className="text-gray-700 group-hover:text-black transition-colors" />
                 <span className="text-[10px] font-semibold mt-1 hidden md:block group-hover:text-black">Profile</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                 <Heart size={20} className="text-gray-700 group-hover:text-black transition-colors" />
                 <span className="text-[10px] font-semibold mt-1 hidden md:block group-hover:text-black">Wishlist</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                 <ShoppingBag size={20} className="text-gray-700 group-hover:text-black transition-colors" />
                 <span className="text-[10px] font-semibold mt-1 hidden md:block group-hover:text-black">Bag</span>
              </div>
            </div>
          </div>
        </div>

        {/* MEGA MENU RENDER */}
        {NAVIGATION_LINKS.map((link) => (
          <MegaMenu
            key={link.id}
            category={link.id}
            isVisible={activeMenu === link.id}
            onMouseEnter={() => handleMouseEnter(link.id)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className={`${isScrolled ? "h-[60px]" : "h-[80px]"}`} />
    </>
  );
};

export default Navbar;
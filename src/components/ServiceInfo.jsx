import React from "react";
import {
  Headphones,
  ShieldCheck,
  CreditCard,
  Truck,
} from "lucide-react";

const SERVICES = [
  {
    icon: Headphones,
    title: "Concierge Support",
    subtitle: "24/7 Dedicated assistance",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    subtitle: "100% Encrypted transactions",
  },
  {
    icon: Truck,
    title: "Express Shipping",
    subtitle: "Complimentary over ₹999",
  },
  {
    icon: CreditCard,
    title: "Money Back Guarantee",
    subtitle: "30-Day seamless returns",
  },
];

const ServiceInfo = () => {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
          
          {/* Vertical Dividers for Desktop with Gradient Fade */}
          <div className="hidden lg:block absolute top-4 bottom-4 left-1/4 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
          <div className="hidden lg:block absolute top-4 bottom-4 left-2/4 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
          <div className="hidden lg:block absolute top-4 bottom-4 left-3/4 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 flex flex-col items-center text-center transition-all duration-500 hover:bg-gray-50/30 rounded-sm"
              >
                {/* ICON with Hover Effect */}
                <div className="mb-6 relative">
                    {/* Animated background circle */}
                    <div className="absolute inset-0 bg-gray-100 rounded-full scale-50 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 ease-out" />
                    
                    {/* Icon Container */}
                    <div className="relative p-4 rounded-full border border-gray-100 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 z-10">
                        <Icon size={24} strokeWidth={1.5} />
                    </div>
                </div>

                {/* TEXT */}
                <div className="space-y-3 relative z-10">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all duration-500">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-serif italic group-hover:text-gray-800 transition-colors duration-300">
                    {service.subtitle}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
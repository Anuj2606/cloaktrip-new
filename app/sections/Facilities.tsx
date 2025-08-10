import React from "react";

import { Clock, Tickets, ShieldUser } from "lucide-react";

import localFont from "next/font/local";

const kugile = localFont({
  src: "../fonts/Kugile_Demo.ttf",

  variable: "--font-kugile",

  display: "swap",
});

const features = [
  {
    icon: <Tickets size={32} className="text-[#292929]" />,

    title: "Smart Trip Customization",

    description:
      "Tailor every detail of your journey with flexible filters for budget, time, and preferences.",
  },

  {
    icon: <ShieldUser size={32} className="text-[#292929]" />,

    title: "Privacy-First Planning",

    description:
      "Your travel data stays secure and hidden unless you choose to share it.",
  },

  {
    icon: <Clock size={32} className="text-[#292929]" />,

    title: "24/7 Premium Support",

    description:
      "Dedicated assistance anytime for bookings, emergencies, and last-minute itinerary changes.",
  },
];

export default function FacilitiesServices() {
  return (
    <section
      id="facilities"
      className="bg-[#FFFFFF] text-[#3C3C3C] py-24 px-4 sm:px-6 md:px-12 lg:px-24 min-h-[80vh] flex flex-col justify-center"
    >
      <h2
        className={`${kugile.className} text-3xl sm:text-4xl md:text-5xl mb-10 text-start tracking-wider`}
      >
        Facilities and Services
      </h2>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 text-start bg-[#F3F3F3] shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <div className="mb-4 flex justify-start">{feature.icon}</div>

              <h3 className="text-lg font-semibold text-[#3C3C3C] mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-[#3C3C3C]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

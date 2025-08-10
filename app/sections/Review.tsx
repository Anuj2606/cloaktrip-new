"use client";

import React from "react";
import localFont from "next/font/local";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import FourStars from "../components/FourStar";
import FiveStar from "../components/FiveStar";
import ThreeStar from "../components/ThreeStar";

// Font
const kugile = localFont({
  src: "../fonts/Kugile_Demo.ttf",
  variable: "--font-kugile",
  display: "swap",
});

// Review Data
const reviews = [
  {
    name: "Aman Joshi",
    location: "Mumbai, India",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 4,
    date: "Jan 28, 2025",
    title: "Amazing Comfort.",
    comment:
      "I had a comfortable stay — the bed was soft, and the room felt clean and welcoming. The staff at the front desk were super friendly and even helped me arrange a cab at 5 AM. Only thing: the AC took a while to cool down, but once it did, the room was perfect. Would definitely come back for the service alone.",
  },
  {
    name: "Priya Sharma",
    location: "Pune, India",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    date: "Dec 4, 2025",
    title: "Very Convenient.",
    comment:
      "Loved how central the hotel was — everything I needed was just a short walk away. The breakfast buffet was surprisingly good, especially the fresh fruit and omelette station. Only minor gripe: the coffee could’ve been hotter, but that’s me being picky. Great value for the location!",
  },
  {
    name: "Ravi Deshmukh",
    location: "Nashik, India",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 3,
    date: "Aug 17, 24",
    title: "Hygienic",
    comment:
      "The room was neat, and housekeeping did a great job every day. I liked the small touches like fresh towels and bottled water. The only downside was the Wi-Fi — it worked fine in the lobby but was a bit spotty in my room. Still, for the price, it’s a solid choice if you are not expecting luxury.",
  },
];

export default function UserReview() {
  return (
    <section
      id="review"
      className="bg-white text-[#3C3C3C] py-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <h2
        className={`${kugile.className} text-3xl md:text-4xl mb-10 text-start`}
      >
        Guest reviews
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll space-x-6 w-max">
          {[...reviews, ...reviews].map((r, idx) => (
            <div
              key={idx}
              className="bg-[#F8F8F8] w-[320px] sm:w-[360px] rounded-2xl p-5 flex flex-col gap-4 shadow-sm shrink-0"
            >
              <div className="flex justify-between items-start gap-3">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={r.avatar} />
                    <AvatarFallback>
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col justify-center">
                    <h3 className="text-base sm:text-lg font-semibold leading-tight">
                      {r.name}
                    </h3>
                    <p className="text-sm text-gray-600">{r.location}</p>
                    <div className="flex items-center mt-1">
                      {r.rating === 5 && <FiveStar />}
                      {r.rating === 4 && <FourStars />}
                      {r.rating === 3 && <ThreeStar />}
                    </div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-gray-500">{r.date}</span>
              </div>

              <h4 className="text-sm sm:text-base font-semibold">{r.title}</h4>
              <p className="text-sm sm:text-base text-gray-700">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

"use client";

import localFont from "next/font/local";
import { Poppins as PoppinsFont } from 'next/font/google';
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";

const kugile = localFont({
  src: "../fonts/Kugile_Demo.ttf",
  variable: "--font-kugile",
  display: "swap",
});

const poppins = PoppinsFont({
  weight: ['400'],
  subsets: ['latin'],
});

interface RoomCardData {
  title: string;
  originalPrice: string;
  discountedPrice: string;
  button: string;
  src: string;
  slug: string;
}

const roomCards: RoomCardData[] = [
  {
    title: "Pune → Delhi",
    originalPrice: "₹20000",
    discountedPrice: "₹15000",
    button: "Click to View",
    src: "/delhi.jpg",
    slug: "regular-room",
  },
  {
    title: "Mumbai → Manali",
    originalPrice: "₹25000",
    discountedPrice: "₹15000",
    button: "Click to View",
    src: "/manali.jpg",
    slug: "deluxe-room",
  },
  {
    title: "Kolkata → Jammu",
    originalPrice: "₹30000",
    discountedPrice: "₹25000",
    button: "Click to View",
    src: "/jammu.jpg",
    slug: "twin-room",
  },
];

interface RoomCardProps {
  card: RoomCardData;
}

const RoomCard: React.FC<RoomCardProps> = ({ card }) => (
  <div
    className="relative rounded-2xl overflow-hidden shadow-md w-full max-w-sm mx-auto flex flex-col hover:scale-105 transition-all delay-150 duration-300 ease-in-out cursor-pointer justify-between text-white" 
    style={{
      backgroundImage: `url(${card.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "300px",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>

    <div className="relative z-10 p-4 pb-0">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{card.title}</h3>
        <button className="text-white hover:text-red-300 focus:outline-none">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center">
        <span className="line-through text-gray-300 text-sm mr-2">
          {card.originalPrice}
        </span>
        <span className="text-red-400 font-semibold">
          {card.discountedPrice}
        </span>
      </div>
    </div>

    <div className="relative z-10 p-4 pt-0 flex justify-center">
        <button className={`${poppins.className} bg-[#e1e1e1] bg-opacity-20 backdrop-filter backdrop-blur-sm text-[#3c3c3c] rounded-full py-2 px-2 text-sm flex items-center cursor-pointer justify-center hover:bg-gray-400 focus:outline-none border border-white border-opacity-30 w-full`}>
          {card.button} <span className="ml-2">&#8594;</span>
        </button>
    </div>
  </div>
);

export default function Gallery() {
  return (
    <section
      id="gallery"
      className={`${kugile.className} bg-[#FFFFFF] text-[#3C3C3C] py-16 px-4 sm:px-6 md:px-12 lg:px-24`}
    >
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-start">
          Plans 
        </h2>
        <div className="flex items-center space-x-2">
          <button className="w-10 h-10 rounded-full bg-transparent border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors duration-200">
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button className="w-10 h-10 rounded-full bg-transparent border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors duration-200">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {roomCards.map((card: RoomCardData) => (
          <RoomCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

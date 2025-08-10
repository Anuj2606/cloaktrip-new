'use client';

import localFont from 'next/font/local';
import Image from 'next/image';
import VerticalSeparator from './VerticalSeparator';
import { Calendar22 } from './DatePicker';
import { Calendar23 } from './DatePicker';
import { FlipWordsDemo } from './FlipWords';
import { useState } from 'react';

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

const aderoTrial = localFont({
  src: '../fonts/AderotrialRegular-ZVreq.otf',
  variable: '--font-adero-trial',
  display: 'swap',
});

export default function Hero() {
  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);


  const handleFindRoom = async () => {
  if (!checkIn || !checkOut) {
    alert("Please select both check-in and check-out dates");
    return;
  }

  try {
    const res = await fetch('/api/availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checkIn, checkOut }),
    });

    if (!res.ok) {
      const text = await res.text(); // read raw response body
      console.error("API error:", res.status, text);
      alert("Something went wrong while checking availability");
      return;
    }

    const data = await res.json();

    const available = data.availableRooms.length > 0
      ? `✅ Available Rooms: ${data.availableRooms.join(', ')}`
      : '❌ No rooms available for selected dates';

    alert(available);
    
  } catch (error) {
    console.error("Error fetching room availability", error);
    alert("Something went wrong");
  }
};

  return (
    <div className="relative w-full h-[717px] sm:min-h-screen overflow-hidden bg-[#FFFFFF]">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pl-12 sm:pl-0">
        <div className="flex relative bg-[#F3F3F3] -ml-4 w-full md:h-[645px] h-[470px] top-[20px] sm:top-0 rounded-3xl overflow-hidden">
          {/* Desktop Version */}
          <div className="hidden sm:flex flex-col justify-start w-full sm:w-1/2 px-6 pt-16 gap-6 z-10 bg-[#F3F3F3] text-left">
            <h1 className={`${kugile.className} text-[48px] sm:text-[64px] lg:text-[80px] font-normal leading-tight text-[#3C3C3C]`}>
              Plan <br /> Travel 
            </h1>
            <FlipWordsDemo />
            <div className="hidden md:flex gap-4">
              <button onClick={() => scrollToSection('gallery')} className={`${aderoTrial.className} bg-[#F3F3F3] text-[#3C3C3C] border border-[#3C3C3C] px-4 py-2 rounded-3xl hover:scale-105 transition cursor-pointer`}>
                Plans
              </button>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="sm:hidden absolute top-[30px] left-1/2 transform -translate-x-1/2 z-20 text-left px-4 w-full">
            <h1 className={`${kugile.className} text-[48px] leading-tight text-[#3C3C3C] drop-shadow-md`}>
              Plan <br /> Travel
            </h1>
            <FlipWordsDemo />
          </div>

          {/* Image */}
          <div className="relative w-full sm:w-1/2 h-full">
            <Image
              src="/travel.avif"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute left-0 top-0 h-full w-80 z-10 hidden sm:block"
              style={{ background: 'linear-gradient(270deg, rgba(243, 243, 243, 0) 0%, #F3F3F3 100%)' }}
            />
            <div className="absolute left-0 top-0 h-full w-full sm:hidden z-10"
              style={{ background: 'linear-gradient(720deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 76.66%)' }}
            />
          </div>
        </div>

        {/* Availability Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-50 sm:bottom-4 w-[75%] sm:w-[80%] max-w-[1300px] h-[270px] sm:h-auto border border-white/100 rounded-2xl backdrop-blur-[8px] bg-[#0000000D]/70 flex flex-col sm:flex-row justify-between items-center px-3 py-3 sm:px-4 sm:py-4 gap-3 sm:gap-4 z-30 shadow-[0px_4px_11.6px_0px_#00000026]">

          <div className={`${aderoTrial.className} hidden md:flex justify-center items-center w-[222px] h-[28px] whitespace-nowrap uppercase text-[#3C3C3C] pl-[30px] text-[20px] font-bold tracking-widest `}>
            CloakTravel
          </div>

          <VerticalSeparator />

       <div className="w-full max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 text-[#3C3C3C]">
            
            {/* Check-In */}
            <div className="flex items-center gap-3">
              <svg
                width="26"
                height="28"
                viewBox="0 0 26 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.71429 8.85747H19.1875M5.8631 2.00037V4.05775M19.875 2.00037V4.0575M24 7.0575L24 23.0004C24 24.6572 22.6569 26.0004 21 26.0004H5C3.34315 26.0004 2 24.6572 2 23.0004V7.0575C2 5.40064 3.34315 4.0575 5 4.0575H21C22.6569 4.0575 24 5.40064 24 7.0575Z"
                  stroke="#3C3C3C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Calendar22 onDateChange={setCheckIn} />
            </div>

            {/* Check-Out */}
            <div className="flex items-center gap-3">
              <svg
                width="26"
                height="28"
                viewBox="0 0 26 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.71429 8.85747H19.1875M5.8631 2.00037V4.05775M19.875 2.00037V4.0575M24 7.0575L24 23.0004C24 24.6572 22.6569 26.0004 21 26.0004H5C3.34315 26.0004 2 24.6572 2 23.0004V7.0575C2 5.40064 3.34315 4.0575 5 4.0575H21C22.6569 4.0575 24 5.40064 24 7.0575Z"
                  stroke="#3C3C3C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Calendar23 onDateChange={setCheckOut} />
            </div>

            {/* Separator for desktop */}
            <VerticalSeparator />

            {/* Find Rooms Button */}
            <button
              onClick={handleFindRoom}
              className={`${aderoTrial.className} flex items-center gap-2 px-3 py-3 sm:px-6 sm:py-4 bg-[#3C3C3C] text-[#F3F3F3] md:bg-[#F3F3F3] md:text-[#3C3C3C] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out text-sm font-semibold rounded-[15px] border border-[#FFFFFF4D] shadow-md hover:shadow-lg mx-auto md:mr-10`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              Plan Trip
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
}

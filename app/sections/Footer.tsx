import Image from "next/image";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { PiPhoneCallBold } from "react-icons/pi";
import localFont from 'next/font/local';
import Link from "next/dist/client/link";

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});


export default function Footer() {
  return (
    <footer className="relative bg-[#FFFFFF] bg-opacity-80 backdrop-blur-sm text-gray-800 z-10 py-10 px-6 sm:px-12 lg:px-24 text-center overflow-hidden">

      <div className="absolute inset-0 px-6 sm:px-12 md:px-0 z-0">
        <div className=" w-full h-[540px] md:w-full lg:h-full rounded-3xl md:rounded-none overflow-hidden relative">
          <Image
            src="/Footer.jpg"
            alt="footer background"
            fill
            className="object-cover opacity-40"
          />
          <div
            className="absolute top-0 left-0 w-full h-[300px] z-10 pointer-events-none rounded-3xl md:rounded-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.7) 65%, rgba(255, 255, 255, 0) 100%)"
            }}
          ></div>
        </div>
      </div>

      
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className={`${kugile.className} text-[35px] mt-60 font-kugile md:flex-shrink-0 md:mt-60`}>
          Mayur Lodge
        </div>

        <div className="flex-grow flex flex-col items-center text-center mt-0 mb-30 pr-0 md:pr-60">
          <h2 className={`${kugile.className} text-[22px] font-bold -mt-70 tracking-wide md:text-5xl md:font-normal md:mt-4 md:mb-2 whitespace-nowrap`}>
            Request More Information
          </h2>


          <p className="text-[14px] mt-2 md:text-base text-gray-600 mb-6 tracking-wider">
            Endless Options, We Find The Best Deals.
          </p>
        
        <Link href="/contact">
          <button
            className="bg-[#3C3C3C] text-white py-3 px-0 sm:px-8 sm:py-3 hover:bg-gray-800 transition-all text-sm sm:text-lg shadow-lg mb-8 sm:mb-10 w-[90px] sm:w-auto sm:rounded-full cursor-pointer"
            style={{ borderRadius: "7.35px" }}
          >
            Reach Out
          </button>
        </Link>

        </div>

        <div className="flex gap-6 -mt-8 md:flex-shrink-0 md:mt-60">
          <a href="https://wa.me/+917559319992">
            <FaWhatsapp className="text-3xl hover:text-green-500" />
          </a>
          <a href="tel:+917559319992">
            <PiPhoneCallBold className="text-3xl hover:text-purple-600" />
          </a>
          <a href="mailto:pratiklodge203@gmail.com">
            <FaEnvelope className="text-3xl hover:text-blue-600" />
          </a>
        </div>
      </div>

      <div className="relative z-10 text-center text-xs text-gray-500 mt-6">
        © Copyright 2025. All Rights Reserved by Mayur Lodge.
      </div>
    </footer>
  );
}


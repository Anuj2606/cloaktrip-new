import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const kugile = localFont({
  src: "../fonts/Kugile_Demo.ttf",
  variable: "--font-kugile",
  display: "swap",
});

export default function AboutUsPage() {
  return (
    <section className="min-h-screen bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center relative gap-16">
    
      <div className="relative w-full md:w-[65%] text-[#3C3C3C] mx-auto p-8 sm:p-12 rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-all delay-150 duration-300 ease-in-out">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Bg.jpg"
            alt="Mayur Lodge text background"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="!static"
          />
          <div className="absolute inset-0 bg-gray-200 opacity-80"></div>
        </div>

        <div className="relative z-10">
          <p className="mb-4 text-xl leading-relaxed text-justify">
            Welcome to Mayur Lodge, your trusted home away from home,
            strategically located near MIDC Chakan-Kuruli, one of
            Maharashtra&apos;s most dynamic and rapidly developing industrial
            zones. Surrounded by major manufacturing giants such as
            Mercedes-Benz, Volkswagen, Skoda, and Bajaj, we offer unmatched
            convenience for professionals and travellers alike. Whether
            you&apos;re visiting for a business assignment, engineering project,
            or a relaxing getaway, Mayur Lodge caters to every kind of
            guest—corporate teams, solo adventurers, families, and couples. Our
            lodge is designed to deliver a clean, peaceful, and budget-friendly
            experience without compromising on comfort. At Mayur Lodge, we
            believe in genuine hospitality, efficient service, and a restful
            atmosphere—making us a preferred stay option in the Chakan-Kuruli
            area. Whether it&apos;s a short trip or an extended visit, we ensure
            your stay is smooth, secure, and satisfying.
          </p>
        </div>

        <div className="absolute bottom-0 left-8 z-20">
          <h2
            className={`${kugile.className} text-2xl sm:text-3xl md:text-4xl text-[#3c3c3c] whitespace-nowrap select-none`}
          >
            About Us
          </h2>
        </div>
      </div>

      <div className="w-full md:w-[35%] flex justify-center">
        <div className="relative rounded-[20px] overflow-hidden shadow-xl hover:scale-105 transition-all delay-150 duration-300 ease-in-out">
          <div className="relative w-[85vw] sm:w-[480px] aspect-[4/5]">
            <Image
              src="/about.png"
              alt="Mayur Lodge Main"
              fill
              className="object-cover block"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>

    </section>
  );
}

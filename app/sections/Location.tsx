'use client';

import localFont from 'next/font/local';
import Image from 'next/image';
import { Poppins as PoppinsFont } from 'next/font/google';
import { AnimatedPinDemo } from '../components/location';

const poppins = PoppinsFont({
  weight: ['400'],
  subsets: ['latin'],
});

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

export default function LocationSection() {
  return (
    <section
      id="location"
      className={`${kugile.className} bg-[#FFFFFF] text-[#3C3C3C] py-16 px-4 sm:px-6 md:px-12 lg:px-24`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl mb-10 text-start">
        Our Location
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div
          className="relative rounded-[20px] overflow-hidden shadow-xl w-full sm:w-[671px] sm:h-[718px] h-[500px] hover:scale-105 transition-all delay-150 duration-300 ease-in-out"
        >
          <Image
            src="/location_image.jpg"
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

          <div
            className="absolute left-0 top-0 h-full w-full z-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(60, 60, 60, 0) 45.24%, #000000 100%)',
            }}
          />

          <h6
            className={`${poppins.className} absolute bottom-24 left-2 text-white text-[20px] sm:text-[28px] px-4 py-2 z-20`}
          >
            Getting here
          </h6>

          <p
            className={`${poppins.className} absolute bottom-4 left-2 text-white/70 text-[16px] sm:text-[22px] px-4 py-2 z-20 max-w-[90%]`}
          >
            Pratik Lodge, Gate No. 613, MIDC Road, near Pratik Kata, Kuruli,
            Chakan, Pune 410 501
          </p>
        </div>

        
        <div
          className="relative rounded-[20px] overflow-hidden shadow-xl hover:scale-105 transition-all delay-150 duration-300 ease-in-out mx-auto mt-4 sm:mt-0"
          style={{
            top: '-4px',
          }}
        >
          <div className="relative w-[90vw] sm:w-[671px] h-[500px] sm:h-[718px]">
            <Image
              src="/location-pratik.png"
              alt="Background"
              fill
              className="object-cover"
              style={{ filter: 'blur(2px)' }}
              sizes="100vw"
              priority
            />

            <div
              className="absolute left-0 top-0 h-full w-full z-10"
              style={{
                background:
                  'linear-gradient(180deg, rgba(60, 60, 60, 0) 45.5%, rgba(140, 140, 140, 0.7) 100%)',
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-[90%] sm:w-[80%]">
                <AnimatedPinDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

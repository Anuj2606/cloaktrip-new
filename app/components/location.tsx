"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d_pin";
import Image from "next/image";
import { Poppins as PoppinsFont } from 'next/font/google';

const poppins = PoppinsFont({
  weight: ['400'],
  subsets: ['latin'],
});

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer
        title="Pratik lodge"
        href="https://maps.app.goo.gl/yAVt3C1vgSxuk7uf8"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-[22px] sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h2 className={`${poppins.className} max-w-xs !pb-2 !m-0 text-[#3C3C3C]`}>
            Google Maps location
          </h2>
          <div className="text-[16px] !m-0 !p-0">
            <span className={`${poppins.className} text-[#3C3C3C]`}>
              Click here to redirect to the location
            </span>
          </div>
          <div className="relative mt-4 h-[200px] w-full rounded-lg overflow-hidden">
            <Image
              src="/location-pratik.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

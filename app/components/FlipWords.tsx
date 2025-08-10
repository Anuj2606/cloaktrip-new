import React from "react";
import { FlipWords } from "@/components/ui/flip-word";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export function FlipWordsDemo() {
  const words = ["Welcoming", "Cultural", "Adventurous", "Scenic", "Immersive"];

  return (
      <div className={`${poppins.className} text-[#3C3C3C] text-[13px] md:text-[22px] font-normal`}>
        Affordable -  
        <FlipWords words={words} />
        - Comfortable.
      </div>
  );
}

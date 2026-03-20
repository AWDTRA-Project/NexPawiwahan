"use client";

import useReveal from "@/app/hooks/useReveal"
import Countdown from "./Countdown";
import HeroSlider from "./HeroSlider";
import { Great_Vibes } from "next/font/google";
import { Yellowtail } from "next/font/google";

const YellowTail= Yellowtail({
  subsets: ["latin"],
  weight: "400",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

interface HeroSectionProps {
  onOpen: () => void;
}

export default function HeroSection() {
  
  const { ref, visible } = useReveal();

  return (

    <section
      ref={ref}
      className={`relative h-screen w-full overflow-hidden transition-all duration-700
      ${visible ? "opacity-100" : "opacity-0"}`}
    >

      {/* SLIDER */}

      <HeroSlider />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* TEXT CONTENT */}
        
      <div
        className={`absolute bottom-36 left-6 md:left-20 text-white max-w-lg z-20
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
      

        <p className={`${greatVibes.className} text-2xl md:text-3xl`}>
          The Wedding of
        </p>

        <h1 className={`${YellowTail.className} text-5xl md:text-6xl leading-tight`}>
          Awan & Ayu
        </h1>

        <p className="mt-2 text-sm md:text-base tracking-wide opacity-90">
          Jumat, 03 April 2026
        </p>

      </div>

      {/* COUNTDOWN */}

      <div
        className={`absolute bottom-1 left-1/2 -translate-x-1/2 z-20
        transition-all duration-700 delay-200
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <Countdown targetDate="2026-04-03T09:00:00" />
      </div>
    </section>

  );
}
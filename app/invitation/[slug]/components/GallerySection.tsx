"use client";

import useReveal from "@/app/hooks/useReveal";
import GallerySlider from "./GallerySlider";
import GalleryGrid from "./GalleryGrid";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function GallerySection() {

  const { ref, visible } = useReveal();

  return (

    <section
      ref={ref}
      className="bg-[#f8f6f2] py-10 px-6 overflow-hidden"
    >

      {/* ================= CONTAINER ================= */}

      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible 
          ? "opacity-100 translate-y-0 blur-0" 
          : "opacity-0 translate-y-10 blur-sm"}
        `}
      >

        {/* ================= ORNAMENT ================= */}

        <div
          style={{ transitionDelay: "100ms" }}
          className={`flex justify-center mb-1 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <img
            src="/Logo/DaunHitamPisah.png"
            className="w-52 md:w-72 opacity-70"
            alt="ornament"
          />
        </div>

        {/* ================= TITLE ================= */}

        <div
          style={{ transitionDelay: "200ms" }}
          className={`text-center mb-16 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >

          <h2 className={`${playfair.className} text-2xl md:text-3xl text-[#8c6b3f]`}>
            Our Moments
          </h2>

          <p className="text-gray-500 text-sm mt-3">
            Kenangan indah perjalanan kami
          </p>

        </div>

        {/* ================= SLIDER ================= */}

        <div
          style={{ transitionDelay: "300ms" }}
          className={`max-w-5xl mx-auto mb-16 transition-all duration-700
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <GallerySlider />
        </div>

        {/* ================= GRID ================= */}

        <div
          style={{ transitionDelay: "400ms" }}
          className={`max-w-5xl mx-auto transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <GalleryGrid />
        </div>

      </div>

    </section>

  );
}
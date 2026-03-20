"use client";

import { useState, useRef } from "react";
import { Yellowtail, Saira } from "next/font/google";

import HeroSection from "./HeroSection";
import CoupleSection from "./CoupleSection";
import EventSection from "./EventSection";
import GallerySection from "./GallerySection";
import WishesSection from "./WishesSection";
import GiftSection from "./GiftSection";
import ThankYouSection from "./ThankYouSection";
import MusicPlayer from "./MusicPlayer";

const YellowTail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
});

const Sairaa = Saira ({
  subsets: ["latin"],
  weight: "500",
});

interface Props {
  guestName: string;
}

export default function MainInvitation({ guestName }: Props) {

  const [opened, setOpened] = useState(false);
  const musicRef = useRef<any>(null);

  return (

    <div className="bg-white relative">

      {/* ================= MUSIC ================= */}
      <MusicPlayer ref={musicRef} />

      {/* ================= POPUP ================= */}

      {!opened && (
        <div
          className={`
          fixed inset-0 z-50
          flex items-center justify-center
          transition-all duration-700
          ${opened ? "opacity-0 scale-110" : "opacity-100 scale-100"}
          `}
        >

          {/* BACKGROUND IMAGE */}
          <div
            className="
            absolute inset-0
            bg-cover bg-center
            transition-all duration-1000
            scale-105
            "
            style={{ backgroundImage: "url('/image/Outdoor.jpg')" }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/50 " />

          {/* CONTENT */}
          <div
            className="
            relative text-center text-white
            bg-black/60 backdrop-blur-xs
            border border-white/20
            rounded-2xl px-10 py-12
            shadow-[0_20px_60px_rgba(0,0,0,0.4)]
            transition-all duration-700
            "
          >

          {/* TEXT ATAS */}

          <p className="text-gray-500 text-md tracking-[0.25em] uppercase mb-6">
            Pawiwahan Ceremony
          </p>

          {/* NAMA */}

          <h1 className={`${YellowTail.className} text-5xl md:text-6xl text-white-900`}>
            Awan & Ayu
          </h1>

          {/* TAMU */}

          <div className="mt-8 space-y-1">

            <p className="text-[#f5f1e8]-500 text-xs tracking-[0.25em]">
              Kepada Yth
            </p>

            <h2 className={`${Sairaa.className} text-2xl mt-3 md:text-3xl font-serif text-[#e6d3a3]-800`}>
              {guestName}
            </h2>

          </div>

            <button
              onClick={() => {
                setOpened(true);
                musicRef.current?.playMusic();
              }}
              className={`${Sairaa.className}
              mt-8 px-6 py-2 rounded-full
              border border-white
              hover:bg-white hover:text-black
              transition duration-300`}
            >
              Buka Undangan
            </button>

          </div>
          <div
              style={{ transitionDelay: "400ms" }}
              className={`absolute bottom-6 flex flex-col items-center
              transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >

              <img
                src="/Logo/TulipPutih.png"
                className="w-25 md:w-32 opacity-60"
                alt="ornament"
              />

              <p className="text-[10px] text-gray-400 mt-3 tracking-wider">
                Powered by <span className="font-semibold text-[12px]">NEXCODE</span>
              </p>

            </div> 
        </div>
      )}

      {/* ================= CONTENT ================= */}

      <div className={`${!opened ? "blur-sm pointer-events-none" : ""}`}>

        <HeroSection />
        <CoupleSection />
        <EventSection />
        <GallerySection />
        <WishesSection />
        <GiftSection />
        <ThankYouSection />

      </div>

    </div>

  );
}
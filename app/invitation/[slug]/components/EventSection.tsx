"use client";

import useReveal from "@/app/hooks/useReveal";
import { Playfair_Display, Great_Vibes } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function EventSection() {

  const { ref, visible } = useReveal();

  return (

    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >

      {/* ================= BACKGROUND ================= */}

      <img
        src="/images/TheNight.jpg"
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-1000 will-change-transform
          ${visible ? "scale-105" : "scale-110"}
        `}
      />

      {/* ================= OVERLAY ================= */}

      <div className="absolute inset-0 bg-black/70" />

      {/* ================= CONTENT ================= */}

      <div
        className={`relative w-full max-w-5xl px-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible 
          ? "opacity-100 translate-y-0 blur-0" 
          : "opacity-0 translate-y-10 blur-sm"}
        `}
      >

        {/* ================= TEXT ATAS ================= */}

        <p
          style={{ transitionDelay: "100ms" }}
          className={`text-center text-sm md:text-base mb-12 leading-relaxed opacity-90 max-w-2xl mx-auto
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Merupakan suatu kebahagiaan dan kehormatan bagi kami,
          apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
        </p>

        {/* ================= CARD ================= */}

        <div
          style={{ transitionDelay: "200ms" }}
          className={`backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          transition-all duration-700
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >

          {/* ===== LEFT DATE ===== */}

          <div className="bg-white/10 p-6 md:p-10 text-center md:w-1/3 flex flex-col justify-center">

            <h1 className={`${playfair.className} text-6xl md:text-4xl`}>
              03
            </h1>

            <p className={`${greatVibes.className} text-3xl mt-2`}>
              April
            </p>

            <p className={`${greatVibes.className} text-2xl mt-1`}>
              2026
            </p>

          </div>

          {/* ===== RIGHT CONTENT ===== */}

          <div className="p-8 md:p-10 flex-1">

            <h2 className={`${playfair.className} text-3xl mb-6`}>
              Resepsi
            </h2>

            {/* TIME */}

            <p className="text-sm md:text-base mb-3 opacity-90">
              14:30 WITA - Selesai
            </p>

            {/* LOCATION */}

            <p className="text-sm md:text-base leading-relaxed mb-8 opacity-90">
              Br. Papaan, Desa Sampalan Tengah,
              Kec. Dawan, Kab. Klungkung
            </p>

            {/* BUTTON */}

            <a
              href="https://maps.app.goo.gl/JB7RFgYpvrsBxHnU9"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full 
              bg-white text-black text-sm font-medium 
              hover:bg-gray-200 transition duration-300 shadow-md"
            >
              Google Maps →
            </a>

          </div>

        </div>

        {/* ================= TEXT BAWAH ================= */}

        <div
          style={{ transitionDelay: "350ms" }}
          className={`text-center mt-16 transition-opacity transition-transform duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >

          <p className="text-sm opacity-90">
            Atas kehadiran dan doa restunya kami ucapkan terimakasih.
          </p>

          <h3 className={`${playfair.className} mt-4 text-xl md:text-2xl`}>
            Om Shanti Shanti Shanti Om
          </h3>

        </div>

      </div>

    </section>

  );
}
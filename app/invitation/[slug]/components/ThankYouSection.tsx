"use client";

import useReveal from "@/app/hooks/useReveal";
import { Great_Vibes, Playfair_Display} from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function ThankYouSection() {

  const { ref, visible } = useReveal();

  return (

    <section
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col justify-between text-white overflow-hidden"
    >

      {/* ================= BACKGROUND ================= */}

      <img
        src="/images/Menatap.jpg"
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-1000 will-change-transform
          ${visible ? "scale-105" : "scale-110"}
        `}
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* ================= CONTENT ================= */}

      <div className="relative flex flex-col items-center justify-top text-center px-6 py-40 flex-1">

        {/* TITLE */}

        <p
          className={`${greatVibes.className} text-4xl md:text-4xl mb-4 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Thank You
        </p>

        {/* UCAPAN */}

        <p
          style={{ transitionDelay: "150ms" }}
          className={`mt-6 max-w-xl text-sm md:text-base leading-relaxed opacity-90 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami,
          apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>

        {/* PENUTUP */}

        <h3
          style={{ transitionDelay: "300ms" }}
          className={`${playfair.className} mt-6 text-xl opacity-80 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Om Shanti Shanti Shanti Om
        </h3>

      </div>

      {/* ================= FOOTER ================= */}

      <footer className="relative">

        {/* GLASS BACKGROUND */}

        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl border-t border-white/10" />

        {/* CONTENT */}

        <div className="relative flex flex-col items-center justify-center py-6 px-6 text-center">

          {/* LINE + LOGO */}

          <div
            style={{ transitionDelay: "400ms" }}
            className={`flex items-center gap-4 w-full max-w-md transition-all duration-700
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >

            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <img
              src="/Logo/NexCodePutih.png"
              alt="NexCode"
              className="w-16 md:w-24"
            />

            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          </div>

          {/* COPYRIGHT */}

          <p
            style={{ transitionDelay: "550ms" }}
            className={`mt-4 text-[10px] text-white/40 tracking-wide transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            © {new Date().getFullYear()} NEXCODE. All rights reserved.
          </p>

        </div>

      </footer>

    </section>

  );
}
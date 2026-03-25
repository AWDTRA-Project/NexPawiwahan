"use client";

import { useState } from "react";
import useReveal from "@/app/hooks/useReveal";
import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function GiftSection() {

  const { ref, visible } = useReveal();

  const [copied, setCopied] = useState(false);

  const copyRekening = () => {

    navigator.clipboard.writeText("6955222664");

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);

  };

  return (

    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden"
    >

      {/* BACKGROUND */}

      <img
        src="/images/Sentir3.jpg"
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-1000 will-change-transform
          ${visible ? "scale-105" : "scale-110"}
        `}
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/60" />


      {/* CONTENT */}

      <div
        className={`
          relative w-full max-w-xl px-6 text-center

          transition-opacity transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
          }
        `}
      >

        {/* TITLE */}

        <p
          className={`
            ${greatVibes.className}
            text-3xl mb-6

            transition-opacity transition-transform
            duration-700
            delay-100

            ${visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }
          `}
        >
          Wedding Gift
        </p>


        {/* LINE */}

        <div
          className={`
            w-16 h-[1px] mx-auto
            bg-white/40 mb-8

            transition-opacity
            duration-700
            delay-200

            ${visible ? "opacity-100" : "opacity-0"}
          `}
        />


        {/* TEXT */}

        <p
          className={`
            text-sm md:text-base leading-relaxed
            text-white/80 mb-10

            transition-opacity transition-transform
            duration-700
            delay-[300ms]

            ${visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }
          `}
        >
          Kehadiran Anda adalah hadiah terindah bagi kami.
          Namun jika ingin memberikan tanda kasih,
          dapat melalui informasi berikut.
        </p>


        {/* CARD */}

        <div
          className={`
            border border-white/20
            rounded-2xl
            px-8 py-8
            bg-black/40

            transition-opacity transition-transform
            duration-700
            delay-[450ms]

            ${visible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
            }
          `}
        >

          <p className="text-xs tracking-[0.25em] text-white/60">
            BANK BCA
          </p>


          {/* NO REKENING */}

          <p
            className={`
              ${playfair.className}

              text-2xl tracking-widest
              mt-3 mb-3

              transition-opacity transition-transform
              duration-700
              delay-[550ms]

              ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
              }
            `}
          >
            6955 2226 64
          </p>


          {/* NAME */}

          <p
            className={`
              text-sm text-white/70 mb-6

              transition-opacity
              duration-700
              delay-[650ms]

              ${visible ? "opacity-100" : "opacity-0"}
            `}
          >
            I Gusti Ayu Nia Juniantari
          </p>


          {/* COPY BUTTON */}

          <button
            onClick={copyRekening}
            className="
              px-6 py-2 rounded-full
              border border-white/40
              text-sm

              hover:bg-white hover:text-black
              transition duration-300
            "
          >

            {copied ? "✔ Copied" : "Copy Rekening"}

          </button>

        </div>


        {/* ORNAMENT LINE */}

        <div
          className={`
            w-24 h-[1px]
            bg-white/30
            mx-auto mt-10

            transition-opacity
            duration-700
            delay-[750ms]

            ${visible ? "opacity-100" : "opacity-0"}
          `}
        />


      </div>

    </section>

  );

}
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

  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyRekening = () => {
    navigator.clipboard.writeText("1234567890");
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (

    <section
      ref={ref}
      className="bg-[#f8f6f2] py-5 px-6 text-center overflow-hidden"
    >

      {/* ================= CARD ================= */}

      <div
        className={`max-w-xl mx-auto rounded-3xl p-10
        bg-gradient-to-br from-[#8c774a] to-[#6e5d3b]
        text-white shadow-[0_20px_60px_rgba(0,0,0,0.3)]
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"}
        `}
      >

        {/* TITLE */}

        <h2 className={`${greatVibes.className} text-3xl mb-10`}>
          Wedding Gift
        </h2>

        {/* TEXT */}

        <p
          style={{ transitionDelay: "150ms" }}
          className={`text-sm mt-4 leading-relaxed opacity-90 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Kehadiran Anda adalah hadiah tersendiri. Namun jika ingin
          memberikan tanda kasih, silakan melalui informasi di bawah ini.
        </p>

        {/* BUTTON */}

        <button
          onClick={() => setOpen(true)}
          className="mt-8 px-6 py-2 rounded-full border border-white text-white
          hover:bg-white hover:text-black transition duration-300
          shadow-lg hover:shadow-xl hover:scale-105"
        >
          Send Gift
        </button>

      </div>

      {/* ================= MODAL ================= */}

      {open && (

        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* BACKDROP */}

          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
          />

          {/* MODAL CARD */}

          <div
            className="relative bg-white rounded-2xl p-6 w-[90%] max-w-md text-center
            shadow-[0_20px_80px_rgba(0,0,0,0.4)]
            animate-modalIn"
          >

            {/* CLOSE */}

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black transition"
            >
              ✕
            </button>

            {/* TITLE */}

            <h3 className={`${playfair.className} text-gray-900 text-xl mb-6`}>
              Transfer Bank
            </h3>

            {/* CARD REKENING */}

            <div className="bg-[#f8f6f2] rounded-xl p-5 mb-6 shadow-inner">

              <p className="text-sm text-gray-500">
                Bank BCA
              </p>

              <p className="text-lg font-semibold text-gray-900 tracking-widest mt-1">
                6955222664
              </p>

              <p className="text-sm text-gray-500 mt-1">
                A/N I Gusti Ayu Nia Juniantari
              </p>

            </div>

            {/* COPY BUTTON */}

            <button
              onClick={copyRekening}
              className="w-full py-2 rounded-lg bg-black text-white
              hover:bg-gray-800 transition duration-300
              shadow-md hover:shadow-lg"
            >
              {copied ? "✔ Copied" : "Copy Rekening"}
            </button>

          </div>

        </div>

      )}

    </section>

  );
}
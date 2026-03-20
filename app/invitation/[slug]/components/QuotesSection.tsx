"use client";

import { useEffect, useRef, useState } from "react";

export default function QuotesSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`
        py-10 px-6 flex flex-col items-center text-center
        max-w-3xl mx-auto relative overflow-hidden
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-10 blur-sm"}
      `}
    >
      {/* ORNAMENT */}
      <img
        src="/Logo/TulipHitam.png"
        className={`
          w-24 md:w-32 mb-5 transition-all duration-700
          ${visible ? "opacity-60 translate-y-0" : "opacity-0 translate-y-6"}
        `}
        alt="ornament"
      />

      {/* PHOTO */}
      <div
        style={{ transitionDelay: "150ms" }}
        className={`
          mb-10 transition-all duration-700
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        <img
          src="/images/Outdoor.jpg"
          className="w-72 md:w-96 rounded-xl shadow-xl object-cover"
          alt="couple"
        />
      </div>

      {/* SANSKRIT */}
      <p
        style={{ transitionDelay: "250ms" }}
        className={`
          text-gray-600 text-sm md:text-base italic leading-relaxed
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        Ihaiva stam maa vi yaustam, Visvaam aayur vyasnutam,
        kriidantau putrair naptrbhih, modamaanau sve grhe (RgVeda X.85.42.)
      </p>

      {/* DIVIDER */}
      <div className="w-16 h-[1px] bg-gray-300 my-6"></div>

      {/* TRANSLATION */}
      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        Om Hyang Widhi, Anugerahkanlah kepada pasangan pengantin ini kebahagiaan,
        keduanya tiada terpisahkan dan panjang umur. Semoga pengantin ini
        dianugerahkan keturunan yang memberi penghibur serta tinggal di rumah
        yang penuh kegembiraan.
      </p>
    </section>
  );
}
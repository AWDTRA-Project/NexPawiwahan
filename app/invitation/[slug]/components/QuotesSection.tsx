"use client";

import useReveal from "@/app/hooks/useReveal";

export default function QuotesSection() {

  const { ref, visible } = useReveal();

  return (

    <section
      ref={ref}
      className="
        py-20 px-6
        flex flex-col items-center text-center
        max-w-3xl mx-auto
        relative overflow-hidden
      "
    >

      {/* ORNAMENT */}

      <img
        src="/Logo/TulipHitam.png"
        className={`
          w-24 md:w-32 mb-6

          transition-opacity transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${visible
            ? "opacity-60 translate-y-0"
            : "opacity-0 translate-y-6"
          }
        `}
        alt="ornament"
      />


      {/* PHOTO */}

      <div
        style={{ transitionDelay: "150ms" }}
        className={`
          mb-10

          transition-opacity transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
          }
        `}
      >

        <img
          src="/images/Romantis2Copy.jpg"
          className="w-72 md:w-96 rounded-xl shadow-xl object-cover"
          alt="couple"
        />

      </div>


      {/* SANSKRIT */}

      <p
        style={{ transitionDelay: "250ms" }}
        className={`
          text-gray-600 text-sm md:text-base italic leading-relaxed

          transition-opacity transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
          }
        `}
      >

        Ihaiva stam maa vi yaustam,
        Visvaam aayur vyasnutam,
        kriidantau putrair naptrbhih,
        modamaanau sve grhe
        (RgVeda X.85.42.)

      </p>


      {/* DIVIDER */}

      <div
        style={{ transitionDelay: "350ms" }}
        className={`
          w-16 h-[1px]
          bg-gray-300 my-6

          transition-opacity
          duration-700

          ${visible
            ? "opacity-100"
            : "opacity-0"
          }
        `}
      />


      {/* TRANSLATION */}

      <p
        style={{ transitionDelay: "450ms" }}
        className={`
          text-gray-500 text-sm md:text-base leading-relaxed

          transition-opacity transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
          }
        `}
      >

        Om Hyang Widhi,
        Anugerahkanlah kepada pasangan pengantin ini kebahagiaan,
        keduanya tiada terpisahkan dan panjang umur.
        Semoga pengantin ini dianugerahkan keturunan
        yang memberi penghibur serta tinggal di rumah
        yang penuh kegembiraan.

      </p>

    </section>

  );

}
"use client";

import useReveal from "@/app/hooks/useReveal"
import { Playfair_Display, Yellowtail} from "next/font/google";

const YellowTail= Yellowtail({
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function CoupleSection() {

  const { ref, visible } = useReveal();

  return (

    <section
      ref={ref}
      className={`bg-[#f8f6f2] relative overflow-hidden py-10 px-6 transition-opacity transition-transform duration-700 ease-out
      ${visible ? "opacity-100" : "opacity-0"}`}
    >

      {/* ORNAMENT ATAS */}

      <div className="flex justify-center mb-1">
        <img
          src="/Logo/DaunKecil.png"
          className="w-50 md:w-62 opacity-70"
          alt="ornament"
        />
      </div>

      {/* TITLE */}

      <div className={`text-center mb-16 max-w-2xl mx-auto transition-opacity transition-transform duration-700 delay-100
        ${visible ? "opacity-100" : "opacity-0"}`}>

        <h2 className={`${playfair.className} text-3xl text-[#8c6b3f]`}>
          Mempelai
        </h2>

        <p className="text-gray-500 text-md mt-4 leading-relaxed">
          Kami yang berbahagia, putra putri kebanggaan dari dua keluarga
          yang akan melebur menjadi satu.
        </p>

      </div>

      {/* GRID */}

      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start text-center">

        {/* GROOM */}

        <div className={`transition-opacity transition-transform duration-700 delay-200
          ${visible ? "opacity-100" : "opacity-0"}`}>

          <div className="flex justify-center">
            <img
              src="/images/MempelaiPria.jpg"
              className="w-48 h-64 object-cover shadow-xl"
              style={{ borderRadius: "45% / 35%" }}
              alt="groom"
            />
          </div>

          <h3 className={`${YellowTail.className} text-4xl mt-6 text-[#6b4f2a]`}>
            Awan
          </h3>

          <p className="mt-6 font-medium text-gray-800">
            I Putu Wiriawan
          </p>

          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Putra pertama dari pasangan:
            <br />
            I Wayan Santa & Ni Nengah Dersi
          </p>

          <p className="text-gray-400 text-xs mt-2">
            Desa Sampalan Tengah, Klungkung
          </p>

        </div>

        {/* BRIDE */}

        <div className={`transition-opacity transition-transform duration-700 delay-300
          ${visible ? "opacity-100" : "opacity-0"}`}>

          <div className="flex justify-center">
            <img
              src="/images/MempelaiWanita.jpg"
              className="w-48 h-64 object-cover shadow-xl"
              style={{ borderRadius: "45% / 35%" }}
              alt="bride"
            />
          </div>

          <h3 className={`${YellowTail.className} text-4xl mt-6 text-[#6b4f2a]`}>
            Ayu
          </h3>

          <p className="mt-4 font-medium text-gray-800">
            Putu Ayu Widyantini
          </p>

          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Putri pertama dari pasangan:
            <br />
            I Wayan Artana & Ibu Komang Dewi
          </p>

          <p className="text-gray-400 text-xs mt-1">
            Desa Selat, Karangasem
          </p>

        </div>
        {/* ORNAMENT TENGAH (DESKTOP) */}

        <div className={`hidden md:block absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2
          transition-opacity transition-transform duration-700 delay-500
          ${visible ? "opacity-100" : "opacity-0"}`}>

            <img
                src="/Logo/TulipHitam.png"
                className="w-28 opacity-60"
                alt="ornament"
            />

        </div>

        {/* ORNAMENT MOBILE (DI BAWAH) */}

        <div className="flex justify-center mt-1 md:hidden">

            <img
            src="/Logo/TulipHitam.png"
            className="w-24 opacity-60"
            alt="ornament"
            />

        </div>
      </div>

    </section>

  );
}
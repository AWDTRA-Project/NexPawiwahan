"use client";

import { useEffect, useState } from "react";

const images = [
  "/image/BackTheSun.jpg",
  "/image/MempelaiPria.jpg",
  "/image/MempelaiWanita.jpg",
];

export default function GallerySlider() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl">

      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

    </div>

  );
}
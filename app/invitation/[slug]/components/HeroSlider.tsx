"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/OmbakWGradasi.jpg",
  "/images/Ombak1.jpg",
  "/images/Sentir1.jpg",
  "/images/Romantis2.jpg",
  "/images/TheNight1.jpg",
  "/images/Zoom1.jpg",
  "/images/Sentir2.jpg",
  "/images/Berdiri.jpg",
];

export default function HeroSlider() {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    
    return () => clearInterval(interval);

  }, []);

  return (

    <div className="absolute inset-0">

      {images.map((img, i) => (

        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />

      ))}

    </div>

  );

}
"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "/images/MempelaiPria.jpg",
  "/images/Sunset2.jpg",
  "/images/Romantis2.jpg",
  "/images/Romantis1.jpg",
  "/images/MempelaiWanita.jpg",
  "/images/Sentir3Copy.jpg",
  "/images/Zoom1.jpg",
  "/images/TheNight1Copy.jpg",
];

export default function GalleryGrid() {

  const ref = useRef<HTMLDivElement | null>(null);

  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          // MUNCUL SATU SATU
          images.forEach((_, i) => {

            setTimeout(() => {

              setVisibleIndexes(prev => {

                if (!prev.includes(i)) {
                  return [...prev, i];
                }

                return prev;

              });

            }, i * 100);

          });

        } else {

          // HILANG SATU SATU (reverse)
          [...images].reverse().forEach((_, index) => {

            const i = images.length - 1 - index;

            setTimeout(() => {

              setVisibleIndexes(prev =>
                prev.filter(v => v !== i)
              );

            }, index * 80);

          });

        }

      },

      {
        threshold: 0.2,
      }

    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  return (

    <div
      ref={ref}
      className="columns-2 md:columns-3 gap-2 space-y-2"
    >

      {images.map((img, i) => (

        <img
          key={i}
          src={img}
          alt="gallery"

          className={`
            w-full rounded-2xl shadow-md

            transition-opacity transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${visibleIndexes.includes(i)
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
            }

            hover:scale-[1.02]
          `}
        />

      ))}

    </div>

  );

}
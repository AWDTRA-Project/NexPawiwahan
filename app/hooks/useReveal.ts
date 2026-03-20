"use client";

import { useEffect, useRef, useState } from "react";

export default function useReveal() {

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // ⬅ biar hilang saat scroll keluar
        }
      },
      {
        threshold: 0.2, // muncul saat 20% terlihat
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { ref, visible };
}
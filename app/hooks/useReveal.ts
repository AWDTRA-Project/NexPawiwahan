"use client";

import { useEffect, useRef, useState } from "react";

export default function useReveal() {

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        // muncul ketika 30% terlihat
        if (entry.intersectionRatio > 0.05) {

          setVisible(true);

        }

        // hilang ketika hampir keluar layar
        else if (entry.intersectionRatio < 0.05) {

          setVisible(false);

        }

      },

      {
        threshold: [0, 0.05, 0.3, 0.6],
        rootMargin: "-5% 0px -5% 0px"
      }

    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  return { ref, visible };

}
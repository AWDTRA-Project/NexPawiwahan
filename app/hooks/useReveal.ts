"use client";

import { useEffect, useRef, useState } from "react";

export default function useReveal() {

  const ref = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.intersectionRatio > 0.25) {

          setVisible(true);

        } else {

          setVisible(false);

        }

      },

      {
        threshold: [0, 0.25, 0.5],
      }

    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  return { ref, visible };

}
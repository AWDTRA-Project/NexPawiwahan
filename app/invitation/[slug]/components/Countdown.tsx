"use client";

import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"]
});

interface Props {
  targetDate: string;
}

export default function Countdown({ targetDate }: Props) {

  const calculateTimeLeft = () => {

    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();

    const difference = target - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0")
    };

  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);

  }, [targetDate]);

  return (

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-6">
  
      <div className="flex justify-center gap-5 md:gap-10 text-center text-white">
  
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
  
      </div>
  
    </div>
  
  );

}

function TimeBox({ value, label }: any) {

  return (

    <div className="flex flex-col items-center">

      <p className={`${playfair.className} text-2xl md:text-5xl font-light`}>
        {value}
      </p>

      <div className="w-8 h-[1px] bg-white/50 my-2"></div>

      <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase">
        {label}
      </p>

    </div>

  );

}
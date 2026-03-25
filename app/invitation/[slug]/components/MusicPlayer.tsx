"use client";

import { useRef, useState, forwardRef, useImperativeHandle } from "react";

const MusicPlayer = forwardRef((props, ref) => {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // 🔥 expose play ke luar
  useImperativeHandle(ref, () => ({
    playMusic: () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setPlaying(true))
          .catch(() => console.log("Autoplay blocked"));
      }
    }
  }));

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/music/Bermuara.MP3" type="audio/mpeg" />
      </audio>

      {/* FLOAT BUTTON */}
      <button
        onClick={toggleMusic}
        className="
        fixed bottom-5 right-5 z-50
        w-12 h-12 rounded-full
        bg-black/10 backdrop-blur-xs
        shadow-[0_10px_30px_rgba(0,0,0,0.4)]
        flex items-center justify-center
        transition-opacity transition-transform duration-300
        hover:scale-110 active:scale-95
        "
      >

        <img
          src={playing ? "/Logo/SoundWavePlay.png" : "/Logo/SoundWavePause.png"}
          className={`w-7 h-7 transition-opacity transition-transform duration-300
          ${playing ? "animate-pulse" : ""}`}
          alt="music"
        />

      </button>
    </>
  );
});

export default MusicPlayer;
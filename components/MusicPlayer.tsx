"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { song } from "@/data/birthdayContent";
import { SecretSymbol } from "./SecretContext";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrent(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const value = Number(e.target.value);
    audio.currentTime = value;
    setCurrent(value);
  };

  const progressPct = duration ? (current / duration) * 100 : 0;

  return (
    <section id="song" className="relative overflow-hidden bg-noir px-6 py-28 sm:py-36">
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-burgundy/20 blur-[100px] transition-opacity duration-1000 ${
          playing ? "opacity-100 animate-pulse-soft" : "opacity-30"
        }`}
      />

      <div className="relative mx-auto max-w-md text-center">
        <h2 className="mb-12 font-display text-2xl font-light italic text-ivory sm:text-3xl">
          {song.heading}
        </h2>

        <div className="mx-auto flex flex-col items-center gap-6 rounded-sm border border-champagne/15 bg-noir-soft/60 p-8">
          <motion.div
            animate={playing ? { scale: [1, 1.02, 1] } : { scale: 1 }}
            transition={{ duration: 4, repeat: playing ? Infinity : 0, ease: "easeInOut" }}
            className="h-40 w-40 overflow-hidden rounded-sm shadow-[0_20px_45px_-15px_rgba(0,0,0,0.7)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={song.artwork}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div>
            <p className="font-display text-lg text-ivory">{song.title}</p>
            <p className="mt-1 font-body text-xs font-light tracking-wide text-ivory/45">
              {song.artist}
            </p>
          </div>

          <button
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne/40 text-champagne-light transition-colors duration-300 hover:bg-champagne hover:text-noir"
          >
            {playing ? (
              <Pause size={20} fill="currentColor" />
            ) : (
              <Play size={20} fill="currentColor" className="translate-x-0.5" />
            )}
          </button>

          <div className="w-full">
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={current}
              onChange={onSeek}
              aria-label="Seek"
              className="h-1 w-full cursor-pointer appearance-none rounded-full bg-ivory/15 accent-champagne"
              style={{
                background: `linear-gradient(to right, #c9a86a ${progressPct}%, rgba(244,237,226,0.15) ${progressPct}%)`,
              }}
            />
            <div className="mt-2 flex justify-between font-body text-[0.65rem] text-ivory/40">
              <span>{formatTime(current)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src={song.src} preload="metadata" />

        <div className="mt-10 flex justify-center">
          <SecretSymbol id="lock" />
        </div>
      </div>
    </section>
  );
}

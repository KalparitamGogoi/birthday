"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { intro, timeGreetings } from "@/data/birthdayContent";

function getTimeGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return timeGreetings.morning;
  if (hour >= 12 && hour < 18) return timeGreetings.afternoon;
  if (hour >= 18 && hour < 23) return timeGreetings.evening;
  return timeGreetings.lateNight;
}

export default function Intro({ onEnter }: { onEnter: () => void }) {
  const [step, setStep] = useState(0);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(getTimeGreeting());
    const timers = [
      setTimeout(() => setStep(1), 1400),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => setStep(3), 4600),
      setTimeout(() => setStep(4), 5600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-noir px-6 text-center">
      {/* atmospheric glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-burgundy/25 blur-[140px]" />
      </div>

      <div className="relative z-10 flex max-w-xl flex-col items-center gap-8">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.p
              key="line1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="font-display text-xl font-light italic text-ivory/80 sm:text-2xl"
            >
              {intro.lineOne}
            </motion.p>
          )}
          {step === 1 && (
            <motion.p
              key="line2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="font-display text-xl font-light italic text-ivory/80 sm:text-2xl"
            >
              {intro.lineTwo}
            </motion.p>
          )}
        </AnimatePresence>

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-champagne/40" />
              <h1 className="font-display text-4xl font-medium tracking-wide text-champagne-light sm:text-6xl">
                {intro.revealName}
              </h1>
              <Heart
                size={16}
                strokeWidth={1.25}
                className="text-rose"
                fill="currentColor"
                fillOpacity={0.5}
              />
            </div>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="font-body text-sm font-light tracking-wide text-ivory/60 sm:text-base"
          >
            {intro.subline}
          </motion.p>
        )}

        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-4 flex flex-col items-center gap-5"
          >
            <button
              onClick={onEnter}
              className="group relative overflow-hidden rounded-full border border-champagne/40 px-8 py-3 font-body text-xs font-medium tracking-[0.2em] text-ivory transition-colors duration-500 hover:border-champagne"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-noir">
                {intro.enterLabel} →
              </span>
              <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-champagne transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </button>
            {greeting && (
              <p className="font-body text-[0.7rem] font-light tracking-wide text-ivory/35">
                {greeting}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

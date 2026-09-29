"use client";

import { motion, AnimatePresence } from "framer-motion";
import { secret } from "@/data/birthdayContent";
import { SECRET_IDS, useSecret } from "./SecretContext";

export default function SecretGame() {
  const { found, isComplete } = useSecret();

  return (
    <section
      id="secret"
      className="relative flex min-h-[70vh] flex-col items-center justify-center bg-noir px-6 py-28 text-center"
    >
      <AnimatePresence mode="wait">
        {!isComplete ? (
          <motion.div
            key="searching"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="font-display text-2xl italic text-ivory sm:text-3xl">
              {secret.introLine}
            </p>
            <p className="font-body text-sm font-light text-ivory/50">
              {secret.challengeLine}
            </p>
            <p className="mt-4 font-body text-[0.65rem] tracking-widest2 text-champagne-dim">
              {found.size} / {SECRET_IDS.length}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex max-w-md flex-col items-center gap-6"
          >
            <p className="font-body text-xs font-medium tracking-widest2 text-champagne-light">
              {secret.unlockedLine}
            </p>
            <h3 className="font-display text-2xl italic text-ivory sm:text-3xl">
              {secret.revealTitle}
            </h3>
            <div className="w-full max-w-xs overflow-hidden rounded-sm shadow-[0_20px_45px_-15px_rgba(0,0,0,0.7)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={secret.revealPhoto} alt="" className="w-full object-cover" />
            </div>
            <p className="font-body text-sm font-light leading-relaxed text-ivory/70">
              {secret.revealText}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

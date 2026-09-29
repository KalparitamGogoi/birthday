"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { finalReveal } from "@/data/birthdayContent";

export default function FinalReveal() {
  const petals = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        left: `${(i * 97) % 100}%`,
        delay: (i * 1.3) % 12,
        duration: 10 + ((i * 3) % 6),
        size: 4 + (i % 3) * 2,
      })),
    []
  );

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-noir px-6 py-28 text-center">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {petals.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-0 animate-drift rounded-full bg-rose/40"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex max-w-xl flex-col items-center gap-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-body text-xs font-light tracking-widest2 text-ivory/40"
        >
          {finalReveal.before}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-balance font-display text-3xl font-light italic text-champagne-light sm:text-5xl"
        >
          {finalReveal.headline}
        </motion.h2>

        {finalReveal.lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 1 + i * 0.4, ease: "easeOut" }}
            className="font-body text-sm font-light text-ivory/65 sm:text-base"
          >
            {line}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 1.9, ease: "easeOut" }}
          className="mt-6 w-full max-w-sm overflow-hidden rounded-sm shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={finalReveal.photo} alt="" className="w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

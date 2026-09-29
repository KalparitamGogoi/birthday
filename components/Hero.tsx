"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero } from "@/data/birthdayContent";
import { SecretSymbol } from "./SecretContext";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-noir sm:items-center"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.photo}
          alt=""
          className="h-full w-full scale-110 object-cover object-center opacity-70"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/20"
        />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto max-w-3xl px-6 pb-20 pt-32 text-center sm:pb-0"
      >
        <h1 className="text-balance font-display text-3xl font-light leading-tight text-ivory sm:text-5xl md:text-6xl">
          {hero.statement[0]}
          <br />
          <span className="italic text-champagne-light">
            {hero.statement[1]}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-balance font-body text-sm font-light text-ivory/60 sm:text-base">
          {hero.paragraph}
        </p>
        <div className="mt-6 flex justify-center">
          <SecretSymbol id="star" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="h-8 w-px animate-pulse-soft bg-gradient-to-b from-ivory/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

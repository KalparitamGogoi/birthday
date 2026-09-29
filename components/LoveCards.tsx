"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { loveCards } from "@/data/birthdayContent";
import { SecretSymbol } from "./SecretContext";

function Card({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className="group relative h-40 w-full [perspective:1200px] sm:h-48"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* front */}
        <div className="absolute inset-0 flex items-center justify-center rounded-sm border border-champagne/20 bg-noir-raised p-4 text-center [backface-visibility:hidden]">
          <span className="font-display text-lg italic text-ivory sm:text-xl">
            {front}
          </span>
        </div>
        {/* back */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-sm border border-champagne/40 bg-burgundy-deep p-5 text-center [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="font-body text-xs font-light leading-relaxed text-ivory/85 sm:text-sm">
            {back}
          </span>
        </div>
      </motion.div>
    </button>
  );
}

export default function LoveCards() {
  return (
    <section id="love-notes" className="relative bg-noir px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-3xl font-light italic text-ivory sm:text-4xl">
            Things I Never Say Enough
          </h2>
          <SecretSymbol id="camera" />
        </div>
        <p className="mb-14 font-body text-sm font-light text-ivory/45 sm:mb-20">
          Tap a card.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {loveCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
            >
              <Card front={card.front} back={card.back} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

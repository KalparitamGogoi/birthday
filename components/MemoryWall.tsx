"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { memories, type Memory } from "@/data/birthdayContent";
import { SecretSymbol } from "./SecretContext";

export default function MemoryWall() {
  const [active, setActive] = useState<Memory | null>(null);

  return (
    <section id="memories" className="relative bg-noir px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 flex items-center justify-between sm:mb-20">
          <h2 className="font-display text-3xl font-light italic text-ivory sm:text-4xl">
            Memory Wall
          </h2>
          <SecretSymbol id="moon" />
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16">
          {memories.map((memory, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(memory)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: "easeOut" }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              style={{ rotate: memory.rotate }}
              className="group relative mx-auto block w-full max-w-[220px] bg-ivory p-3 pb-10 text-left shadow-[0_18px_35px_-10px_rgba(0,0,0,0.6)]"
            >
              <div className="aspect-square w-full overflow-hidden bg-noir/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={memory.photo}
                  alt=""
                  className="h-full w-full object-cover grayscale-[10%] transition duration-500 group-hover:grayscale-0"
                />
              </div>
              <span className="absolute bottom-3 left-3 right-3 truncate font-display text-[0.8rem] italic text-noir/70">
                {memory.caption}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-noir/90 backdrop-blur-md px-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm bg-ivory p-4 pb-8 shadow-2xl"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-noir text-ivory"
              >
                <X size={16} />
              </button>
              <div className="aspect-square w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.photo}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 font-body text-[0.65rem] uppercase tracking-widest2 text-noir/40">
                {active.date}
              </p>
              <p className="mt-3 font-display text-lg italic leading-relaxed text-noir/80">
                {active.note}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { storyChapters } from "@/data/birthdayContent";
import { SecretSymbol } from "./SecretContext";

export default function Story() {
  return (
    <section id="story" className="relative bg-noir px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex items-center justify-between sm:mb-24">
          <h2 className="font-display text-3xl font-light italic text-ivory sm:text-4xl">
            Our Story
          </h2>
          <SecretSymbol id="heart" />
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-burgundy-light/60 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-20 sm:gap-32">
            {storyChapters.map((chapter, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={chapter.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className={`relative flex flex-col gap-6 pl-12 sm:pl-0 ${
                    isEven
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse"
                  } sm:items-center sm:gap-16`}
                >
                  {/* marker */}
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-champagne/40 bg-noir font-display text-xs text-champagne-light sm:left-1/2 sm:-translate-x-1/2">
                    {chapter.number}
                  </div>

                  <div className="sm:w-1/2">
                    <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm sm:max-w-none">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={chapter.photo}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="sm:w-1/2">
                    <p className="font-body text-[0.7rem] font-medium uppercase tracking-widest2 text-rose-muted">
                      {chapter.date}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-medium text-ivory sm:text-3xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-4 max-w-md font-body text-sm font-light leading-relaxed text-ivory/60 sm:text-base">
                      {chapter.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

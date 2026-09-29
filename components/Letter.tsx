"use client";

import { motion } from "framer-motion";
import { Caveat } from "next/font/google";
import { letter } from "@/data/birthdayContent";

const handwriting = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Letter() {
  return (
    <section
      id="letter"
      className="relative bg-gradient-to-b from-noir via-burgundy-deep/40 to-noir px-6 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="paper-texture relative rounded-[2px] px-6 py-12 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] sm:px-14 sm:py-16"
        >
          <h2
            className={`${handwriting.className} text-4xl text-burgundy-deep sm:text-5xl`}
          >
            {letter.heading}
          </h2>

          <div className="mt-8 space-y-5">
            {letter.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`${handwriting.className} text-2xl leading-relaxed text-noir/80 sm:text-[1.7rem]`}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 text-right">
            <p className={`${handwriting.className} text-2xl text-noir/70`}>
              {letter.signOff}
            </p>
            <p
              className={`${handwriting.className} mt-1 text-4xl text-burgundy-deep sm:text-5xl`}
            >
              {letter.signature}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

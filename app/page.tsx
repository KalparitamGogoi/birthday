"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import MemoryWall from "@/components/MemoryWall";
import LoveCards from "@/components/LoveCards";
import MusicPlayer from "@/components/MusicPlayer";
import SecretGame from "@/components/SecretGame";
import Letter from "@/components/Letter";
import FinalReveal from "@/components/FinalReveal";
import { SecretProvider, SecretProgress } from "@/components/SecretContext";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <SecretProvider>
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
          >
            <Intro onEnter={() => setEntered(true)} />
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <Hero />
            <Story />
            <MemoryWall />
            <LoveCards />
            <MusicPlayer />
            <SecretGame />
            <Letter />
            <FinalReveal />
            <SecretProgress />
          </motion.main>
        )}
      </AnimatePresence>
    </SecretProvider>
  );
}

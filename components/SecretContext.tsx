"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Heart,
  Moon,
  Camera,
  Lock,
  type LucideIcon,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────
// THE FIVE HIDDEN SYMBOLS
// ─────────────────────────────────────────────────────────────────────────

export const SECRET_IDS = [
  "star",
  "heart",
  "moon",
  "camera",
  "lock",
] as const;

export type SecretId = (typeof SECRET_IDS)[number];

const ICONS: Record<SecretId, LucideIcon> = {
  star: Star,
  heart: Heart,
  moon: Moon,
  camera: Camera,
  lock: Lock,
};

type SecretContextValue = {
  found: Set<SecretId>;
  markFound: (id: SecretId) => void;
  isComplete: boolean;
};

const SecretContext = createContext<SecretContextValue | null>(null);

// ─────────────────────────────────────────────────────────────────────────
// SECRET PROVIDER
// ─────────────────────────────────────────────────────────────────────────

export function SecretProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [found, setFound] = useState<Set<SecretId>>(new Set());

  const markFound = useCallback((id: SecretId) => {
    setFound((prev) => {
      if (prev.has(id)) return prev;

      const next = new Set(prev);
      next.add(id);

      return next;
    });
  }, []);

  const isComplete = found.size === SECRET_IDS.length;

  const value = useMemo(
    () => ({
      found,
      markFound,
      isComplete,
    }),
    [found, markFound, isComplete]
  );

  return (
    <SecretContext.Provider value={value}>
      {children}
    </SecretContext.Provider>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECRET HOOK
// ─────────────────────────────────────────────────────────────────────────

export function useSecret() {
  const ctx = useContext(SecretContext);

  if (!ctx) {
    throw new Error("useSecret must be used within SecretProvider");
  }

  return ctx;
}

// ─────────────────────────────────────────────────────────────────────────
// SECRET SYMBOL
// ─────────────────────────────────────────────────────────────────────────

export function SecretSymbol({
  id,
  className = "",
}: {
  id: SecretId;
  className?: string;
}) {
  const { found, markFound } = useSecret();

  const Icon = ICONS[id];
  const isFound = found.has(id);

  return (
    <button
      type="button"
      onClick={() => markFound(id)}
      aria-label={
        isFound
          ? `${id} symbol found`
          : "Hidden symbol"
      }
      className={`
        group relative
        flex h-10 w-10
        items-center justify-center
        rounded-full
        outline-none
        transition-all duration-500
        hover:bg-champagne/10
        hover:scale-110
        active:scale-95
        focus-visible:ring-1
        focus-visible:ring-champagne-light
        ${className}
      `}
    >
      {/* Soft glow behind the symbol */}
      <span
        className={`
          absolute inset-0
          rounded-full
          blur-md
          transition-opacity duration-500
          ${
            isFound
              ? "bg-champagne-light/25 opacity-100"
              : "bg-champagne-light/10 opacity-0 group-hover:opacity-100"
          }
        `}
      />

      {/* The actual symbol */}
      <Icon
        size={19}
        strokeWidth={1.4}
        className={`
          relative z-10
          transition-all duration-500
          ${
            isFound
              ? "scale-125 text-champagne-light opacity-100"
              : "text-champagne-light opacity-65 group-hover:scale-110 group-hover:opacity-100"
          }
        `}
      />

      {/* Very subtle circular border on hover */}
      <span
        className={`
          absolute inset-0
          rounded-full
          border
          transition-all duration-500
          ${
            isFound
              ? "border-champagne-light/50"
              : "border-champagne-light/0 group-hover:border-champagne-light/30"
          }
        `}
      />

      {/* Discovery animation */}
      <AnimatePresence>
        {isFound && (
          <motion.span
            initial={{
              scale: 0.4,
              opacity: 0.9,
            }}
            animate={{
              scale: 2.5,
              opacity: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              absolute inset-0
              rounded-full
              border
              border-champagne-light
            "
          />
        )}
      </AnimatePresence>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SECRET PROGRESS
// ─────────────────────────────────────────────────────────────────────────

export function SecretProgress() {
  const { found } = useSecret();

  return (
    <div
      className="
        fixed
        bottom-5
        left-5
        z-40
        flex
        items-center
        gap-2
        rounded-full
        border
        border-champagne-light/10
        bg-noir/40
        px-3
        py-2
        backdrop-blur-sm
      "
      aria-hidden="true"
    >
      {SECRET_IDS.map((id) => (
        <span
          key={id}
          className={`
            h-1.5
            w-1.5
            rounded-full
            transition-all
            duration-700
            ${
              found.has(id)
                ? "scale-125 bg-champagne-light shadow-[0_0_8px_rgba(201,168,106,0.8)]"
                : "bg-ivory/25"
            }
          `}
        />
      ))}
    </div>
  );
}
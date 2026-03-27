"use client";

import { motion } from "framer-motion";

export function AuroraBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Primary aurora blob */}
      <motion.div
        className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.22) 0%, rgba(168,85,247,0.16) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.12, 0.96, 1.08, 1],
          x: ["-50%", "-46%", "-54%", "-48%", "-50%"],
          opacity: [0.85, 1, 0.75, 0.95, 0.85],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary accent blob */}
      <motion.div
        className="absolute -top-10 left-1/2 h-[350px] w-[500px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168,85,247,0.14) 0%, rgba(59,130,246,0.08) 60%, transparent 80%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 0.9, 1.1, 0.95, 1],
          x: ["-50%", "-55%", "-45%", "-52%", "-50%"],
          opacity: [0.7, 1, 0.65, 0.9, 0.7],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Subtle radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
    </div>
  );
}

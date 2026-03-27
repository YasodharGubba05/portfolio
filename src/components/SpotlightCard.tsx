"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleMouseLeave() {
    setPos(null);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden", className)}
      style={{
        "--spotlight-x": pos ? `${pos.x}px` : "50%",
        "--spotlight-y": pos ? `${pos.y}px` : "50%",
        "--spotlight-opacity": pos ? "1" : "0",
      } as React.CSSProperties}
    >
      {/* Spotlight overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity: "var(--spotlight-opacity)",
          background:
            "radial-gradient(280px circle at var(--spotlight-x) var(--spotlight-y), rgba(255,255,255,0.055), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}

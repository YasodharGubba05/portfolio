"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Disable hover glow and cursor spotlight */
  staticSurface?: boolean;
}

export function SpotlightCard({
  children,
  className,
  staticSurface = false,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [hover, setHover] = useState(false);

  const updateGlowPosition = useCallback(
    (clientX: number, clientY: number) => {
      const el = ref.current;
      if (!el || staticSurface) return;
      const rect = el.getBoundingClientRect();
      setPos({ x: clientX - rect.left, y: clientY - rect.top });
    },
    [staticSurface],
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (staticSurface) return;
    updateGlowPosition(e.clientX, e.clientY);
  }

  function handleMouseLeave() {
    setHover(false);
    setPos(null);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (staticSurface) return;
    const t = e.touches[0];
    if (t) updateGlowPosition(t.clientX, t.clientY);
  }

  const showGlow = hover && !staticSurface;
  const spotlightOpacity = showGlow ? (pos ? "1" : "0.4") : "0";

  return (
    <div
      ref={ref}
      onMouseEnter={() => !staticSurface && setHover(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => !staticSurface && setHover(true)}
      onTouchEnd={handleMouseLeave}
      onTouchMove={handleTouchMove}
      className={cn(
        "spotlight-card-glow relative isolate overflow-hidden rounded-[inherit]",
        showGlow && "spotlight-card-glow--active",
        className,
      )}
      style={
        {
          "--spotlight-x": pos ? `${pos.x}px` : "50%",
          "--spotlight-y": pos ? `${pos.y}px` : "50%",
          "--spotlight-opacity": spotlightOpacity,
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: "var(--spotlight-opacity)",
          background:
            "radial-gradient(320px circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-a), var(--spotlight-b) 38%, transparent 68%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

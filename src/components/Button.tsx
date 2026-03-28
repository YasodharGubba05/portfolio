import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  className,
  variant = "primary",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ease-out will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]";

  const variants: Record<Variant, string> = {
    primary:
      "bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-black shadow-[0_16px_45px_rgba(168,85,247,0.25)] hover:brightness-110 active:scale-[0.99]",
    secondary:
      "glass text-[var(--fg)] hover:bg-[var(--fill-hover)] active:scale-[0.99]",
    ghost:
      "text-[var(--fg)] hover:bg-[var(--fill-hover)] active:scale-[0.99]",
  };

  return (
    <Link className={cn(base, variants[variant], className)} {...props} />
  );
}


"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

type NavItem = { id: string; label: string };

export function Nav() {
  const items: NavItem[] = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "certifications", label: "Certifications" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50">
        <div
          className={cn(
            "border-b border-transparent transition-colors",
            scrolled
              ? "bg-[rgba(15,15,15,0.80)] backdrop-blur-xl border-white/10"
              : "",
          )}
        >
          <Container className="flex h-16 items-center justify-between">
            <a
              href="#top"
              className="font-semibold tracking-tight text-zinc-100"
            >
              {site.name}
              <span className="text-zinc-500">.</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="hover:text-zinc-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                href="#projects"
                variant="ghost"
                className="hidden sm:inline-flex"
              >
                View Projects
              </Button>
              <Button
                href={site.resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex"
              >
                Resume
              </Button>

              {/* Hamburger button — mobile only */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
                className="md:hidden relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-200 transition hover:bg-white/[0.07]"
              >
                <motion.span
                  animate={menuOpen ? "open" : "closed"}
                  className="flex flex-col gap-[5px] w-[18px]"
                >
                  {/* Top bar */}
                  <motion.span
                    className="block h-[1.5px] w-full bg-current origin-center"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: "6.5px" },
                    }}
                    transition={{ duration: 0.22 }}
                  />
                  {/* Middle bar */}
                  <motion.span
                    className="block h-[1.5px] w-full bg-current"
                    variants={{
                      closed: { opacity: 1, scaleX: 1 },
                      open: { opacity: 0, scaleX: 0 },
                    }}
                    transition={{ duration: 0.18 }}
                  />
                  {/* Bottom bar */}
                  <motion.span
                    className="block h-[1.5px] w-full bg-current origin-center"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: "-6.5px" },
                    }}
                    transition={{ duration: 0.22 }}
                  />
                </motion.span>
              </button>
            </div>
          </Container>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed top-16 left-0 right-0 z-40 md:hidden"
            >
              <div className="mx-4 rounded-2xl border border-white/10 bg-[rgba(15,15,15,0.96)] backdrop-blur-2xl shadow-2xl overflow-hidden">
                <nav className="flex flex-col divide-y divide-white/[0.06]">
                  {items.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      className="flex items-center px-6 py-4 text-base font-medium text-zinc-200 hover:text-zinc-50 hover:bg-white/[0.04] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="flex gap-3 px-6 py-4 border-t border-white/[0.06]">
                  <a
                    href="#projects"
                    onClick={closeMenu}
                    className="flex-1 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-zinc-200 border border-white/10 hover:bg-white/[0.06] transition"
                  >
                    View Projects
                  </a>
                  <a
                    href={site.resume.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex-1 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-black hover:brightness-110 transition"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

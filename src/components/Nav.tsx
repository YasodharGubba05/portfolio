"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
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
      <header className="sticky top-0 z-50 pt-[env(safe-area-inset-top)]">
        <div
            className={cn(
            "border-b border-transparent transition-colors",
            scrolled
              ? "border-[var(--border-subtle)] bg-[var(--nav-scrolled-bg)] backdrop-blur-xl"
              : "",
          )}
        >
          <Container className="flex h-14 min-h-14 items-center justify-between gap-3 sm:h-16 sm:min-h-16">
            <a
              href="#top"
              className="min-w-0 shrink truncate pr-2 font-semibold tracking-tight text-[var(--text-primary)]"
            >
              {site.name}
              <span className="text-[var(--text-label)]">.</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-6 text-sm text-[var(--text-body)] md:flex">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="transition-colors duration-300 ease-out hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <ThemeToggle />
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
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="relative z-50 flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--fill-chip)] text-[var(--text-body)] transition hover:bg-[var(--fill-hover)] active:scale-[0.98] md:hidden"
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
              className="fixed inset-0 z-40 backdrop-blur-sm md:hidden bg-[var(--backdrop)]"
              onClick={closeMenu}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed left-0 right-0 z-40 max-h-[calc(100dvh-3.5rem-env(safe-area-inset-top))] overflow-y-auto overscroll-contain md:hidden top-[calc(3.5rem+env(safe-area-inset-top))] sm:top-[calc(4rem+env(safe-area-inset-top))] sm:max-h-[calc(100dvh-4rem-env(safe-area-inset-top))]"
            >
              <div className="mx-3 mb-3 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--drawer-bg)] shadow-2xl backdrop-blur-2xl">
                <nav className="flex flex-col divide-y divide-[var(--border-subtle)]">
                  {items.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      className="flex min-h-12 items-center px-5 py-3.5 text-base font-medium text-[var(--text-body)] transition-colors hover:bg-[var(--fill-muted)] hover:text-[var(--text-primary)] active:bg-[var(--fill-hover)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="flex gap-3 border-t border-[var(--border-subtle)] px-6 py-4">
                  <a
                    href="#projects"
                    onClick={closeMenu}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-[var(--border-subtle)] px-4 py-2.5 text-sm font-semibold text-[var(--text-body)] transition hover:bg-[var(--fill-hover)]"
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

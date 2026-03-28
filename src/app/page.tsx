import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { MotionDiv } from "@/components/Motion";
import { AuroraBlob } from "@/components/AuroraBlob";
import { SpotlightCard } from "@/components/SpotlightCard";
import { AnimateIn } from "@/components/AnimateIn";import { site } from "@/content/site";
import { skillGroups } from "@/content/skills";
import { projects } from "@/content/projects";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <div id="top" className="min-h-screen min-w-0 overflow-x-clip">
      <Nav />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24">
          <AuroraBlob />

          <Container className="relative">
            <MotionDiv
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <SpotlightCard className="glass rounded-2xl p-5 sm:rounded-3xl sm:p-8 lg:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
                <div className="order-2 min-w-0 flex-1 lg:order-1">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text-muted)]">
                {site.role}
              </p>
              <h1 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[var(--text-primary)] min-[400px]:text-3xl sm:text-4xl lg:text-5xl">
                <span className="gradient-text">{site.name}</span>
                <span className="text-[var(--text-label)]">{"."}</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 text-[var(--text-body)] text-pretty">
                {site.tagline}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#projects"
                  className="inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-black transition hover:brightness-110 active:brightness-95"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="glass inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--fill-hover)] active:bg-[var(--fill-hover)]"
                >
                  Contact Me
                </a>
                <a
                  href={site.resume.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-[var(--text-secondary)] transition hover:text-[var(--text-primary)] active:text-[var(--text-secondary)]"
                >
                  {site.resume.label}
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                {[
                  {
                    k: "Focus",
                    v: "Real-time apps • APIs",
                  },
                  { k: "Stack", v: "MongoDB • Express • React • Node.js" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="panel-inset p-4 transition-colors duration-300 hover:bg-[var(--fill-muted)]"
                  >
                    <p className="text-[var(--text-label)]">{item.k}</p>
                    <p className="mt-1 font-semibold text-[var(--text-secondary)]">{item.v}</p>
                  </div>
                ))}
              </div>
                </div>

                <div className="order-1 mx-auto shrink-0 lg:order-2 lg:mx-0 lg:pt-1">
                  <div
                    className={cn(
                      "relative aspect-square w-28 overflow-hidden rounded-full border border-[var(--border-subtle)] shadow-[0_12px_32px_rgba(15,23,42,0.12)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)] sm:w-32 lg:w-36",
                      "ring-1 ring-black/[0.06] dark:ring-white/[0.08]",
                    )}
                  >
                    <Image
                      src="/profile.png"
                      alt={`${site.name}, ${site.role}`}
                      fill
                      sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
                      className="object-cover object-[50%_20%]"
                      priority
                    />
                  </div>
                </div>
              </div>
              </SpotlightCard>
            </MotionDiv>
          </Container>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <Section id="about" title="About">
          <AnimateIn>
            <SpotlightCard className="glass rounded-2xl p-5 sm:p-8">
              <div className="max-w-3xl space-y-4 text-sm sm:text-base leading-7 text-[var(--text-body)]">
                <p>
                  I&apos;m a full-stack developer focused on building scalable
                  systems and seamless user experiences.
                </p>
                <p>
                  I design backend architectures that handle real-time
                  interactions while crafting frontend interfaces that feel fast,
                  clean, and intuitive.
                </p>
                <p>
                  My work emphasizes performance, system design, and creating
                  applications that are both technically strong and easy to use.
                </p>
                <p>
                  I aim to build products that don&apos;t just function
                  well—but deliver a polished and reliable experience.
                </p>
              </div>
            </SpotlightCard>
          </AnimateIn>
        </Section>

        {/* ── Skills ───────────────────────────────────────── */}
        <Section
          id="skills"
          title="Skills"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillGroups.map((group, i) => (
              <AnimateIn key={group.title} delay={i * 0.08}>
                <SpotlightCard className="glass h-full rounded-2xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">{group.title}</p>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        {group.description}
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] opacity-80 shrink-0" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[var(--border-subtle)] bg-[var(--fill-chip)] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </AnimateIn>
            ))}
          </div>
        </Section>

        {/* ── Projects ─────────────────────────────────────── */}
        <Section
          id="projects"
          title="Projects"
        >
          <div className="grid grid-cols-1 gap-4">
            {projects.map((p, i) => (
              <AnimateIn key={p.slug} delay={i * 0.1}>
                <SpotlightCard
                  className={cn(
                    "glass min-w-0 rounded-2xl p-5 sm:p-6",
                    p.featured ? "ring-1 ring-[var(--ring)]" : "",
                  )}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-lg font-bold text-[var(--text-primary)]">
                          {p.name}
                        </p>
                        {p.featured ? (
                          <span className="rounded-full bg-[var(--fill-badge)] border border-[var(--border-subtle)] px-2.5 py-1 text-[11px] font-semibold text-[var(--text-secondary)]">
                            Featured
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-body)] text-pretty">
                        {p.description}
                      </p>
                    </div>
                    <div className="flex min-w-0 flex-wrap gap-2 md:max-w-[min(100%,22rem)] md:justify-end">
                      {p.stack.slice(0, 6).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[var(--border-subtle)] bg-[var(--fill-chip)] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="panel-inset p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-label)]">
                        Problem
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-body)] text-pretty break-words">
                        {p.problem}
                      </p>
                    </div>
                    <div className="panel-inset p-4 md:col-span-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-label)]">
                        What I built
                      </p>
                      <ul className="mt-2 space-y-2 text-sm leading-6 text-[var(--text-body)]">
                        {p.contributions.map((c) => (
                          <li key={c} className="flex gap-2">
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]" />
                            <span className="min-w-0 break-words">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {p.impact.length ? (
                    <div className="panel-inset mt-4 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-label)]">
                        Impact
                      </p>
                      <ul className="mt-2 flex flex-col gap-3 text-sm text-[var(--text-body)] sm:flex-row sm:flex-wrap sm:gap-4">
                        {p.impact.map((i) => (
                          <li
                            key={i}
                            className="flex min-w-0 items-start gap-2 sm:max-w-[min(100%,28rem)]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bullet)]" />
                            <span className="min-w-0 break-words">{i}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </SpotlightCard>
              </AnimateIn>
            ))}
          </div>
        </Section>

        {/* ── Experience ───────────────────────────────────── */}
        <Section
          id="experience"
          title="Experience"
          description="Where I applied research rigor and engineering discipline to real datasets and pipelines."
        >
          <AnimateIn>
            <SpotlightCard className="glass rounded-2xl p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">
                    ML Research Intern
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Fake news detection • data pipelines • TF-IDF features
                  </p>
                </div>
                <p className="text-sm text-[var(--text-label)]">Internship</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--text-body)]">
                {[
                  "Built a preprocessing pipeline for text cleaning, tokenization, and vectorization (TF-IDF).",
                  "Designed an experiment workflow to evaluate models consistently across splits and metrics.",
                  "Documented results and iteration decisions to keep research reproducible and debuggable.",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </AnimateIn>
        </Section>

        {/* ── Certifications ───────────────────────────────── */}
        <Section
          id="certifications"
          title="Certifications"
          description="Focused certifications aligned with backend engineering and applied AI."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Oracle Java SE 17", "OCI Generative AI", "Google AI Essentials"].map(
              (c, i) => (
                <AnimateIn key={c} delay={i * 0.08}>
                  <SpotlightCard className="glass h-full rounded-2xl p-5 sm:p-6">
                    <p className="font-semibold text-[var(--text-primary)]">{c}</p>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                      Verified certification highlighting job-relevant expertise.
                    </p>
                  </SpotlightCard>
                </AnimateIn>
              ),
            )}
          </div>
        </Section>

        {/* ── Contact ──────────────────────────────────────── */}
        <Section
          id="contact"
          eyebrow="Contact"
          title="Let's build something great"
          description="If you're hiring for SDE / Full Stack roles or want to collaborate, I'd love to chat."
        >
          <AnimateIn>
            <SpotlightCard className="glass rounded-2xl p-5 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-sm text-[var(--text-muted)]">Email</p>
                  <a
                    className="mt-1 inline-block max-w-full break-all font-semibold text-[var(--text-primary)] transition hover:text-[var(--text-primary)] sm:break-normal"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--fill-chip)] text-[var(--text-secondary)] transition hover:bg-[var(--fill-badge)] hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                    href={site.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .5C5.73.5.75 5.65.75 12.1c0 5.17 3.44 9.56 8.2 11.1.6.12.82-.27.82-.58v-2.06c-3.34.75-4.04-1.67-4.04-1.67-.54-1.42-1.33-1.8-1.33-1.8-1.1-.78.08-.77.08-.77 1.22.09 1.87 1.3 1.87 1.3 1.08 1.9 2.83 1.35 3.52 1.03.11-.81.42-1.35.76-1.66-2.66-.31-5.46-1.37-5.46-6.09 0-1.35.46-2.45 1.22-3.32-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.27a11.08 11.08 0 0 1 6.01 0c2.3-1.6 3.3-1.27 3.3-1.27.65 1.69.24 2.94.12 3.25.76.87 1.22 1.97 1.22 3.32 0 4.73-2.8 5.77-5.47 6.08.43.38.81 1.13.81 2.27v3.36c0 .32.22.7.83.58 4.76-1.54 8.2-5.93 8.2-11.1C23.25 5.65 18.27.5 12 .5z" />
                    </svg>
                  </a>
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--fill-chip)] text-[var(--text-secondary)] transition hover:bg-[var(--fill-badge)] hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </AnimateIn>
        </Section>
      </main>

      <Footer />
    </div>
  );
}






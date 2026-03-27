import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { MotionDiv } from "@/components/Motion";
import { AuroraBlob } from "@/components/AuroraBlob";
import { SpotlightCard } from "@/components/SpotlightCard";
import { AnimateIn } from "@/components/AnimateIn";
import { site } from "@/content/site";
import { skillGroups } from "@/content/skills";
import { projects } from "@/content/projects";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Nav />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <AuroraBlob />

          <Container className="relative">
            <MotionDiv
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass rounded-3xl p-7 sm:p-10"
            >
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-400">
                {site.role}
              </p>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-zinc-50">
                <span className="gradient-text">{site.name}</span>
                <span className="text-zinc-500">{"."}</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 text-zinc-300">
                {site.tagline}
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-black hover:brightness-110 transition"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="glass inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-zinc-50 hover:bg-white/[0.06] transition"
                >
                  Contact Me
                </a>
                <a
                  href={site.resume.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:text-zinc-50 transition"
                >
                  {site.resume.label}
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  {
                    k: "Focus",
                    v: "Real-time apps • APIs",
                  },
                  { k: "Stack", v: "MongoDB • Express • React • Node.js" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.035] transition"
                  >
                    <p className="text-zinc-500">{item.k}</p>
                    <p className="mt-1 font-semibold text-zinc-100">{item.v}</p>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </Container>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <Section id="about" eyebrow="About">
          <AnimateIn>
            <SpotlightCard className="glass rounded-2xl p-7 sm:p-8">
              <div className="max-w-3xl space-y-4 text-sm sm:text-base leading-7 text-zinc-300">
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
          eyebrow="Skills"
          title="Balanced full-stack skillset"
          description="A toolkit optimized for building modern web products—UI, APIs, data, and infra."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillGroups.map((group, i) => (
              <AnimateIn key={group.title} delay={i * 0.08}>
                <SpotlightCard className="glass rounded-2xl p-6 h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-zinc-50">{group.title}</p>
                      <p className="mt-1 text-sm text-zinc-400">
                        {group.description}
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] opacity-80 shrink-0" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-zinc-200"
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
          eyebrow="Projects"
          title="Full-stack projects with engineering depth"
          description="Selected work that demonstrates architecture, real-world constraints, and UX quality."
        >
          <div className="grid grid-cols-1 gap-4">
            {projects.map((p, i) => (
              <AnimateIn key={p.slug} delay={i * 0.1}>
                <SpotlightCard
                  className={cn(
                    "glass rounded-2xl p-6",
                    p.featured ? "ring-1 ring-[var(--ring)]" : "",
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-bold text-zinc-50">
                          {p.name}
                        </p>
                        {p.featured ? (
                          <span className="rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-zinc-200">
                            Featured
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">
                        {p.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.slice(0, 6).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-zinc-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Problem
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">
                        {p.problem}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 md:col-span-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        What I built
                      </p>
                      <ul className="mt-2 space-y-2 text-sm leading-6 text-zinc-300">
                        {p.contributions.map((c) => (
                          <li key={c} className="flex gap-2">
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {p.impact.length ? (
                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Impact
                      </p>
                      <ul className="mt-2 flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-zinc-300">
                        {p.impact.map((i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                            <span>{i}</span>
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
          eyebrow="Experience"
          title="Experience that shows systems thinking"
          description="Where I applied research rigor and engineering discipline to real datasets and pipelines."
        >
          <AnimateIn>
            <SpotlightCard className="glass rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <p className="font-semibold text-zinc-50">
                    ML Research Intern
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Fake news detection • data pipelines • TF-IDF features
                  </p>
                </div>
                <p className="text-sm text-zinc-500">Internship</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-300">
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
          eyebrow="Certifications"
          title="Credentials"
          description="Focused certifications aligned with backend engineering and applied AI."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Oracle Java SE 17", "OCI Generative AI", "Google AI Essentials"].map(
              (c, i) => (
                <AnimateIn key={c} delay={i * 0.08}>
                  <SpotlightCard className="glass rounded-2xl p-6 h-full">
                    <p className="font-semibold text-zinc-50">{c}</p>
                    <p className="mt-2 text-sm text-zinc-400">
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
            <SpotlightCard className="glass rounded-2xl p-7 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <a
                    className="mt-1 inline-flex items-center gap-2 font-semibold text-zinc-50 hover:text-white transition"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-200 transition hover:bg-white/[0.06] hover:text-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
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
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-200 transition hover:bg-white/[0.06] hover:text-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
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

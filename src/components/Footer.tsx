import { Container } from "@/components/Container";
import { site } from "@/content/site";

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-200 transition hover:bg-white/[0.06] hover:text-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-sm text-zinc-300">
            <span className="font-semibold text-zinc-50">{site.name}</span> —{" "}
            {site.role}
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            Built with Next.js, TypeScript, Tailwind, and Framer Motion.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <IconLink href={site.links.github} label="GitHub">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.73.5.75 5.65.75 12.1c0 5.17 3.44 9.56 8.2 11.1.6.12.82-.27.82-.58v-2.06c-3.34.75-4.04-1.67-4.04-1.67-.54-1.42-1.33-1.8-1.33-1.8-1.1-.78.08-.77.08-.77 1.22.09 1.87 1.3 1.87 1.3 1.08 1.9 2.83 1.35 3.52 1.03.11-.81.42-1.35.76-1.66-2.66-.31-5.46-1.37-5.46-6.09 0-1.35.46-2.45 1.22-3.32-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.27a11.08 11.08 0 0 1 6.01 0c2.3-1.6 3.3-1.27 3.3-1.27.65 1.69.24 2.94.12 3.25.76.87 1.22 1.97 1.22 3.32 0 4.73-2.8 5.77-5.47 6.08.43.38.81 1.13.81 2.27v3.36c0 .32.22.7.83.58 4.76-1.54 8.2-5.93 8.2-11.1C23.25 5.65 18.27.5 12 .5z" />
            </svg>
          </IconLink>

          <IconLink href={site.links.linkedin} label="LinkedIn">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
            </svg>
          </IconLink>

          <a
            className="ml-1 text-sm text-zinc-400 hover:text-zinc-200 transition"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}


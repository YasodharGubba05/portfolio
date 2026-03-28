import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: PropsWithChildren<{
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}>) {
  const hasTitle = Boolean(title && title.trim().length > 0);
  const hasDescription = Boolean(description && description.trim().length > 0);
  const hasHeader = Boolean(eyebrow || hasTitle || hasDescription);

  return (
    <section
      id={id}
      className={cn("py-12 sm:py-16 md:py-20", className)}
    >
      <Container>
        {hasHeader ? (
          <div className={cn(hasTitle || hasDescription ? "mb-8 sm:mb-10" : "mb-5")}>
            {eyebrow ? (
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text-muted)]">
                {eyebrow}
              </p>
            ) : null}
            {hasTitle ? (
              <h2
                className={cn(
                  "text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl",
                  eyebrow ? "mt-2" : "mt-0",
                )}
              >
                {title}
              </h2>
            ) : null}
            {hasDescription ? (
              <p className="mt-3 max-w-2xl text-base leading-7 text-pretty text-[var(--text-muted)]">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}


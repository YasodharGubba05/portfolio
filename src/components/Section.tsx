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
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <Container>
        {hasHeader ? (
          <div className={cn(hasTitle || hasDescription ? "mb-8 sm:mb-10" : "mb-5")}>
            {eyebrow ? (
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-400">
                {eyebrow}
              </p>
            ) : null}
            {hasTitle ? (
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50">
                {title}
              </h2>
            ) : null}
            {hasDescription ? (
              <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
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


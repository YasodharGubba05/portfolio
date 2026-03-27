export type SkillGroup = {
  title: string;
  description: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    description: "Modern React apps with design systems and UX polish.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
  },
  {
    title: "Backend",
    description: "APIs, real-time systems, auth, and performance-minded architecture.",
    items: ["Node.js", "Express", "FastAPI", "WebSockets", "WebRTC"],
  },
  {
    title: "Databases",
    description: "Pragmatic data modeling across SQL and NoSQL.",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Tools & DevOps",
    description: "Shipping-ready workflows with reproducibility and observability in mind.",
    items: ["Docker", "Git", "Linux", "CI/CD"],
  },
] as const;


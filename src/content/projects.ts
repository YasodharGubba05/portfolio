export type Project = {
  slug: string;
  name: string;
  featured?: boolean;
  description: string;
  problem: string;
  contributions: readonly string[];
  impact: readonly string[];
  stack: readonly string[];
  links?: { label: string; href: string }[];
};

export const projects: readonly Project[] = [
  {
    slug: "bondbox",
    name: "BondBox",
    featured: true,
    description:
      "A real-time collaboration platform focused on low-latency presence, calls, and shared workspaces.",
    problem:
      "Handling real-time collaboration requires maintaining consistent state across multiple users while managing latency, concurrent updates, and event ordering. Ensuring reliable presence, messaging, and media flows introduces complexity in synchronization and distributed communication.",
    contributions: [
      "Designed a real-time architecture using WebSockets for state + events and Redis for pub/sub fanout.",
      "Implemented WebRTC calling flows with robust session handling and graceful fallbacks.",
      "Built an interaction-first UI with smooth transitions, clear system states, and latency-aware feedback.",
    ],
    impact: [
      "Achieved stable real-time interactions with predictable state updates under concurrent usage.",
      "Enabled low-latency communication and scalable event distribution using a Redis-backed pub/sub architecture.",
    ],
    stack: ["React", "TypeScript", "WebRTC", "WebSockets", "Redis", "Node.js"],
    links: [],
  },
  {
    slug: "digital-saathi",
    name: "Digital Saathi",
    description:
      "A MERN dashboard product with GPT-powered workflows and analytics views.",
    problem:
      "Many individuals lack access to clear, actionable financial guidance, making it difficult to understand investments, manage money, and make informed decisions. Existing tools are often complex, fragmented, or not tailored for guided learning.",
    contributions: [
      "Built end-to-end features across the MERN stack with role-aware dashboards.",
      "Integrated GPT-based assistance to streamline repetitive workflows.",
      "Optimized UI information density with readable layouts and responsive grids.",
    ],
    impact: [
      "Enabled users to understand and act on financial concepts through guided workflows and GPT-powered assistance.",
      "Simplified complex financial information into interactive dashboards, improving accessibility and decision-making.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "GPT"],
    links: [],
  },
  {
    slug: "trimlink",
    name: "TrimLink",
    description:
      "A secure URL shortener with JWT auth, analytics-ready data modeling, and PostgreSQL.",
    problem:
      "Building a URL shortener requires ensuring secure link ownership, validating inputs, and designing a system that can handle high-frequency redirects while supporting future analytics capabilities.",
    contributions: [
      "Implemented JWT auth with secure link ownership and validation.",
      "Modeled relational data in PostgreSQL with clean query patterns.",
      "Built a minimal UI for creating/managing links with fast feedback.",
    ],
    impact: [
      "Implemented secure link creation with JWT-based ownership validation and optimized redirect handling.",
      "Designed a scalable PostgreSQL schema ready for tracking and analytics extensions.",
    ],
    stack: ["PostgreSQL", "Node.js", "Express", "JWT", "React"],
    links: [],
  },
] as const;


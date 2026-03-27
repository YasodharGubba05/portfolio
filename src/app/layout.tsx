import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Gubba Yasodhar — Full-Stack Developer",
    template: "%s — Gubba Yasodhar",
  },
  description:
    "Full-Stack Developer building scalable systems and beautiful interfaces. Real-time collaboration, backend architecture, and premium UX.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "WebSockets",
    "WebRTC",
    "Redis",
  ],
  authors: [{ name: "Gubba Yasodhar" }],
  openGraph: {
    type: "website",
    title: "Gubba Yasodhar — Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable systems and beautiful interfaces.",
    url: "/",
    siteName: "Gubba Yasodhar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gubba Yasodhar — Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable systems and beautiful interfaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground noise">
        {children}
      </body>
    </html>
  );
}

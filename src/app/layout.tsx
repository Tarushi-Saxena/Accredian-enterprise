import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Learning for Teams",
  description:
    "Enterprise learning programs for high-performance teams—tailored roadmaps, expert facilitators, and measurable outcomes.",
  icons: {
    icon: "/accredian-mark.svg",
  },
  openGraph: {
    title: "Accredian Enterprise (demo rebuild)",
    description: "Partial clone built with Next.js App Router and Tailwind CSS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">{children}</body>
    </html>
  );
}

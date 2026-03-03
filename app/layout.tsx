import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Efren — Software Engineer",
    template: "%s — Efren",
  },
  description:
    "Software engineer building thoughtful, well-crafted digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-surface text-text-primary antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 md:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

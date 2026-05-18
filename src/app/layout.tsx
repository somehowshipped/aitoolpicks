import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
    default: "AI Tool Picks – Cursor AI Guides & AI Tool Reviews",
    template: "%s | AI Tool Picks",
  },
  description:
    "Practical guides for building SaaS products with Cursor AI. Compare the best AI coding tools and ship faster.",
  metadataBase: new URL("https://aitoolpicks.dev"),
  openGraph: {
    title: "AI Tool Picks",
    description: "Practical Cursor AI guides for solo builders.",
    url: "https://aitoolpicks.dev",
    siteName: "AI Tool Picks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tool Picks",
    description: "Practical Cursor AI guides for solo builders.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

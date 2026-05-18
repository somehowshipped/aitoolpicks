import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CursorTips",
  description:
    "Learn who writes CursorTips and how affiliate links are handled.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] px-6 py-20 text-[#f5f5f5]">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6366f1]">
          About
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          About CursorTips
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">
          CursorTips is written by a 19-year-old solo builder who uses Cursor AI
          daily to ship software. Every guide is based on real experience.
        </p>

        <section className="mt-12 rounded-2xl border border-white/10 bg-[#111111] p-6">
          <h2 className="text-2xl font-semibold">Affiliate disclosure</h2>
          <p className="mt-4 leading-7 text-zinc-300">
            Some links on this site are affiliate links. If you click and
            purchase, I may earn a commission at no extra cost to you. I only
            recommend tools I actually use.
          </p>
        </section>
      </div>
    </div>
  );
}

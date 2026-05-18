import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AI Tool Picks",
  description:
    "Learn who writes AI Tool Picks and how affiliate links are handled.",
};

export default function AboutPage() {
  return (
    <div className="bg-white px-6 py-14 text-[#111111] sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          About AI Tool Picks
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#111111]">
          AI Tool Picks is written by a 19-year-old solo builder who uses
          Cursor AI daily to ship software. Every guide is based on real
          experience.
        </p>

        <section className="mt-12 rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-6">
          <h2 className="text-2xl font-semibold">Affiliate disclosure</h2>
          <p className="mt-4 leading-7 text-[#6b7280]">
            Some links on this site are affiliate links. If you click and
            purchase, I may earn a commission at no extra cost to you. I only
            recommend tools I actually use.
          </p>
        </section>
      </div>
    </div>
  );
}

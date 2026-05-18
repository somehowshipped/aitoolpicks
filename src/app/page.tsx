import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f5]">
      <section className="mx-auto flex max-w-6xl flex-col items-start px-6 py-24 sm:py-32">
        <p className="mb-4 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-4 py-2 text-sm font-medium text-indigo-200">
          AI coding workflows for builders
        </p>
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
          Master AI Coding Tools & Cursor AI
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Learn practical Cursor AI tips, compare the best AI coding tools, and
          follow step-by-step guides for building SaaS products faster.
        </p>
        <Link
          href="/blog"
          className="mt-10 rounded-full bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500"
        >
          Read Latest Guides
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6366f1]">
              Latest posts
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Guides for shipping with AI
            </h2>
          </div>
          <Link href="/blog" className="hidden text-sm text-zinc-400 sm:block">
            View all posts
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="h-full rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:border-[#6366f1]/70">
                <p className="text-sm font-medium text-[#6366f1]">
                  {post.tags[0] ?? "Guide"}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {post.description}
                </p>
                <p className="mt-6 text-sm font-medium text-zinc-300">
                  Read guide
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#111111] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6366f1]">
            About CursorTips
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Practical AI coding advice without the hype.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            CursorTips publishes concise guides for developers, founders, and
            solo builders who want to use AI coding tools to ship real products.
          </p>
        </div>
      </section>
    </div>
  );
}

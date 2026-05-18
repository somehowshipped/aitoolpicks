import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read Cursor AI tips, AI coding tool comparisons, and SaaS building guides.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-[#0a0a0a] px-6 py-20 text-[#f5f5f5]">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6366f1]">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            AI coding guides and Cursor AI tips
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Actionable tutorials for building, refactoring, and shipping faster
            with modern AI development tools.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="h-full rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:border-[#6366f1]/70">
                <p className="text-sm text-zinc-500">
                  {post.date} · {post.readingTime}
                </p>
                <h2 className="mt-4 text-xl font-semibold">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {post.description}
                </p>
                <p className="mt-6 text-sm font-medium text-[#6366f1]">
                  Read guide
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

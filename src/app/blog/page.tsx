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
    <div className="bg-white px-6 py-14 text-[#111111] sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Blog
          </h1>
          <p className="mt-3 text-base leading-7 text-[#6b7280]">
            Text-first guides on Cursor AI, SaaS workflows, and practical AI
            coding tools.
          </p>
        </div>

        <div className="mt-10 divide-y divide-[#e5e7eb] border-y border-[#e5e7eb]">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="grid gap-3 py-6 sm:grid-cols-[140px_1fr]"
            >
              <time
                dateTime={post.date}
                className="text-sm leading-7 text-[#6b7280]"
              >
                {post.date}
              </time>
              <div>
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-xl font-semibold leading-7 tracking-tight group-hover:text-[#6366f1]">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-2 text-sm text-[#6b7280]">
                  {post.readingTime}
                </p>
                <p className="mt-3 text-base leading-7 text-[#6b7280]">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

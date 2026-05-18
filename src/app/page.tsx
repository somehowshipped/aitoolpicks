import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="bg-white text-[#111111]">
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-semibold tracking-tight">
            AI Tool Picks
          </h1>
          <p className="mt-3 text-base leading-7 text-[#6b7280]">
            Practical notes on Cursor AI, SaaS building, and the AI coding tools
            I would actually use.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="h-full rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-6 transition hover:border-[#6366f1] hover:bg-white">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#6b7280]">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold leading-7 tracking-tight">
                  {post.title}
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e5e7eb] bg-white px-2.5 py-1 text-xs font-medium text-[#6b7280]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-[#6b7280]">
                  {post.description}
                </p>
                <p className="mt-5 text-sm font-medium text-[#6366f1]">
                  Read guide
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

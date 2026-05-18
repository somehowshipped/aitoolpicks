import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
    },
  });

  return (
    <article className="bg-[#0a0a0a] px-6 py-20 text-[#f5f5f5]">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-500">
          {post.date} · {post.readingTime}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-300 [&_a]:text-[#6366f1] [&_h2]:pt-6 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#f5f5f5] [&_h3]:pt-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#f5f5f5] [&_li]:ml-6 [&_li]:list-disc [&_strong]:text-white">
          {content}
        </div>
      </div>
    </article>
  );
}

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
    <article className="bg-white px-6 py-14 text-[#111111] sm:py-16">
      <div className="mx-auto max-w-[680px]">
        <p className="text-sm text-[#6b7280]">
          {post.date} · {post.readingTime}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-10 space-y-6 text-[18px] leading-8 text-[#111111] [&_a]:font-medium [&_a]:text-[#6366f1] [&_h2]:mt-14 [&_h2]:border-t [&_h2]:border-[#e5e7eb] [&_h2]:pt-10 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:tracking-tight [&_h2]:text-[#111111] [&_h3]:mt-10 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:leading-tight [&_h3]:text-[#111111] [&_li]:ml-6 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-[#111111] [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-[#e5e7eb] [&_td]:p-3 [&_td]:text-sm [&_th]:border [&_th]:border-[#e5e7eb] [&_th]:bg-[#f9fafb] [&_th]:p-3 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold">
          {content}
        </div>
      </div>
    </article>
  );
}

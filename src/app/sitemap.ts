import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const baseUrl = "https://aitoolpicks.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
    })),
  ];
}

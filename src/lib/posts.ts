import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

type PostFrontmatter = {
  title?: string;
  date?: string;
  description?: string;
  tags?: string[];
};

function getPostSlug(filename: string) {
  return filename.replace(/\.mdx$/, "");
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map(getPostSlug);
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);
  const frontmatter = data as PostFrontmatter;

  return {
    slug,
    title: frontmatter.title ?? slug,
    date: frontmatter.date ?? "",
    description: frontmatter.description ?? "",
    tags: frontmatter.tags ?? [],
    readingTime: readingTime(content).text,
    content,
  };
}

export function getAllPosts() {
  return getPostSlugs()
    .map(getPostBySlug)
    .filter((post): post is Post => post !== null)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

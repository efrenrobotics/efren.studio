import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  content: string;
}

const contentDir = path.join(process.cwd(), "content/blog");

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      summary: data.summary ?? "",
      date: data.date ?? "",
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((p) => p.slug === slug);
}

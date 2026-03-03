import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPosts, getBlogPost } from "@/lib/blog";
import { FadeIn } from "@/components/fade-in";
import { SectionDivider } from "@/components/section-divider";
import { compileMDX } from "@/lib/mdx";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const content = await compileMDX(post.content);
  const allPosts = getBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = allPosts[currentIndex + 1];
  const nextPost = allPosts[currentIndex - 1];

  return (
    <section className="py-24 lg:py-32">
      <FadeIn>
        <article className="mx-auto max-w-[680px]">
          <header>
            <p className="font-mono text-sm text-text-tertiary">{post.date}</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight">
              {post.title}
            </h1>
            <p className="mt-2 text-text-secondary">{post.summary}</p>
          </header>

          <SectionDivider />

          <div className="prose">{content}</div>

          <SectionDivider />

          <nav className="flex items-center justify-between">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="font-mono text-sm text-text-secondary transition-colors hover:text-accent"
              >
                &larr; {prevPost.title}
              </Link>
            ) : (
              <span />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="font-mono text-sm text-text-secondary transition-colors hover:text-accent"
              >
                {nextPost.title} &rarr;
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </article>
      </FadeIn>
    </section>
  );
}

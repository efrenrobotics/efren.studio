import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SplitLayout } from "@/components/split-layout";
import { PageHeader } from "@/components/page-header";
import { BlogListItem } from "@/components/blog-list-item";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software, design, and craft.",
};

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <section className="py-24 lg:py-32">
      <FadeIn>
        <SplitLayout
          left={
            <PageHeader
              title="Blog"
              subtitle="Thoughts on software, design, and craft."
            />
          }
          right={
            <div>
              {posts.length === 0 ? (
                <p className="text-text-secondary">No posts yet.</p>
              ) : (
                posts.map((post) => (
                  <BlogListItem
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    summary={post.summary}
                    date={post.date}
                  />
                ))
              )}
            </div>
          }
        />
      </FadeIn>
    </section>
  );
}

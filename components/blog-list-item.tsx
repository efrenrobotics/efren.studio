import Link from "next/link";

export function BlogListItem({
  slug,
  title,
  summary,
  date,
}: {
  slug: string;
  title: string;
  summary: string;
  date: string;
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block border-b border-border py-4 transition-colors hover:bg-surface-hover"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
        <span className="shrink-0 font-mono text-sm text-text-tertiary sm:w-[120px]">
          {date}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-text-primary transition-colors group-hover:text-accent">
            {title}
          </h3>
          <p className="mt-1 text-sm text-text-secondary">{summary}</p>
        </div>
      </div>
    </Link>
  );
}

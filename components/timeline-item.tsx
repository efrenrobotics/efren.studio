export function TimelineItem({
  date,
  title,
  subtitle,
  description,
}: {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
      <span className="shrink-0 font-mono text-sm text-text-tertiary sm:w-[120px]">
        {date}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-text-primary">{title}</h3>
        <p className="font-mono text-sm text-text-secondary">{subtitle}</p>
        <p className="mt-2 text-text-secondary">{description}</p>
      </div>
    </div>
  );
}

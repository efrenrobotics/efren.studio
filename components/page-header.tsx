export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h1 className="font-display text-[3.75rem] leading-[0.9] text-balance text-text-primary">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 font-mono text-sm text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}

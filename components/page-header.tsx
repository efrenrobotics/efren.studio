export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      {subtitle && (
        <p className="mt-2 font-mono text-sm text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}

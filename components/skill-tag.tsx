export function SkillTag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-accent-muted px-3 py-1 font-mono text-sm text-accent">
      {label}
    </span>
  );
}

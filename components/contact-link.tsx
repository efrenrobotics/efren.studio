import Link from "next/link";

export function ContactLink({
  label,
  href,
  value,
}: {
  label: string;
  href: string;
  value: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="group flex items-center justify-between border-b border-border py-4 transition-colors hover:bg-surface-hover"
    >
      <span className="font-mono text-sm text-text-secondary">{label}</span>
      <span className="text-text-primary transition-colors group-hover:text-accent">
        {value}
      </span>
    </Link>
  );
}

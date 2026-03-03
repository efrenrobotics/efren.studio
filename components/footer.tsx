import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/efren", label: "GitHub" },
  { href: "https://linkedin.com/in/efren", label: "LinkedIn" },
  { href: "mailto:hello@efren.studio", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 md:px-8">
        <p className="font-mono text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} Efren
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="font-mono text-xs text-text-tertiary transition-colors hover:text-text-primary"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

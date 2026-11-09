"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6 md:px-8">
        <Link
          href="/"
          aria-label="Efren Mendoza Enriquez"
          className="shrink-0 font-display whitespace-nowrap text-[1.125rem] leading-none text-text-primary transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-[1.75rem]"
        >
          E M E
        </Link>
        <div className="flex items-center gap-2 sm:gap-6">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`whitespace-nowrap font-mono text-[13px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-sm ${
                  isActive
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

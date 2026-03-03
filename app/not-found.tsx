import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center py-24">
      <h1 className="text-2xl font-semibold tracking-tight">404</h1>
      <p className="mt-2 font-mono text-sm text-text-secondary">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 font-mono text-sm text-accent transition-opacity hover:opacity-80"
      >
        &larr; Back home
      </Link>
    </section>
  );
}

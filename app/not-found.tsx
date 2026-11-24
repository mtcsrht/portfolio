import Link from "next/link";

export default function NotFound() {
  return (
    <section className="fade-up flex min-h-[60vh] flex-col justify-center py-16">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        The page you&#39;re looking for doesn&#39;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 self-start rounded-md bg-foreground px-4 py-2 font-mono text-sm text-background transition-opacity hover:opacity-85"
      >
        ← back home
      </Link>
    </section>
  );
}

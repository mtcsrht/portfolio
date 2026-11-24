import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Backend services, systems programming and deep learning projects by Máté Cserháti — Java, Go, Rust, Python and TypeScript.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Projects() {
  return (
    <div className="fade-up py-12">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-muted">
        Things I&#39;ve built, from coursework to weekend experiments.
      </p>

      <ul className="mt-10 space-y-4">
        {projects.map((p) => (
          <li
            key={p.slug}
            className="rounded-lg border border-border p-5 transition-colors hover:border-muted hover:bg-surface"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-medium">{p.title}</h2>
              {(p.links.length > 0 || p.private) && (
                <div className="flex gap-4 font-mono text-sm">
                  {p.private && (
                    <span className="text-muted">private project</span>
                  )}
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-accent"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {p.summary}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-surface px-2 py-0.5 font-mono text-xs text-foreground ring-1 ring-border"
                >
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href={`/projects/${p.slug}`}
              className="mt-4 inline-block font-mono text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              details →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

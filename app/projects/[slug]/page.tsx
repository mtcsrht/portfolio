import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="fade-up py-12">
      <Link
        href="/projects"
        className="font-mono text-sm text-muted transition-colors hover:text-accent"
      >
        ← all projects
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">{project.title}</h1>

      {project.links.length > 0 && (
        <div className="mt-3 flex gap-4 font-mono text-sm">
          {project.links.map((l) => (
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

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-md bg-surface px-2 py-0.5 font-mono text-xs text-foreground ring-1 ring-border"
          >
            {s}
          </li>
        ))}
      </ul>

      {project.image && (
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1200}
          height={675}
          className="mt-8 w-full rounded-lg border border-border"
        />
      )}

      <p className="mt-8 leading-relaxed text-muted">{project.description}</p>

      <div className="mt-10 space-y-10">
        {project.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-3 font-mono text-sm uppercase tracking-widest text-muted">
              {section.heading}
            </h2>
            {section.body && (
              <p className="text-sm leading-relaxed text-muted">
                {section.body}
              </p>
            )}
            {section.items && (
              <ul className="space-y-1 text-sm leading-relaxed text-muted">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-accent">
                      –
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.pre && (
              <pre className="overflow-x-auto rounded-md bg-surface p-4 font-mono text-xs ring-1 ring-border">
                {section.pre}
              </pre>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}

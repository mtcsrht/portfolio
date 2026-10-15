import Link from "next/link";

const socials = [
  { href: "https://github.com/mtcsrht", label: "github" },
  {
    href: "https://www.linkedin.com/in/máté-cserháti-7a654a295/",
    label: "linkedin",
  },
  { href: "https://leetcode.com/u/mtcsrht/", label: "leetcode" },
  { href: "mailto:mate.cserhati03@gmail.com", label: "email" },
];

const now = [
  { label: "work", value: "Software Engineering Intern @ Oracle" },
  { label: "study", value: "CS BSc, AI specialization @ Óbuda University" },
  { label: "thesis", value: "Skin lesion segmentation with deep learning" },
];

export default function Home() {
  return (
    <section className="fade-up flex min-h-[60vh] flex-col justify-center py-16">
      <p className="font-mono text-sm text-muted">hi, I&#39;m</p>
      <h1 className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
        Máté Cserháti
      </h1>
      <h2 className="mt-3 text-lg text-muted">
        Software Engineer · AI / Machine Learning Student
      </h2>

      <p className="mt-6 max-w-xl leading-relaxed">
        I build backend services and dabble in computer vision. Interested in
        perception and safety-critical AI systems. Based in Budapest.
      </p>

      <dl className="mt-8 grid gap-2 font-mono text-sm">
        {now.map(({ label, value }) => (
          <div key={label} className="flex gap-3">
            <dt className="w-14 shrink-0 text-muted">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono">
        {socials.map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3 font-mono text-sm">
        <Link
          href="/projects"
          className="rounded-md bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-85"
        >
          see projects →
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border px-4 py-2 transition-colors hover:border-foreground"
        >
          download CV
        </a>
      </div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Mate Cserhati",
  description: "About Máté Cserháti: experience, education and skills",
};

const experience = [
  {
    role: "Software Engineering Intern",
    org: "Oracle",
    period: "Dec 2025 – present",
    points: [
      "Developing and testing backend services in Java for production-grade features",
      "Writing unit and integration tests to keep the code reliable",
      "Building Docker images and deploying through CI/CD pipelines with canary releases",
      "Writing canary end-to-end and API integration tests in TypeScript",
    ],
  },
  {
    role: "Intern",
    org: "Prysmian",
    period: "May 2025 – Nov 2025",
    points: [
      "Built Python analytics on Excel data to optimize transport distribution among partners",
      "Generated reports from SAP data giving a clear overview of transportation performance",
      "Maintained SAP data for accurate transportation operations",
    ],
  },
];

const education = [
  {
    role: "BSc in Computer Science, AI specialization",
    org: "Óbuda University – John von Neumann Faculty of Informatics",
    period: "Sep 2024 – Feb 2028",
    points: [
      "Machine learning, deep learning and computer vision",
      "Thesis: deep learning–based segmentation of skin lesions in dermoscopic images",
    ],
  },
  {
    role: "Software Engineer and Tester certificate",
    org: "Szent-Györgyi Albert Technical School",
    period: "Sep 2018 – May 2024",
    points: [],
  },
];

const skills = [
  {
    group: "AI / ML",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "Image Segmentation"],
  },
  { group: "Languages", items: ["Python", "Java", "C#", "TypeScript", "Go"] },
  { group: "Web", items: ["Spring Boot", "Next.js", "React", "Tailwind CSS"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { group: "Tools", items: ["Git", "Docker", "Kubernetes", "Linux", "CI/CD"] },
];

type Entry = (typeof experience)[number];

function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <ol className="space-y-8 border-l border-border pl-6">
      {entries.map((e) => (
        <li key={e.org + e.role} className="relative">
          <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="font-medium">
              {e.role} <span className="text-muted">· {e.org}</span>
            </h3>
            <p className="shrink-0 font-mono text-sm text-muted">{e.period}</p>
          </div>
          {e.points.length > 0 && (
            <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
              {e.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span aria-hidden className="text-accent">–</span>
                  {p}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-muted">
      {children}
    </h2>
  );
}

export default function About() {
  return (
    <div className="fade-up space-y-16 py-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="mt-4 leading-relaxed">
          I&#39;m a Computer Science BSc student at Óbuda University specializing
          in Artificial Intelligence, graduating in 2028. My thesis is about
          segmenting skin lesions in dermoscopic images with deep learning, and
          I work as a software engineering intern at Oracle with Java, Docker
          and CI/CD in an agile team. I&#39;m interested in perception and
          safety-critical AI systems, and in my free time I build small
          projects in Go, Rust and TypeScript.
        </p>
      </section>

      <section>
        <SectionTitle>Experience</SectionTitle>
        <Timeline entries={experience} />
      </section>

      <section>
        <SectionTitle>Education</SectionTitle>
        <Timeline entries={education} />
      </section>

      <section>
        <SectionTitle>Skills</SectionTitle>
        <dl className="space-y-3">
          {skills.map(({ group, items }) => (
            <div key={group} className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              <dt className="w-24 shrink-0 font-mono text-sm text-muted sm:pt-1">
                {group}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-sm"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <SectionTitle>Extracurricular</SectionTitle>
        <p className="text-sm text-muted">
          7th place in a Unity game development competition (team)
        </p>
      </section>
    </div>
  );
}

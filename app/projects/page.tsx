import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Mate Cserhati",
  description: "My portfolio projects showcase",
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Skin Lesion Segmentation",
    description:
      "My BSc thesis: deep learning models that segment skin lesions in dermoscopic images to support early detection of skin cancer. Covers data preprocessing, model training and evaluation with segmentation metrics.",
    stack: ["Python", "Deep Learning", "Computer Vision"],
    links: [],
  },
  {
    title: "Cosmetic Service Booking",
    description:
      "A booking backend for a cosmetics salon. Customers pick a free time and request an appointment without an account, then view, add to their calendar or cancel it through a secret link. The salon accepts or rejects requests, books walk-in customers and closes days, with admin endpoints secured by short-lived JWT access tokens. A Postgres exclusion constraint makes double bookings impossible even under concurrent requests, and emails go through a transactional outbox with retries, so an outage only delays them. Health-related notes need explicit consent and personal data is cleaned up automatically, in line with GDPR.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "OpenTelemetry", "Docker"],
    links: [
      {
        label: "repository",
        href: "https://github.com/mtcsrht/cosmetic-service-booking",
      },
    ],
  },
  {
    title: "Forza Horizon 6 Telemetry",
    description:
      "A real-time telemetry dashboard for Forza Horizon and Forza Motorsport. A Go backend listens for the game's \"Data Out\" UDP packets, parses the binary payload and broadcasts it over WebSocket to every connected browser. The React frontend shows a live RPM gauge with redline, gear, throttle and brake inputs, power and torque, along with charts of the last 20 seconds. Finished sessions are saved and can be reviewed later or downloaded as JSON.",
    stack: ["Go", "React", "Recharts", "WebSocket"],
    links: [
      {
        label: "repository",
        href: "https://github.com/mtcsrht/forza-horizon-6-telemetry",
      },
    ],
  },
  {
    title: "Go Docker",
    description:
      "A container management service written in Go on top of the Docker Engine API. Its REST API creates, lists, starts, stops and removes containers, pulling images and provisioning volumes automatically. Ready-made templates spin up game servers such as Minecraft in small, medium or large sizes. Container logs, an interactive shell and the server console are streamed to the browser over WebSocket.",
    stack: ["Go", "Docker Engine API", "WebSocket"],
    links: [{ label: "repository", href: "https://github.com/mtcsrht/go-docker" }],
  },
  {
    title: "HTTP Server",
    description:
      "An HTTP server built from scratch in Rust using only the standard library, with no external crates. It accepts raw TCP connections, parses the request line, headers and body into structured requests, and builds responses with status lines and headers. A learning project for understanding how HTTP works under the hood.",
    stack: ["Rust", "std::net"],
    links: [{ label: "repository", href: "https://github.com/mtcsrht/http-server" }],
  },
  {
    title: "AssetPay",
    description:
      "A Counter-Strike trading platform built in a 2-person team. I owned the frontend and API integration end-to-end based on client requirements, managing tasks in Trello following Agile.",
    stack: ["Next.js", "Tailwind CSS"],
    links: [],
  },
  {
    title: "URL Shortener",
    description:
      "A TinyURL-like application that mimics how URL shortener services work, with separate frontend and backend repositories and efficient link storage and retrieval.",
    stack: ["Next.js", "Express.js", "MongoDB"],
    links: [
      { label: "frontend", href: "https://github.com/mtcsrht/urlshortener-frontend" },
      { label: "backend", href: "https://github.com/mtcsrht/UrlShortenerAPI" },
    ],
  },
];

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
            key={p.title}
            className="rounded-lg border border-border p-5 transition-colors hover:border-muted hover:bg-surface"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-medium">{p.title}</h2>
              {p.links.length > 0 && (
                <div className="flex gap-4 font-mono text-sm">
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
              {p.description}
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
          </li>
        ))}
      </ul>
    </div>
  );
}

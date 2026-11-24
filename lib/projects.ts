export type ProjectLink = { label: string; href: string };

export type ProjectSection = {
  heading: string;
  body?: string;
  items?: string[];
  pre?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  sections: ProjectSection[];
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "skin-lesion-segmentation",
    title: "Skin Lesion Segmentation",
    summary:
      "BSc thesis: deep learning models that segment skin lesions in dermoscopic images to support early detection of skin cancer.",
    description:
      "My BSc thesis: deep learning models that segment skin lesions in dermoscopic images to support early detection of skin cancer. Covers data preprocessing, model training and evaluation with segmentation metrics.",
    stack: ["Python", "Deep Learning", "Computer Vision"],
    links: [],
    sections: [
      {
        heading: "What it covers",
        items: [
          "Data preprocessing for dermoscopic image datasets",
          "Training deep learning segmentation models",
          "Evaluation with segmentation metrics",
        ],
      },
      {
        heading: "Status",
        body: "In progress as my BSc thesis at Óbuda University, expected to finish in February 2028.",
      },
    ],
  },
  {
    slug: "cosmetic-service-booking",
    title: "Cosmetic Service Booking",
    summary:
      "A booking backend for a cosmetics salon: guest appointments with secret links, salon-side scheduling and GDPR-conscious data handling.",
    description:
      "A booking backend for a cosmetics salon. Customers pick a free time and request an appointment without an account, then view, add to their calendar or cancel it through a secret link. The salon accepts or rejects requests, books walk-in customers and closes days, with admin endpoints secured by short-lived JWT access tokens. A Postgres exclusion constraint makes double bookings impossible even under concurrent requests, and emails go through a transactional outbox with retries, so an outage only delays them. Health-related notes need explicit consent and personal data is cleaned up automatically, in line with GDPR.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "OpenTelemetry", "Docker"],
    links: [],
    sections: [
      {
        heading: "Booking flow",
        items: [
          "Customers pick a free time slot and request an appointment without an account",
          "A secret link lets them view the booking, add it to their calendar or cancel it",
          "The salon accepts or rejects requests, books walk-in customers and closes days",
          "Admin endpoints are secured with short-lived JWT access tokens",
        ],
      },
      {
        heading: "Reliability",
        items: [
          "A Postgres exclusion constraint makes double bookings impossible, even under concurrent requests",
          "Emails go through a transactional outbox with retries, so an outage only delays them",
        ],
      },
      {
        heading: "Privacy",
        items: [
          "Health-related notes require explicit consent",
          "Personal data is cleaned up automatically, in line with GDPR",
        ],
      },
    ],
  },
  {
    slug: "forza-horizon-6-telemetry",
    title: "Forza Horizon 6 Telemetry",
    summary:
      "A real-time telemetry dashboard that turns Forza's UDP \"Data Out\" packets into live gauges and charts in the browser.",
    description:
      "A real-time telemetry dashboard for Forza Horizon and Forza Motorsport. A Go backend listens for the game's \"Data Out\" UDP packets, parses the binary payload and broadcasts it over WebSocket to every connected browser. The React frontend shows a live RPM gauge with redline, gear, throttle and brake inputs, power and torque, along with charts of the last 20 seconds. Finished sessions are saved and can be reviewed later or downloaded as JSON.",
    stack: ["Go", "React", "Recharts", "WebSocket"],
    links: [
      {
        label: "repository",
        href: "https://github.com/mtcsrht/forza-horizon-6-telemetry",
      },
    ],
    sections: [
      {
        heading: "Pipeline",
        pre: "Forza game  --UDP:6655-->  Go backend  --WS:8080-->  React frontend",
      },
      {
        heading: "Live dashboard",
        items: [
          "RPM arc gauge with redline indicator",
          "Gear display (N, R, 1–9)",
          "Accel and brake bars as percentages",
          "Power (kW) and torque (Nm) readouts",
        ],
      },
      {
        heading: "Charts and session history",
        items: [
          "RPM history with gear-change markers, accel/brake overlay and a gear step chart, covering the last 20 seconds",
          "Finished sessions are saved to localStorage (up to 10) and can be reviewed later",
          "Any session can be downloaded as JSON",
        ],
      },
      {
        heading: "What I learned",
        body: "The telemetry struct's field order must exactly match Forza's binary layout — reordering or adding fields breaks parsing with no error. The backend broadcasts to every connected client, so multiple browser tabs can watch the same session.",
      },
    ],
  },
  {
    slug: "go-docker",
    title: "Go Docker",
    summary:
      "A container management service in Go on top of the Docker Engine API, with game-server templates and live streaming to the browser.",
    description:
      "A container management service written in Go on top of the Docker Engine API. Its REST API creates, lists, starts, stops and removes containers, pulling images and provisioning volumes automatically. Ready-made templates spin up game servers such as Minecraft in small, medium or large sizes. Container logs, an interactive shell and the server console are streamed to the browser over WebSocket.",
    stack: ["Go", "Docker Engine API", "WebSocket"],
    links: [
      { label: "repository", href: "https://github.com/mtcsrht/go-docker" },
    ],
    sections: [
      {
        heading: "Container API",
        items: [
          "REST endpoints to create, list, start, stop and remove containers",
          "Images are pulled and volumes provisioned automatically",
        ],
      },
      {
        heading: "Templates",
        body: "Ready-made templates spin up game servers such as Minecraft in small, medium or large sizes.",
      },
      {
        heading: "Streaming",
        body: "Container logs, an interactive shell and the server console are streamed to the browser over WebSocket.",
      },
    ],
  },
  {
    slug: "http-server",
    title: "HTTP Server",
    summary:
      "An HTTP server built from scratch in Rust on raw TCP sockets, using only the standard library.",
    description:
      "An HTTP server built from scratch in Rust using only the standard library, with no external crates. It accepts raw TCP connections, parses the request line, headers and body into structured requests, and builds responses with status lines and headers. A learning project for understanding how HTTP works under the hood.",
    stack: ["Rust", "std::net"],
    links: [
      { label: "repository", href: "https://github.com/mtcsrht/http-server" },
    ],
    sections: [
      {
        heading: "What it does",
        items: [
          "Accepts raw TCP connections",
          "Parses the request line, headers and body into structured requests",
          "Builds responses with status lines and headers",
          "No external crates — std::net only",
        ],
      },
      {
        heading: "Why I built it",
        body: "A learning project for understanding how HTTP works under the hood.",
      },
    ],
  },
  {
    slug: "assetpay",
    title: "AssetPay",
    summary:
      "A Counter-Strike trading platform built in a 2-person team — I owned the frontend and API integration end-to-end.",
    description:
      "A Counter-Strike trading platform built in a 2-person team. I owned the frontend and API integration end-to-end based on client requirements, managing tasks in Trello following Agile.",
    stack: ["Next.js", "Tailwind CSS"],
    links: [],
    sections: [
      {
        heading: "My role",
        items: [
          "Owned the frontend and API integration end-to-end based on client requirements",
          "Managed tasks in Trello following Agile in a 2-person team",
        ],
      },
    ],
  },
  {
    slug: "url-shortener",
    title: "URL Shortener",
    summary:
      "A TinyURL-style service with a Next.js frontend and an Express.js + MongoDB backend.",
    description:
      "A TinyURL-like application that mimics how URL shortener services work, with separate frontend and backend repositories and efficient link storage and retrieval.",
    stack: ["Next.js", "Express.js", "MongoDB"],
    links: [
      {
        label: "frontend",
        href: "https://github.com/mtcsrht/urlshortener-frontend",
      },
      {
        label: "backend",
        href: "https://github.com/mtcsrht/UrlShortenerAPI",
      },
    ],
    sections: [
      {
        heading: "Frontend",
        items: [
          "Create short URLs from long ones",
          "Copy shortened URLs to the clipboard",
          "Automatic redirection from short URL to original destination",
          "Error handling for invalid or expired links",
        ],
      },
      {
        heading: "API",
        items: [
          "POST /url — creates a short code for a given URL",
          "GET /url/{short_code} — returns the original URL",
          "DELETE /url/{short_code} — work in progress",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

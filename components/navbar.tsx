"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/resume.pdf", label: "resume", external: true },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono font-bold tracking-tight">
          mc<span className="text-accent">.</span>
        </Link>
        <ul className="flex gap-5 font-mono text-sm">
          {links.map(({ href, label, external }) => {
            const active = !external && pathname === href;
            return (
              <li key={href}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {label}
                    <span aria-hidden> ↗</span>
                  </a>
                ) : (
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors hover:text-foreground ${
                      active
                        ? "text-foreground underline decoration-accent decoration-2 underline-offset-8"
                        : "text-muted"
                    }`}
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

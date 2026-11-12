import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

const footerNav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Projects", href: "#work" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border pt-12 pb-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left: Branding & Role */}
        <div className="min-w-0">
          <a
            href="#top"
            className="font-display text-2xl tracking-tight text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:text-primary"
            aria-label="Back to top"
          >
            {profile.name}
          </a>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {profile.role}
          </p>
        </div>

        {/* Center: Navigation Links */}
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-muted-foreground">
            {footerNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Social icons & back-to-top */}
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-card/40 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-card/40 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#top"
            aria-label="Back to top of page"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-card/40 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Bottom bar: Copyright & Tech credits */}
      <div className="mt-8 flex flex-col justify-between gap-3 border-t border-border/50 pt-6 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <span>Built with React &amp; Tailwind CSS</span>
          <span aria-hidden="true">·</span>
          <span>Mumbai</span>
        </p>
      </div>
    </footer>
  );
}


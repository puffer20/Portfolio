import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-h" className="scroll-mt-8 relative">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card/50 via-card/25 to-background/70 p-7 sm:p-10 lg:p-14 shadow-lg backdrop-blur-sm">
          {/* Subtle ambient decorative glows */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full blur-[110px] opacity-25"
            style={{
              background: "radial-gradient(circle, oklch(0.9 0.21 125 / 35%), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-20 -bottom-20 -z-10 h-72 w-72 rounded-full blur-[100px] opacity-20"
            style={{
              background: "radial-gradient(circle, oklch(0.7 0.12 200 / 30%), transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Spacious horizontal layout */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Left: Heading & Intro */}
            <div className="max-w-2xl min-w-0">
              <p className="eyebrow flex items-center gap-2">
                <span className="anim-blink h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                GET IN TOUCH
              </p>
              <h2
                id="contact-h"
                className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground"
              >
                Let's Build Something Together.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                I'm always open to discussing new opportunities, interesting projects, collaborations, and ideas. Feel free to reach out!
              </p>
            </div>

            {/* Right: CTA Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:brightness-105 hover:shadow-[0_0_24px_oklch(0.9_0.21_125_/_0.3)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Say Hello via email to ${profile.email}`}
              >
                <Mail className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
                <span>Say Hello</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-md border border-border/80 bg-background/50 px-6 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Connect on LinkedIn (opens in new tab)"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-border/60" />

          {/* Individual interactive contact elements */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 rounded-lg border border-border/60 bg-background/40 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-card text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="truncate text-xs sm:text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  {profile.email}
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-border/60 bg-background/40 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-card text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                <p className="truncate text-xs sm:text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  Saish Chipkar
                </p>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" aria-hidden="true" />
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-border/60 bg-background/40 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-card text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
                <Github className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">GitHub</p>
                <p className="truncate text-xs sm:text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  chipkarsaish
                </p>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" aria-hidden="true" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-background/40 p-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-card text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Location</p>
                <p className="truncate text-xs sm:text-sm font-medium text-foreground">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


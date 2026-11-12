import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Globe } from "lucide-react";
import { profile, skillGroups, certifications } from "@/data/portfolio";
import { CertificationCard } from "@/components/portfolio/CertificationCard";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { Explorer } from "@/components/portfolio/Explorer";
import { Reveal } from "@/components/portfolio/Reveal";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saish Chipkar — Software Developer · Data Science & ML" },
      { name: "description", content: "Saish Chipkar builds practical software and intelligent systems — data-driven apps, ML pipelines and cloud-backed experiences." },
      { property: "og:title", content: "Saish Chipkar — Software Developer · Data Science & ML" },
      { property: "og:description", content: "Practical software, ML pipelines and data-driven applications by Saish Chipkar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const socials = [
  { label: "GitHub", tooltip: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", tooltip: "LinkedIn", href: profile.linkedin, icon: Linkedin }, // TODO: set real URL in data/portfolio.ts
  { label: "Projects site", tooltip: "Website", href: profile.site, icon: Globe },
];
const nav = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

function Index() {
  return (
    <div id="top" className="mx-auto max-w-[1280px] overflow-x-hidden px-5 sm:px-8 lg:px-12">
      <nav
        aria-label="Sections"
        className="animate-hero-fade flex items-center justify-between gap-4 border-b border-border py-4"
        style={{ animationDelay: "50ms" }}
      >
        <p className="eyebrow flex min-w-0 items-center gap-2">
          <span className="anim-blink h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{" "}
          <span className="truncate">Available for opportunities</span>
        </p>
        <ul className="flex shrink-0 gap-4 text-sm sm:gap-6">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <header id="about" className="scroll-mt-8 relative py-12 lg:py-16">
        {/* Subtle editorial olive/muted green background glow and grain texture */}
        <div
          className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-6 -z-10 overflow-hidden sm:-inset-x-10"
          aria-hidden="true"
        >
          {/* Subtle dark olive & muted green radial gradients positioned softly behind main hero content */}
          <div
            className="absolute left-[22%] top-[42%] h-[380px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-35"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.27 0.05 130 / 22%), oklch(0.20 0.03 125 / 8%) 60%, transparent 80%)",
            }}
          />
          <div
            className="absolute right-[18%] bottom-[22%] h-[320px] w-[460px] translate-x-1/4 rounded-full blur-[90px] opacity-25"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.25 0.04 135 / 18%), oklch(0.18 0.02 120 / 6%) 55%, transparent 80%)",
            }}
          />
          {/* Extremely subtle noise/grain texture */}
          <div className="hero-grain absolute inset-0 opacity-[0.035] mix-blend-screen" />
        </div>

        {/* Existing horizontal hero composition */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:items-end md:gap-12">
          <div className="min-w-0">
            <h1
              className="animate-hero-up font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.94] tracking-tight text-foreground sm:text-7xl lg:text-8xl break-words sm:break-normal"
              style={{ animationDelay: "150ms" }}
            >
              Saish <em className="font-normal italic text-muted-foreground/90">Chipkar</em>
            </h1>
            <p
              className="animate-hero-up mt-4 font-mono text-xs uppercase tracking-wider text-primary sm:mt-5"
              style={{ animationDelay: "280ms" }}
            >
              {profile.role}
            </p>
          </div>

          <div className="min-w-0">
            <div className="animate-hero-up space-y-3" style={{ animationDelay: "380ms" }}>
              <p className="max-w-xl text-base leading-relaxed text-foreground/95 sm:text-lg">
                I build practical software and intelligent systems — from data-driven applications and ML pipelines to reliable cloud-backed experiences.
              </p>
              <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                I like taking messy, complex problems and turning them into products people can actually use.
              </p>
            </div>

            <ul
              className="animate-hero-up mt-5 flex flex-wrap gap-2 text-xs"
              style={{ animationDelay: "500ms" }}
            >
              <li className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-foreground/90 transition-colors hover:border-foreground/20">
                <MapPin className="h-3 w-3 text-muted-foreground" aria-hidden /> {profile.location}
              </li>
              <li className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-foreground/90 transition-colors hover:border-foreground/20">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="anim-beat absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Open to Opportunities
              </li>
            </ul>

            <div
              className="animate-hero-up mt-6 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "620ms" }}
            >
              {/* TODO: add your real resume PDF at public/resume.pdf — none is included yet. */}
              <a
                href={profile.resume}
                download
                className="group inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:brightness-105 hover:shadow-[0_0_20px_oklch(0.9_0.21_125_/_0.25)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden
                />
                <span>Download Resume</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-10 items-center gap-2 rounded-md border border-border/80 bg-background/40 px-4 text-sm text-foreground transition-all duration-200 hover:border-foreground/35 hover:bg-white/[0.04] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden />
                <span>Email me</span>
              </a>

              <TooltipProvider delayDuration={120}>
                <ul className="flex items-center gap-2">
                  {socials.map(({ label, tooltip, href, icon: Icon }) => (
                    <li key={label}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${label} (opens in new tab)`}
                            className="glass flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-[0_0_14px_oklch(0.9_0.21_125_/_0.18)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          sideOffset={6}
                          className="border border-border/80 bg-card px-2.5 py-1 font-mono text-[11px] text-foreground shadow-md"
                        >
                          {tooltip}
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </header>

      {/* Dividing line with centered Scroll to Explore button */}
      <div className="relative my-10 border-t border-border sm:my-14">
        <div
          className="animate-hero-fade absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ animationDelay: "700ms" }}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full border border-primary/35 bg-card/95 px-5 py-2 font-mono text-xs tracking-wider text-foreground shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_20px_oklch(0.9_0.21_125_/_0.18)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_6px_28px_rgba(0,0,0,0.7),0_0_28px_oklch(0.9_0.21_125_/_0.35)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Scroll to explore work section"
          >
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="anim-beat absolute inline-flex h-full w-full rounded-full bg-primary opacity-80" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-foreground transition-colors group-hover:text-primary sm:text-xs">
              Scroll to explore
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowDown
                className="h-3 w-3 anim-scroll-float transition-transform duration-200 group-hover:translate-y-0.5"
                aria-hidden
              />
            </span>
          </a>
        </div>
      </div>

      <main className="space-y-20 pb-12">
        <Explorer />

        <section id="stack" aria-labelledby="stack-h" className="scroll-mt-8">
          <Reveal>
            <p className="eyebrow">Toolkit</p>
            <h2 id="stack-h" className="mt-1 font-display text-4xl">What I work with</h2>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {skillGroups.map((g) => (
                <div key={g.label} className="grid gap-2 py-4 sm:grid-cols-[220px_1fr]">
                  <dt className="eyebrow pt-1">{g.label}</dt>
                  <dd className="flex flex-wrap gap-x-5 gap-y-1 text-lg">{g.items.map((s) => <span key={s}>{s}</span>)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* ── Certifications ─────────────────────────────────────── */}
        {certifications.length > 0 && (
          <section id="certifications" aria-labelledby="certs-h" className="scroll-mt-8">
            <Reveal>
              <p className="eyebrow">Credentials</p>
              <h2 id="certs-h" className="mt-1 font-display text-4xl">Certifications</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </div>
            </Reveal>
          </section>
        )}

        {/* ── Contact Section ───────────────────────────────────── */}
        <ContactSection />

        {/* ── Footer ────────────────────────────────────────────── */}
        <Footer />
      </main>
    </div>
  );
}

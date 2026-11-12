import { ExternalLink, Calendar, Hash, Award } from "lucide-react";
import type { Certification } from "@/data/portfolio";
import { IssuerLogo, knownIssuers } from "@/components/portfolio/IssuerLogo";

function LogoBadge({ cert }: { cert: Certification }) {
  const hasKnownSvg = knownIssuers.has(cert.issuer.toLowerCase());
  return (
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/60">
      {hasKnownSvg ? (
        <IssuerLogo issuer={cert.issuer} className="h-8 w-8" />
      ) : cert.logo ? (
        <img src={cert.logo} alt={`${cert.issuer} logo`} className="h-8 w-8 object-contain" loading="lazy" />
      ) : (
        <span className="text-muted-foreground" aria-hidden>
          <Award className="h-5 w-5" />
        </span>
      )}
    </div>
  );
}

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <article
      className={[
        "group relative flex flex-col rounded-xl border border-border bg-card p-6",
        "transition-all duration-250 ease-out",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_32px_-8px_oklch(var(--primary)/0.18)]",
        "focus-within:border-primary/40",
        "@media(prefers-reduced-motion:reduce):hover:translate-y-0 @media(prefers-reduced-motion:reduce):transition-none",
      ].join(" ")}
    >
      {/* Category eyebrow */}
      <p className="eyebrow mb-4">{cert.category}</p>

      {/* Logo / badge */}
      <LogoBadge cert={cert} />

      {/* Title */}
      <h3 className="font-display text-lg leading-snug">{cert.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>

      {/* Metadata */}
      <dl className="mt-4 flex flex-col gap-1.5">
        {cert.issueDate && (
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
            <Calendar className="h-3 w-3 shrink-0" aria-hidden />
            <dt className="sr-only">Issued</dt>
            <dd>Issued: {cert.issueDate}</dd>
          </div>
        )}
        {cert.expiryDate && (
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
            <Calendar className="h-3 w-3 shrink-0" aria-hidden />
            <dt className="sr-only">Expires</dt>
            <dd>Expires: {cert.expiryDate}</dd>
          </div>
        )}
        {cert.credentialId && (
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
            <Hash className="h-3 w-3 shrink-0" aria-hidden />
            <dt className="sr-only">Credential ID</dt>
            <dd className="truncate">{cert.credentialId}</dd>
          </div>
        )}
      </dl>

      {/* Skills */}
      {cert.skills.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills">
          {cert.skills.map((s) => (
            <li
              key={s}
              className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {s}
            </li>
          ))}
        </ul>
      )}

      {/* Spacer pushes button to bottom */}
      <div className="flex-1" />

      {/* Action */}
      {cert.credentialUrl ? (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "mt-5 inline-flex items-center gap-1.5 self-start",
            "font-mono text-xs text-primary",
            "transition-colors duration-200 hover:text-primary/80",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          ].join(" ")}
          aria-label={`View credential for ${cert.title} (opens in new tab)`}
        >
          View Credential
          <ExternalLink
            className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </a>
      ) : (
        <span className="mt-5 inline-flex items-center gap-1.5 self-start font-mono text-xs text-muted-foreground/50 select-none">
          Credential pending
        </span>
      )}
    </article>
  );
}


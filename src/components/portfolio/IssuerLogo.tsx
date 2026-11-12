/** Inline SVG brand logos for certification issuers. Add more as needed. */

function AwsLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 48" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      {/* "aws" wordmark */}
      <text
        x="40" y="30"
        textAnchor="middle"
        fontSize="22"
        fontWeight="900"
        fontFamily="'Amazon Ember', Arial Black, sans-serif"
        fill="#FF9900"
        letterSpacing="-1"
      >
        aws
      </text>
      {/* Smile underline with arrow */}
      <path
        d="M18 36 Q40 46 62 36"
        stroke="#FF9900"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="62,32 62,40 68,36" fill="#FF9900" />
    </svg>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.8 2.5 30.2 0 24 0 14.6 0 6.6 5.4 2.6 13.3l7.8 6.1C12.4 13.2 17.7 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17z"/>
      <path fill="#FBBC05" d="M10.4 28.6A14.6 14.6 0 0 1 9.5 24c0-1.6.3-3.1.9-4.6L2.6 13.3A23.9 23.9 0 0 0 0 24c0 3.8.9 7.4 2.6 10.6l7.8-6z"/>
      <path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.5-5.8c-2 1.4-4.6 2.2-7.7 2.2-6.3 0-11.6-3.7-13.6-9.3l-7.8 6C6.6 42.6 14.6 48 24 48z"/>
    </svg>
  );
}

function CourseraLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <circle cx="24" cy="24" r="24" fill="#0056D2"/>
      <text x="24" y="31" textAnchor="middle" fontSize="20" fontWeight="800" fontFamily="Arial,sans-serif" fill="#fff">C</text>
    </svg>
  );
}

type LogoFn = (props: { className?: string }) => React.ReactElement;

const LOGO_MAP: Record<string, LogoFn> = {
  "amazon web services": AwsLogo,
  "aws": AwsLogo,
  "google": GoogleLogo,
  "google (via coursera)": GoogleLogo,
  "coursera": CourseraLogo,
};

/** Set of lowercase issuer names that have a built-in SVG logo. */
export const knownIssuers = new Set(Object.keys(LOGO_MAP));

export function IssuerLogo({ issuer, className }: { issuer: string; className?: string }): React.ReactElement | null {
  const Logo = LOGO_MAP[issuer.toLowerCase()];
  return Logo ? <Logo className={className} /> : null;
}

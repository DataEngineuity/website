export function CapabilityIcon({ name }) {
  const common = { viewBox: "0 0 48 48", fill: "none" };

  switch (name) {
    case "dataEngineering":
      return <svg {...common}><rect x="7" y="9" width="14" height="10" rx="2"/><rect x="27" y="9" width="14" height="10" rx="2"/><rect x="17" y="29" width="14" height="10" rx="2"/><path d="M14 19v5h20v-5"/><path d="M24 24v5"/></svg>;
    case "dataAutomation":
      return <svg {...common}><path d="M9 15h10"/><path d="M29 15h10"/><path d="M9 24h30"/><path d="M9 33h10"/><path d="M29 33h10"/><circle cx="24" cy="15" r="5"/><circle cx="24" cy="33" r="5"/><path d="M24 20v8"/></svg>;
    case "processAutomation":
      return <svg {...common}><rect x="8" y="10" width="12" height="10" rx="2"/><rect x="28" y="28" width="12" height="10" rx="2"/><path d="M20 15h8c5 0 8 3 8 8v5"/><path d="M34 21l4 4-4 4"/><path d="M28 33H20c-5 0-8-3-8-8v-5"/><path d="M14 27l-4-4 4-4"/></svg>;
    case "analytics":
      return <svg {...common}><path d="M10 37V23"/><path d="M20 37V17"/><path d="M30 37V26"/><path d="M38 37V12"/><path d="M9 37h30"/><path d="M14 13l7 6 8-9 9 5"/></svg>;
    case "integration":
      return <svg {...common}><circle cx="12" cy="24" r="4"/><circle cx="24" cy="12" r="4"/><circle cx="24" cy="36" r="4"/><circle cx="36" cy="24" r="4"/><path d="M15.5 21.5l5-5"/><path d="M27.5 14.5l5 5"/><path d="M32.5 27.5l-5 5"/><path d="M20.5 33.5l-5-5"/></svg>;
    default:
      return <svg {...common}><rect x="8" y="10" width="32" height="28" rx="4"/><path d="M8 18h32"/><path d="M19 24l-4 4 4 4"/><path d="M29 24l4 4-4 4"/></svg>;
  }
}

export function SocialIcon({ name }) {
  if (name === "x") {
    return <svg className="social-link__icon social-link__icon--x" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2H21l-6.56 7.496L22.154 22h-6.037l-4.728-6.186L5.97 22H3.21l7.017-8.017L2 2h6.191l4.274 5.649L18.244 2Zm-1.058 18h1.671L7.285 3.895H5.492L17.186 20Z"/></svg>;
  }
  if (name === "github") {
    return <svg className="social-link__icon social-link__icon--github" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.93c.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.36-3.88-1.36-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.05 0 0 .97-.31 3.19 1.18a10.98 10.98 0 0 1 5.8 0c2.22-1.49 3.19-1.18 3.19-1.18.62 1.58.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.42-5.27 5.7.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>;
  }
  return <svg className="social-link__icon social-link__icon--linkedin" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05C21 8.59 22 10.54 22 14.09V21h-4v-6.13c0-1.46-.03-3.34-2.03-3.34-2.04 0-2.35 1.59-2.35 3.23V21h-4V9Z"/></svg>;
}

export function GlobeIcon() {
  return <svg className="footer-origin__icon footer-origin__icon--global" viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="32" r="22"/><path d="M10 32h44"/><path d="M32 10c7 7 11 14 11 22s-4 15-11 22"/><path d="M32 10c-7 7-11 14-11 22s4 15 11 22"/></svg>;
}

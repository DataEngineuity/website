export default function BackToTop({ visible }) {
  return (
    <a className={`back-to-top${visible ? " is-visible" : ""}`} href="#top" aria-label="Back to the top of the page">
      <span className="back-to-top__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 19V5"/><path d="M6.5 10.5 12 5l5.5 5.5"/></svg>
      </span>
    </a>
  );
}

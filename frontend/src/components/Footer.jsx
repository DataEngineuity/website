import { GlobeIcon } from "./Icons";

export default function Footer({ currentYear }) {
  return (
    <footer className="site-footer">
      <span>© <span id="current-year">{currentYear}</span> Data Engineuity</span>
      <span className="footer-code">CLARITY FROM COMPLEXITY · <span className="year-code year-code--footer" tabIndex="0" aria-label="Established in 2025" title="2025"><span className="year-code__binary">11111101001</span><span className="year-code__year">2025</span></span></span>
      <span className="footer-origin">
        <span className="footer-origin__part"><span className="footer-origin__africa-icon" aria-hidden="true"/><span>African Origins</span></span>
        <span className="footer-origin__divider">·</span>
        <span className="footer-origin__part"><GlobeIcon/><span>Global Direction</span></span>
      </span>
    </footer>
  );
}

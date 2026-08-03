import { GlobeIcon } from "./Icons";

export default function Footer({ currentYear }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copyright">
          ©{" "}
          <span id="current-year">
            {currentYear}
          </span>{" "}
          Data Engineuity
        </p>

        <p className="footer-code">
          <span>Clarity from Complexity</span>

          <span className="footer-code__divider" aria-hidden="true">
            ·
          </span>

          <span
            className="year-code year-code--footer"
            tabIndex={0}
            aria-label="Established in 2025"
            title="Established in 2025"
          >
            <span className="year-code__binary" aria-hidden="true">
              11111101001
            </span>

            <span className="year-code__year">
              2025
            </span>
          </span>
        </p>

        <div className="footer-origin">
          <div className="footer-origin__part">
            <span
              className="footer-origin__icon footer-origin__africa-icon"
              aria-hidden="true"
            />

            <span>African Origins</span>
          </div>

          <span
            className="footer-origin__divider"
            aria-hidden="true"
          >
            ·
          </span>

          <div className="footer-origin__part">
            <span
              className="footer-origin__icon"
              aria-hidden="true"
            >
              <GlobeIcon />
            </span>

            <span>Global Direction</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
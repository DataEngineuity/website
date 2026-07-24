import { socialLinks } from "../data/siteContent";
import { SocialIcon } from "./Icons";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__copy reveal">
        <p className="section-label">Start a conversation</p>
        <h2>Something complex?</h2>
        <p>We are building quietly. The right conversations are always welcome.</p>
      </div>
      <div className="contact__details reveal">
        <span className="contact__hint">General enquiries</span>
        <span className="contact__email">dataengineuity@gmail.com</span>
        <div className="social-links" aria-label="Data Engineuity social profiles">
          {socialLinks.map((social) => (
            <a className="social-link" href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Data Engineuity on ${social.platform}`} key={social.platform}>
              <span className="social-link__platform"><SocialIcon name={social.icon}/><span>{social.platform}</span></span>
              <small>{social.handle}</small>
              <span className="social-link__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

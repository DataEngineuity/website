import { capabilities } from "../data/siteContent";
import { CapabilityIcon } from "./Icons";

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilities__intro reveal">
        <p className="section-label">What we build</p>
        <h2>Systems that work.<br/>Processes that move.</h2>
        <p>We design dependable data foundations, intelligent digital solutions and automated processes that reduce repetitive effort while improving consistency, visibility and control.</p>
      </div>
      <div className="capabilities__grid reveal">
        {capabilities.map((capability) => (
          <article className="capability" key={capability.number}>
            <div className="capability__top">
              <div className="capability__icon" aria-hidden="true"><CapabilityIcon name={capability.icon}/></div>
              <span className="capability__number">{capability.number}</span>
            </div>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </article>
        ))}
      </div>
      <div className="advisory-note reveal">
        <span className="advisory-note__signal" aria-hidden="true"/>
        <p>Advisory and implementation support are embedded across every capability, from early architecture and automation strategy to delivery and scale.</p>
      </div>
    </section>
  );
}

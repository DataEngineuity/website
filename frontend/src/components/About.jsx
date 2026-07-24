import { principles } from "../data/siteContent";

export default function About() {
  return (
    <section className="statement" id="about">
      <div className="statement__content reveal">
        <p className="section-label">Our direction</p>
        <h2>We make difficult things feel inevitable.</h2>
        <p>Data Engineuity exists at the point where structure meets imagination. We turn fragmented information, demanding systems and uncertain questions into clear, dependable ways forward.</p>
      </div>
      <div className="principles reveal" aria-label="Core principles">
        {principles.map((principle) => (
          <article key={principle.number}>
            <span>{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

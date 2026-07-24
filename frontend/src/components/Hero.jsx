export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__eyebrow reveal">
        <span className="status-dot" aria-hidden="true"/>
        <span>Established</span>
        <span className="year-code" tabIndex="0" aria-label="Established in 2025" title="2025">
          <span className="year-code__binary">11111101001</span>
          <span className="year-code__year">2025</span>
        </span>
      </div>
      <h1 className="hero__title reveal">
        Clarity<br/>
        <span className="hero__outline-line">from Complexit<span className="hero__letter-y">y</span>.</span>
      </h1>
      <div className="hero__lower">
        <p className="hero__intro reveal">Thoughtful data systems, intelligent foundations and precise solutions for problems that deserve more than the obvious answer.</p>
        <div className="hero__actions reveal">
          <a className="button button--primary" href="#capabilities">Explore our capabilities</a>
          <a className="button button--quiet" href="https://x.com/DataEngineuity" target="_blank" rel="noreferrer">Follow on X <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="signal" aria-hidden="true">
        <span className="signal__label"><span className="signal__brand">DE</span><span className="signal__divider">|</span><span>SYSTEMS IN MOTION</span></span>
        <div className="signal__line">{Array.from({ length: 9 }, (_, index) => <i key={index}/>)}</div>
      </div>
    </section>
  );
}

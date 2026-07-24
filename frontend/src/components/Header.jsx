import { navigation } from "../data/siteContent";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Data Engineuity home">
          <span className="brand-mark" aria-hidden="true"><span/><span/><span/></span>
          <span className="brand-name">DATA ENGINEUITY</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </div>
    </header>
  );
}

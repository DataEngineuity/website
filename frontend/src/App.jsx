import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Foundations from "./components/Foundations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12 },
      );

      revealItems.forEach((item, index) => {
        item.style.transitionDelay = `${Math.min(index * 65, 260)}ms`;
        observer.observe(item);
      });

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const updateBackToTop = () => {
      const hero = document.querySelector(".hero");
      if (!hero) return;
      setBackToTopVisible(hero.getBoundingClientRect().top < -40);
    };

    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    return () => window.removeEventListener("scroll", updateBackToTop);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="ambient" aria-hidden="true"><div className="ambient__grid"/><div className="ambient__glow ambient__glow--one"/><div className="ambient__glow ambient__glow--two"/><div className="ambient__noise"/></div>
      <Header/>
      <main id="main-content"><Hero/><About/><Capabilities/><Foundations/><Contact/></main>
      <Footer currentYear={new Date().getFullYear()}/>
      <BackToTop visible={backToTopVisible}/>
    </>
  );
}

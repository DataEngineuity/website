import { useEffect, useState } from "react";
import { navigationItems } from "../data/siteContent";

function Header() {
    const [activeSection, setActiveSection] = useState("top");

    useEffect(() => {
        const sectionIds = [
            "top",
            ...navigationItems.map((item) => item.sectionId),
        ];

        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (first, second) =>
                            second.intersectionRatio - first.intersectionRatio,
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0, 0.1, 0.25, 0.5, 0.75],
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleNavigation = (event, sectionId) => {
        event.preventDefault();

        const targetSection = document.getElementById(sectionId);

        if (!targetSection) {
            return;
        }

        setActiveSection(sectionId);

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        window.history.replaceState(null, "", `#${sectionId}`);
    };

    const handleHomeClick = (event) => {
        event.preventDefault();

        const topSection = document.getElementById("top");

        if (!topSection) {
            return;
        }

        setActiveSection("top");

        topSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        window.history.replaceState(null, "", window.location.pathname);
    };

    return (
        <header className="site-header">
            <div className="site-header__inner">
                <a
                    className="brand"
                    href="#top"
                    aria-label="Data Engineuity home"
                    onClick={handleHomeClick}
                >
                    <span className="brand-mark" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </span>

                    <span className="brand-name">DATA ENGINEUITY</span>
                </a>

                <nav className="site-nav" aria-label="Primary navigation">
                    {navigationItems.map(({ label, sectionId }) => {
                        const isActive = activeSection === sectionId;

                        return (
                            <a
                                key={sectionId}
                                href={`#${sectionId}`}
                                className={
                                    isActive
                                        ? "site-nav__link is-active"
                                        : "site-nav__link"
                                }
                                aria-current={
                                    isActive ? "location" : undefined
                                }
                                onClick={(event) =>
                                    handleNavigation(event, sectionId)
                                }
                            >
                                {label}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}

export default Header;
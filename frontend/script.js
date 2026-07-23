(() => {
  const currentYear = document.querySelector("#current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12
      }
    );

    revealItems.forEach((item, index) => {
      item.style.transitionDelay =
        `${Math.min(index * 65, 260)}ms`;

      revealObserver.observe(item);
    });
  }

  const backToTop = document.querySelector(".back-to-top");
  const hero = document.querySelector(".hero");

  if (backToTop && hero) {
    const updateBackToTop = () => {
      /*
       * Show the button as soon as part of the hero content
       * has moved out of the visible viewport.
       */
      const heroTop = hero.getBoundingClientRect().top;
      const contentHasMovedBehindHeader =
        heroTop < -40;

      backToTop.classList.toggle(
        "is-visible",
        contentHasMovedBehindHeader
      );
    };

    updateBackToTop();

    window.addEventListener(
      "scroll",
      updateBackToTop,
      { passive: true }
    );
  }
})();
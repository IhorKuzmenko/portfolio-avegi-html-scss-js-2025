(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");

  if (!mobileMenu || !openMenuBtn || !closeMenuBtn) {
    return;
  }

  const desktopMediaQuery = window.matchMedia("(min-width: 1440px)");
  const menuLinks = mobileMenu.querySelectorAll('a[href^="#"]');

  let previousFocus = null;

  const getFocusableElements = () =>
    [...mobileMenu.querySelectorAll("a[href], button:not([disabled])")].filter(
      (element) => element.getClientRects().length > 0,
    );

  const openMenu = () => {
    previousFocus = document.activeElement;

    mobileMenu.classList.add("is-open");
    openMenuBtn.setAttribute("aria-expanded", "true");

    document.body.style.overflow = "hidden";

    closeMenuBtn.focus();
  };

  const closeMenu = (restoreFocus = true) => {
    if (!mobileMenu.classList.contains("is-open")) {
      return;
    }

    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", "false");

    document.body.style.overflow = "";

    if (restoreFocus && previousFocus instanceof HTMLElement) {
      previousFocus.focus();
    }

    previousFocus = null;
  };

  openMenuBtn.addEventListener("click", openMenu);

  closeMenuBtn.addEventListener("click", () => {
    closeMenu();
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (!mobileMenu.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closeMenu();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = getFocusableElements();

    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  desktopMediaQuery.addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu(false);
    }
  });
})();

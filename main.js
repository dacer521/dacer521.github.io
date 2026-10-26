const nav = document.getElementById("navbar");

// hide the nav when scrolling down, bring it back when scrolling up
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  // don't hide a nav link that has keyboard focus
  if (nav.querySelector(":focus-visible")) {
    prevScrollPos = currentScrollPos;
    return;
  }

  if (currentScrollPos > prevScrollPos && currentScrollPos > 80) {
    nav.classList.add("hidden");
  } else {
    nav.classList.remove("hidden");
  }

  prevScrollPos = currentScrollPos;
}, { passive: true });

// keyboard users should always be able to see the nav
nav.addEventListener("focusin", () => nav.classList.remove("hidden"));

// underline the nav link for whatever section is on screen
const navLinks = nav.querySelectorAll('a[href^="#"]:not(.logo-link)');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === "#" + entry.target.id;
      link.classList.toggle("active", isCurrent);
      if (isCurrent) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-40% 0px -55% 0px" });

document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));

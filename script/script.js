let menuOpen = document.querySelector("#open-menu");
let menuClose = document.querySelector("#close-menu");
let nav = document.querySelector("#nav");

menuOpen.addEventListener("click", function () {
  nav.classList.add("menu-appear");
});

menuClose.addEventListener("click", function () {
  nav.classList.remove("menu-appear");
});

/////////////////////////////
/// Hover effects on the nav links
const header = document.querySelector(".header");
header.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest("header").querySelectorAll(".nav-link");
    const logo = link.closest("header").querySelector(".logo");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});
header.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest("header").querySelectorAll(".nav-link");
    const logo = link.closest("header").querySelector(".logo");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

/////////////////////////////
/// Smooth scroll clicking on the links from the nav
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    nav.classList.remove("menu-appear");
  }
});

/////////////////////////////
/// Making the header fixed
const hero = document.querySelector(".main");
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-140px",
});
headerObserver.observe(hero);

/////////////////////////////
/// Section load animation
const allSections = document.querySelectorAll(".animate");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("content-animate");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("content-animate");
});

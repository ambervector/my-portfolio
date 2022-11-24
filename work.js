const homeLink = document.querySelector("#amber-link");
const homeSpan = document.querySelector(".home-word");
const worksList = document.querySelector(".works");
const firstWork = document.querySelector(".work");
const workTitle = document.querySelector(".work-title");
const workOneLine = document.querySelector(".work-one-line-des");
const workDetailedInfo = document.querySelector(".detailed-info");
const footer = document.querySelector(".footer");
const workLinks = document.querySelectorAll(".work-link");
const horizontalLine = document.querySelector(".horizontal-line");
const verticalLine = document.querySelector(".vertical-line");
const htmlCssJsSectionHeading = document.querySelector(".heading");
const reactProjectHeading = document.querySelector("#react-heading");

// tranlating the work links on hover and vice versa
workLinks.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    link.style.transform = "translateX(20px)";
  });

  link.addEventListener("mouseout", function () {
    link.style.transform = "translateX(-20px)";
  });
});

// Transformations on page load
window.addEventListener("load", function () {
  homeSpan.style.right = "0px";
  horizontalLine.style.width = "90vw";
  verticalLine.style.width = "550px";

  verticalLine.style.transform = "rotate(90deg)";
  verticalLine.style.transformOrigin = "10% 0%";

  htmlCssJsSectionHeading.style.left = "0px";
});

// Intersection Observer for the Footer
const revealFooter = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.style.opacity = "1";

  entry.target.style.transition = "all 3s ease";
  observer.unobserve(entries.target);
};

const footerObserver = new IntersectionObserver(revealFooter, {
  root: null,
  threshold: 0,
});

footerObserver.observe(footer);

// Intersection Observer for the React Heading

const revealReactHeading = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.style.opacity = "1";
  entry.target.style.transition = "all 3s ease";
  observer.unobserve(entries.target);
};

const reactHeadingObserver = new IntersectionObserver(revealReactHeading, {
  root: null,
  threshold: 0,
});

reactHeadingObserver.observe(reactProjectHeading);

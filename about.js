const profilePicture = document.querySelector(".profile-picture");
const homeLink = document.querySelector("#amber-link");
const homeSpan = document.querySelector(".home-word");
const h1 = document.querySelector("h1");
const aboutDescription = document.querySelector(".about-description");
const horizontalLine = document.querySelector(".horizontal-line");
const verticalLine = document.querySelector(".vertical-line");

window.addEventListener("load", function () {
  h1.style.transition = "all 2s ease";
  h1.style.position = "relative";
  h1.style.right = "0";
  homeSpan.style.right = "0px";
  horizontalLine.style.width = "90vw";
  verticalLine.style.width = "550px";

  verticalLine.style.transform = "rotate(90deg)";
  verticalLine.style.transformOrigin = "10% 0%";
});

// Reveal about-desctiption on scroll
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.style.opacity = "1";
  entry.target.style.top = "0px";
  entry.target.style.transition = "all 2s ease";
  observer.unobserve(entries.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sectionObserver.observe(aboutDescription);
// homeLink.addEventListener("mouseenter", function () {
//   homeLink.textContent = "amber.home";
// });

// homeLink.addEventListener("mouseout", function () {
//   homeLink.textContent = "home.";
// });

// homeLink.addEventListener("mouseenter", function () {
//   homeSpan.style.right = "0px";
// });

// homeLink.addEventListener("mouseout", function () {
//   homeSpan.style.right = "-150px";
// });

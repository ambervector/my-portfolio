const profilePicture = document.querySelector(".profile-picture");
const homeLink = document.querySelector("#amber-link");
const homeSpan = document.querySelector(".home-word");
const headingtext = document.querySelector(".heading");
const contactSectionEnd = document.querySelector(".contact-section__end");
const horizontalLine = document.querySelector(".horizontal-line");
const verticalLine = document.querySelector(".vertical-line");

// homeLink.addEventListener("mouseenter", function () {
//   homeLink.textContent = "amber.home";
// });

// homeLink.addEventListener("mouseout", function () {
//   homeLink.textContent = "home.";
// });

contactSectionEnd.addEventListener("mouseover", function (e) {
  e.target.style.transition = "transform 0.2s ease";
  e.target.style.transform = "translateX(20px)";
});

contactSectionEnd.addEventListener("mouseout", function (e) {
  e.target.style.transform = "translateX(0px)";
});
window.addEventListener("load", function () {
  homeSpan.style.right = "0px";
  headingtext.style.right = "0px";
  horizontalLine.style.width = "90vw";
  verticalLine.style.width = "90vh";


  verticalLine.style.transform = "rotate(90deg)";
  verticalLine.style.transformOrigin = "10% 0%";
});

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.style.opacity = "1";
  entry.target.style.transition = "all 2s ease";
  observer.unobserve(entries.target);
};

const contactSectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

contactSectionObserver.observe(contactSectionEnd);

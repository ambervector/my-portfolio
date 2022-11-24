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
const reactProjectHeading = document.querySelector(".react-projects");

// console.log(workLinks);
workLinks.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    link.style.transform = "translateX(20px)";
  });

  link.addEventListener("mouseout", function () {
    link.style.transform = "translateX(-20px)";
  });
});

// const works = [
//   {
//     title: "Title1",
//     oneLineDes: "One line description",
//     detailedDes:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ex neque. Quisque interdum ut lectus quis porta. Vivamus sit amet diam consectetur, congue purus ac, dignissim enim. Nulla pretium aliquet risus, at pharetra ex vestibulum vel. Nulla rhoncus efficitur ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pretium quam sed tortor feugiat commodo. Ut feugiat mi tempor purus malesuada, non aliquet ante laoreet. Nullam dictum eu sapien ut rhoncus.",
//   },

//   {
//     title: "Title2",
//     oneLineDes: "One line description",
//     detailedDes:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ex neque. Quisque interdum ut lectus quis porta. Vivamus sit amet diam consectetur, congue purus ac, dignissim enim. Nulla pretium aliquet risus, at pharetra ex vestibulum vel. Nulla rhoncus efficitur ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pretium quam sed tortor feugiat commodo. Ut feugiat mi tempor purus malesuada, non aliquet ante laoreet. Nullam dictum eu sapien ut rhoncus.",
//   },

//   {
//     title: "Title3",
//     oneLineDes: "One line description",
//     detailedDes:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ex neque. Quisque interdum ut lectus quis porta. Vivamus sit amet diam consectetur, congue purus ac, dignissim enim. Nulla pretium aliquet risus, at pharetra ex vestibulum vel. Nulla rhoncus efficitur ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pretium quam sed tortor feugiat commodo. Ut feugiat mi tempor purus malesuada, non aliquet ante laoreet. Nullam dictum eu sapien ut rhoncus.",
//   },

//   {
//     title: "Title4",
//     oneLineDes: "One line description",
//     detailedDes:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ex neque. Quisque interdum ut lectus quis porta. Vivamus sit amet diam consectetur, congue purus ac, dignissim enim. Nulla pretium aliquet risus, at pharetra ex vestibulum vel. Nulla rhoncus efficitur ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pretium quam sed tortor feugiat commodo. Ut feugiat mi tempor purus malesuada, non aliquet ante laoreet. Nullam dictum eu sapien ut rhoncus.",
//   },
// ];
// const replaceContent = function (work) {
//   workTitle.textContent = works.title;
//   workOneLine.textContent = works.oneLineDes;
//   workDetailedInfo.textContent = works.detailedDes;
// };

// works.forEach((work) => {
//   replaceContent(work);
// });

// replaceContent();
// worksList.addEventListener("mouseover", function () {
//   firstWork.style.transform = "translateX(50px)";
// });

// worksList.addEventListener("mouseleave", function () {
//   firstWork.style.transform = "translateX(0px)";
// });

window.addEventListener("load", function () {
  homeSpan.style.right = "0px";
  horizontalLine.style.width = "90vw";
  verticalLine.style.width = "550px";

  verticalLine.style.transform = "rotate(90deg)";
  verticalLine.style.transformOrigin = "10% 0%";

  htmlCssJsSectionHeading.style.left = "0px";
  reactProjectHeading.style.right = "0px";
});

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.style.opacity = "1";

  entry.target.style.transition = "all 3s ease";
  observer.unobserve(entries.target);
};

const forMoreObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

forMoreObserver.observe(footer);

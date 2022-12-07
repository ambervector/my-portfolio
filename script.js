// use: "strict";

const greetingDiv = document.querySelector(".greeting");
const introDiv = document.querySelector(".intro");
const nameDiv = document.querySelector(".name");
const textSideDiv = document.querySelector(".text-side");
const imgElement = document.querySelector("img");
const bodyElement = document.querySelector("body");
const linksElement = document.querySelector(".links");
const horizontalLine = document.querySelector(".horizontal-line");
const verticalLine = document.querySelector(".vertical-line");

console.log(linksElement);

window.addEventListener("load", function () {
  imgElement.style.transition = "all 2s ease";
  imgElement.style.height = "70vh";
  imgElement.style.width = "450px";
  linksElement.style.left = "0";
  linksElement.style.fontSize = "90px";
  horizontalLine.style.width = "90vw";
  verticalLine.style.width = "90vh";

  verticalLine.style.transform = "rotate(90deg)";
  verticalLine.style.transformOrigin = "10% 0%";

  linksElement.style.transition = "all 1s ease";

  // imgElement.style.transform = "rotate(80deg)";
});

greetingDiv.addEventListener("mouseover", function () {
  greetingDiv.textContent = "About";
  // greetingDiv.classList.add("align-right");
});

greetingDiv.addEventListener("mouseout", function () {
  greetingDiv.textContent = "Hi,";
  // greetingDiv.classList.remove("align-right");
});

introDiv.addEventListener("mouseover", function () {
  introDiv.textContent = "Work";
  // introDiv.classList.add("align-right");
});

introDiv.addEventListener("mouseout", function () {
  introDiv.textContent = "this is";
  // introDiv.classList.remove("align-right");
});

nameDiv.addEventListener("mouseover", function () {
  nameDiv.textContent = "Contact";
  // nameDiv.classList.add("align-right");
});

nameDiv.addEventListener("mouseout", function () {
  nameDiv.textContent = "Amber.";
});

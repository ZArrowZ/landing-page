// build the nav bar with 4 sections
// make scroll to the sections
// make class active when we in viewport
// make a button to scroll to the top
// window.scrollY took it form here https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY

// create a sections in navbar.

const navbar = document.querySelector(".page__header");
const sectionOne = document.getElementById("section1");
const sectionTwo = document.getElementById("section2");
const sectionThree = document.getElementById("section3");
const sectionFour = document.getElementById("section4");
const ul = document.getElementById("navbar__list");

for (let i = 1; i <= 4; i++) {
  var li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = `<a href="#">Section ${i}</a>`;
  li.firstElementChild.setAttribute("class", "menu__link");
}

// create a scroll to the sections

const anchors = document.querySelectorAll(".menu__link");
const sections = document.querySelectorAll("section");

anchors[0].addEventListener("click", (evt) => {
  evt.preventDefault();
  sections[0].scrollIntoView();
});
anchors[1].addEventListener("click", (evt) => {
  evt.preventDefault();
  sections[1].scrollIntoView();
});
anchors[2].addEventListener("click", (evt) => {
  evt.preventDefault();
  sections[2].scrollIntoView();
});
anchors[3].addEventListener("click", (evt) => {
  evt.preventDefault();
  sections[3].scrollIntoView();
});

// add class Active to the sections

const distanceOne = sectionOne.getBoundingClientRect().top;
const distanceTwo = sectionTwo.getBoundingClientRect().top;
const distanceThree = sectionThree.getBoundingClientRect().top;
const distanceFour = sectionFour.getBoundingClientRect().top;

let distance = window.scrollY;
window.addEventListener("scroll", () => {
  distance = window.scrollY;

  if (distance >= distanceOne) {
    sectionOne.classList.add("active");
  } else {
    sectionOne.classList.remove("active");
  }
  if (distance >= distanceTwo) {
    sectionOne.classList.remove("active");
    sectionTwo.classList.add("active");
  } else {
    sectionTwo.classList.remove("active");
  }
  if (distance >= distanceThree) {
    sectionTwo.classList.remove("active");
    sectionThree.classList.add("active");
  } else {
    sectionThree.classList.remove("active");
  }
  if (distance >= distanceFour) {
    sectionThree.classList.remove("active");
    sectionFour.classList.add("active");
  } else {
    sectionFour.classList.remove("active");
  }
});

// make button go to top of the page

const button = document.querySelector(".btn");
let scrollDown = window.scrollY;

window.addEventListener("scroll", () => {
  scrollDown = window.scrollY;
  if (scrollDown > 400) {
    button.classList.add("button__activated");
  } else {
    button.classList.remove("button__activated");
  }
});

button.addEventListener("click", () => {
  window.scroll({ top: 0 });
});

// Make sections one collapsible

const arrowUp = document.querySelector(".arrow__up");
const arrowDown = document.querySelector(".arrow__down");
const containerParagraph = document.querySelector(".collapsible");

arrowUp.addEventListener("click", () => {
  containerParagraph.style.top = "-2600px";
  arrowUp.style.display = "none";
  arrowDown.style.display = "block";
});
arrowDown.addEventListener("click", () => {
  containerParagraph.style.top = 0;
  arrowDown.style.display = "none";
  arrowUp.style.display = "block";
});

// Make sections two collapsible

const arrowUpTwo = document.querySelector(".arrow__up__two");
const arrowDownTwo = document.querySelector(".arrow__down__two");
const containerParagraphTwo = document.querySelector(".collapsible__two");

arrowUpTwo.addEventListener("click", () => {
  containerParagraphTwo.style.top = "-2600px";
  arrowUpTwo.style.display = "none";
  arrowDownTwo.style.display = "block";
});
arrowDownTwo.addEventListener("click", () => {
  containerParagraphTwo.style.top = 0;
  arrowDownTwo.style.display = "none";
  arrowUpTwo.style.display = "block";
});

// Make sections three collapsible

const arrowUpThree = document.querySelector(".arrow__up__three");
const arrowDownThree = document.querySelector(".arrow__down__three");
const containerParagraphThree = document.querySelector(".collapsible__three");

arrowUpThree.addEventListener("click", () => {
  containerParagraphThree.style.top = "-2600px";
  arrowUpThree.style.display = "none";
  arrowDownThree.style.display = "block";
});
arrowDownThree.addEventListener("click", () => {
  containerParagraphThree.style.top = 0;
  arrowDownThree.style.display = "none";
  arrowUpThree.style.display = "block";
});

// Make sections four collapsible

const arrowUpFour = document.querySelector(".arrow__up__four");
const arrowDownFour = document.querySelector(".arrow__down__four");
const containerParagraphFour = document.querySelector(".collapsible__four");

arrowUpFour.addEventListener("click", () => {
  containerParagraphFour.style.top = "-2600px";
  arrowUpFour.style.display = "none";
  arrowDownFour.style.display = "block";
});
arrowDownFour.addEventListener("click", () => {
  containerParagraphFour.style.top = 0;
  arrowDownFour.style.display = "none";
  arrowUpFour.style.display = "block";
});

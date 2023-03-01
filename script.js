// NAVIGATION BUTTON
const headerEl = document.querySelector(".header");
const navBarEl = document.querySelector(".mobile-navbar");
const links = document.querySelectorAll("nav-link");

// HIDE/SHOW NAVIGATION
navBarEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Hide menu bar on navbar link click
links.forEach((link) => {
  link.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
  });
});

//CAROUSEL
let data = [
  {
    id: 0,
    img: "./images/Burger-upcomming.png",
    alt: "Burger with french fries",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Dolores praesentium quaerat impedit nam, cupiditate, a aut error eligendi sapiente voluptatem in soluta tempore maxime,
    exercitationem ipsum dolore molestiae ad quae. Lorem ipsum dolor sit, amet consectetur adipisicing.`,
  },
  {
    id: 1,
    img: "./images/Burger-upcomming-2.jpg",
    alt: "Delicious meat sandwich with tomatoes",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Dolores praesentium quaerat impedit nam, a aut error
    eligendi sapiente voluptatem in soluta tempore maxime,
    exercitationem ipsum dolore molestiae ad quae. Lorem ipsum dolor sit, amet consectetur adipisicing.`,
  },
  {
    id: 2,
    img: "./images/Burger-upcomming-1.jpg",
    alt: "Burger with french fries",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Dolores praesentium quaerat impedit nam, cupiditate, a aut error eligendi sapiente voluptatem in soluta tempore maxime,
    exercitationem ipsum dolore molestiae ad quae. Lorem ipsum dolor sit, consectetur adipisicing.`,
  },
];

const eventImage = document.querySelector(".event-img");
const eventText = document.querySelector(".event-text");

const prevBtn = document.querySelector(".event-btn--right");
const nextBtn = document.querySelector(".event-btn--left");

const dotsNav = document.querySelector(".dots");
// const dotsNav = document.querySelectorAll(".dot-btn");
const dotsBtn = Array.from(dotsNav.children);

// ADD DATA TO SLIDE
let currentSlide = 0;

const addToSlide = (id) => {
  eventImage.src = data[id].img;
  eventImage.alt = data[id].alt;
  eventText.textContent = data[id].text;
  eventText.style.animation = "from-top 0.2s ease-in";
  eventImage.style.animation = "from-bottom 0.2s ease-in";
};

// Removing the style after amination ends(to enable the animation to play again)
/*
eventImage.addEventListener(
  "animationend",
  (e) => (e.target.style.animation = "")
);
*/

[eventText, eventImage].forEach((el) => {
  el.addEventListener("animationend", (e) => (e.target.style.animation = ""));
});

const updateDot = (activeDot, targetDot) => {
  activeDot.classList.remove("dot-btn--active");
  targetDot.classList.add("dot-btn--active");
};
addToSlide(currentSlide);

const hideShowSlideNav = () => {
  if (currentSlide === data.length - 1) {
    nextBtn.classList.add("hidden");
    prevBtn.classList.remove("hidden");
  } else if (currentSlide === 0) {
    prevBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    prevBtn.classList.remove("hidden");
  }
};

// ON LEFT BTN CLICK, MOVE TO NEXT SLIDE
nextBtn.addEventListener("click", () => {
  if (currentSlide < data.length - 1) {
    currentSlide++;
    addToSlide(currentSlide);
  }
  const activeDot = document.querySelector(".dot-btn--active");
  const nextDot = activeDot.nextElementSibling;
  updateDot(activeDot, nextDot);
  hideShowSlideNav();
});

// ON RIGHT BTN CLICK, MOVE TO PREVIOUS SLIDE
prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    addToSlide(currentSlide);
    hideShowSlideNav();
  }

  const activeDot = document.querySelector(".dot-btn--active");
  const prevDot = activeDot.previousElementSibling;
  updateDot(activeDot, prevDot);
  hideShowSlideNav();
});

// ON DOT BTN CLICK, MOVE TO THAT SLIDE
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return; //if not one of the btn stop
  const activeDot = document.querySelector(".dot-btn--active");
  const targetSlide = dotsBtn.findIndex((dotBtn) => dotBtn === targetDot);

  currentSlide = targetSlide;
  addToSlide(currentSlide);
  hideShowSlideNav();

  updateDot(activeDot, targetDot);
});

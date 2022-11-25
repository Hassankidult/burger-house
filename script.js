const headerEl = document.querySelector(".header");
const navBarEl = document.querySelector(".mobile-navbar");

navBarEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

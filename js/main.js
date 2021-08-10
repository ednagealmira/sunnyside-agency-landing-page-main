const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("nav-mobile");

hamburger.addEventListener("click", function () {
  if (navMenu.classList.contains("hide")) {
    navMenu.classList.add("dropmenu");
    navMenu.classList.remove("hide");
  } else if (navMenu.classList.contains("dropmenu")) {
    navMenu.classList.add("hide");
    navMenu.classList.remove("dropmenu");
  }
});

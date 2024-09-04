import "./styles.css";

import InitPage from "./initial-page-load.js";
import MenuPage from "./menu_page.js";
import AboutUsPage from "./about_us.js";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

InitPage();
homeButton.classList.add("button-green");

function renderHome(e) {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  menuButton.classList.remove("button-green");
  aboutButton.classList.remove("button-green");
  homeButton.classList.add("button-green");

  InitPage();
}

function renderMenu(e) {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  homeButton.classList.remove("button-green");
  aboutButton.classList.remove("button-green");
  menuButton.classList.add("button-green");

  MenuPage();
}

function renderAboutus(e) {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  homeButton.classList.remove("button-green");
  menuButton.classList.remove("button-green");
  aboutButton.classList.add("button-green");

  AboutUsPage();
}

homeButton.addEventListener("click", renderHome);
menuButton.addEventListener("click", renderMenu);
aboutButton.addEventListener("click", renderAboutus);

import { loadHomePage } from './home-page';
import { loadMenuPage } from './menu-page';
import { loadContactPage } from './contact-page';

loadHomePage();

const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click", () => {
    contentDiv.replaceChildren();
    loadHomePage();
});
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
    contentDiv.replaceChildren();
    loadMenuPage();
});
const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click", () => {
    contentDiv.replaceChildren();
    loadContactPage();
});

const contentDiv = document.querySelector("#content");
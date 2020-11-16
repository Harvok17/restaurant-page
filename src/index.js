import { Navigation } from "./navigation.js";
import { initPage } from "./pages/mainpage.js";
import { homePage } from "./pages/home.js";
import { aboutPage } from "./pages/about.js";
import { menuPage } from "./pages/menu.js";
import { contactPage } from "./pages/contact.js";
import "./main.css";

const content = document.querySelector(".content");
content.append(initPage());

const mainContent = document.querySelector(".main-content");
mainContent.append(homePage());
mainContent.append(aboutPage());
mainContent.append(menuPage());
mainContent.append(contactPage());

const nav = new Navigation();
const pages = document.querySelectorAll(".pages");
for (let i = 1; i < pages.length; i++) {
  pages[i].classList.add('hide')
}

const hidePages = () => {
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.add('hide')
  }
}

const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', function(){
  const menu = document.querySelector(".menu-page");
  hidePages()
  menu.classList.remove('hide')
})


nav.homeClick(() => {
  const home = document.querySelector(".home-page");
  hidePages()
  home.classList.remove('hide')
});

nav.aboutClick(() => {
  const about = document.querySelector(".about-page");
  hidePages()
  about.classList.remove('hide')
});

nav.menuClick(() => {
  const menu = document.querySelector(".menu-page");
  hidePages()
  menu.classList.remove('hide')

});

nav.contactClick(() => {
  const contact = document.querySelector(".contact-page");
  hidePages();
  contact.classList.remove("hide");
});
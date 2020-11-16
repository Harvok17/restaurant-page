export class Navigation {
  constructor() {
    this.home = document.getElementById("home");
    this.about = document.getElementById("about");
    this.menu = document.getElementById("menu");
    this.contact = document.getElementById("contact");
  }

  homeClick(cb) {
    this.home.addEventListener("click", cb);
  }

  aboutClick(cb) {
    this.about.addEventListener("click", cb);
  }

  menuClick(cb) {
    this.menu.addEventListener("click", cb);
  }

  contactClick(cb) {
    this.contact.addEventListener("click", cb);
  }
}

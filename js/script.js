// ===============NAVBAR===============
const navToggle = document.getElementById("nav-toggle"),
  navMenu = document.getElementById("menu-container");

// -navtoggle-btn-showmenu-
if (navToggle) {
  navToggle.addEventListener("click", () => {
    if (!navToggle.classList.contains("active")) {
      navToggle.classList.add("active");
      navMenu.classList.add("show-menu");
      navMenu.classList.remove("remove-menu");
    } else {
      navToggle.classList.remove("active");
      navMenu.classList.remove("show-menu");
      navMenu.classList.add("remove-menu");
    }
  });
}

// =================SERVICES===========
const service = document.getElementById("service");

// =================ARTICLES===========
const articles = document.getElementById("article-wrapper");

// ==================FOOTER============
const footerMenu = document.getElementById("footer-menu"),
  footer = document.getElementById("footer"),
  footerWrap = document.getElementById("footer-wrapper");

// layout
window.addEventListener("resize", mediaQuery);
window.addEventListener("DOMContentLoaded", mediaQuery);

// Functions
function mediaQuery() {
  const width = window.innerWidth;
  if (width > 768) {
    // screen size larger than 769px
    // NAVBAR
    navMenu.classList.remove("menu-container", "remove-menu", "show-menu");
    navMenu.firstElementChild.classList.remove("flex-fdc");
    navToggle.classList.remove("active");

    // SERVICES
    service.classList.add("flex", "flex-w", "flex-ai");

    // ARTICLES
    articles.classList.add("flex", "flex-w", "flex-ai");

    // FOOTER
    footer.classList.add("flex", "flex-sb");
    footerMenu.classList.add("flex", "flex-fdc", "flex-w", "flex-ai");
    footerWrap.classList.add("flex", "flex-sb");
  }
  if (width > 1366) {
    // SERVICES
    service.classList.remove("flex-w");
    service.classList.add("flex-sb");

    // ARTICLES
    articles.classList.remove("flex-w");
    articles.classList.add("flex-sb");

    // FOOTER
    footerMenu.classList.remove("flex-ai");
  }
  if (width <= 768) {
    // screen size is less than 768px
    // NAVBAR
    navMenu.classList.add("menu-container");
    navMenu.firstElementChild.classList.add("flex-fdc");

    // SERVICES
    service.classList.remove("flex", "flex-w", "flex-ai");

    // ARTICLES
    articles.classList.remove("flex", "flex-w", "flex-ai");

    // FOOTER
    footer.classList.remove("flex", "flex-sb");
    footerMenu.classList.remove("flex", "flex-fdc", "flex-w", "flex-ai");
    footerWrap.classList.remove("flex", "flex-sb");
  }
}

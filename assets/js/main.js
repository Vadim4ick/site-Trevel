document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerLink = document.querySelector(".header-logo-link");
  const headerWrapper = document.querySelector(".wrapper");
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add("header_active");
      headerLink.classList.add("link-active");
      headerWrapper.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
      headerLink.classList.remove("link-active");
      headerWrapper.classList.remove("header_active");
    }
  };

  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");

  burgerItem.addEventListener("click", () => {
    if (menu.style.display === "flex") {
      menu.style.opacity = "0";
      setTimeout(() => {
        menu.style.display = "none";
      }, 250);
      document.body.style.overflow = "visible";
    } else {
      menu.style.display = "flex";
      setTimeout(() => {
        menu.style.opacity = "1";
      }, 0);
      document.body.style.overflow = "hidden";
    }
  });

  document.querySelectorAll(".header-link").forEach(($el) => {
    $el.addEventListener("click", () => {
      menu.style.opacity = "0";
      setTimeout(() => {
        menu.style.display = "none";
      }, 250);
      document.body.style.overflow = "visible";
    });
  });
});

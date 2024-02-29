document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon"),
    overlay = document.querySelector(".overlay"),
    listOverlay = document.querySelector(".list-overlay"),
    list = document.querySelector(".list");
  menuIcon.addEventListener("click", () => {
    // menuIcon.src = menuIcon.src.includes("icon-menu.svg")
    //   ? "./assets/images/icon-menu-close.svg"
    //   : "./assets/images/icon-menu.svg";
    if (listOverlay.classList.contains("active")) {
      menuIcon.src = "./assets/images/icon-menu.svg";
      listOverlay.classList.remove("active");
      overlay.classList.remove("overlay-active");
      list.classList.remove("mob");
    } else {
      menuIcon.src = "./assets/images/icon-menu-close.svg";
      listOverlay.classList.add("active");
      overlay.classList.add("overlay-active");
      list.classList.add("mob");
    }
  });
});

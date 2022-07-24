// HEADER
const actionDrop = document.getElementById("scholarship");
const navbar = document.getElementById("navBar");
const overlay = document.getElementById("overlay");
const mobileNavMenu = document.getElementById("mobileNavMenu");
const item = document.getElementById("mobileNav--items");
console.log(item.style.display);
if (actionDrop) {
  actionDrop.addEventListener("click", () => {
    navbar.classList.toggle("header__nav-bar--active");
    actionDrop.classList.toggle("nav-items__single-item--active");
    if (overlay && overlay.style.display == "block") overlay.style.display = "none";
    else overlay.style.display = "block";
  });
}
if (mobileNavMenu) {
  mobileNavMenu.addEventListener("click", () => {
    // ICON CHANGE FOR MOBILE NAV
    if (document.getElementById("menu").className == "bx bx-menu") {
      document.getElementById("menu").className = "bx bx-x";
    } else {
      document.getElementById("menu").className = "bx bx-menu";
    }
    navbar.classList.toggle("header__nav-bar--active");
    // MOBILE NAV DISPLAY
    if (item && item.style.display == "block") item.style.display = "none";
    else item.style.display = "block";
  });
}

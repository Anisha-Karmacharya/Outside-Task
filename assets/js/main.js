gsap.registerPlugin(ScrollTrigger);

function navReveal() {
    const actionDrop = document.getElementById("scholarship");
    const navbar = document.getElementById("navBar");
    const overlay = document.getElementById("overlay");
    const mobileNavMenu = document.getElementById("mobileNavMenu");
    const item = document.getElementById("mobileNav--items");
    
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
}

function imageReveal(){
    let revealContainers = document.querySelectorAll(".reveal");  
    revealContainers.forEach((container) => {
      let image = container.querySelector(".img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset"
        }
      });
    
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1, {
        xPercent: -100,
        ease: Power2.out
      });
      tl.from(image, 1, {
        xPercent: 100,
        scale: 1.3,
        delay: -1,
        ease: Power2.out
      });
    });
}
function hero(){
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero'
        }
    });
    
    tl
    .from(".hero__bg", {opacity: 0, y: 200, duration:1})
    .from(".main__text", {opacity: 0, duration: 1}, "-=.5")
    .from(".main__button", {opacity: 0, duration:1}, "-=1")
}

function mission(){
    const missiontl = gsap.timeline({
        scrollTrigger: {
            trigger: '.mission'
        }
    });
    
    missiontl
    .from(".mission__bg", {opacity: 0, y: 200, duration:1})
    .from(".mission__container", {opacity: 0, y: 200, duration:1})
}


navReveal();
imageReveal();
hero();
mission();

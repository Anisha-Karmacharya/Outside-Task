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
      if (overlay && overlay.style.display == "block")
        overlay.style.display = "none";
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
// CONTROLS ANIMATION FOR THE BANNER IMAGES IN THE APPLICATION
function imageReveal() {
  let revealContainers = document.querySelectorAll(".reveal");
  revealContainers.forEach((container) => {
    let image = container.querySelector(".img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset",
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1, {
      xPercent: -100,
      ease: Power2.out,
    });
    tl.from(image, 1, {
      xPercent: 100,
      scale: 1.3,
      delay: -1,
      ease: Power2.out,
    });
  });
}
// CONTROLS ANIMATION FOR HERO SECTION
function hero() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
    },
  });

  tl.from(".hero__bg", { opacity: 0, y: 200, duration: 1 })
    .from(".main__text", { opacity: 0, duration: 1 }, "-=.5")
    .from(".main__button", { opacity: 0, duration: 1 }, "-=1");
}
// CONTROLS ANIMATIONS FOR THE MISSION SECTION
function mission() {
  const missiontl = gsap.timeline({
    scrollTrigger: {
      trigger: ".mission",
    },
  });

  missiontl
    .set(".mission__bg", { autoAlpha: 1.5 })
    .from(".mission__bg", 1.5, {
      yPercent: 100,
      ease: Power2.out,
    })
    .from(".mission__container", 1.5, {
      yPercent: 100,
      opacity: 0,
      scale: 1,
      delay: -1.5,
      ease: Power2.out,
    });
}

// CONTROLS ANIMATIONS FOR THE NEWS SECTION
function news() {
  const newstl = gsap.timeline({
    scrollTrigger: {
      trigger: ".news",
    },
  });

  newstl

    .from(".news__item:nth-child(1)", { opacity: 0, duration: 1 })
    .from(".news__item:nth-child(2)", 2, {
      yPercent: 150,
      opacity: 0,
      scale: 1,
      delay: -2,
      ease: Power2.out,
    })
    .from(".news__item:nth-child(3)", 2, {
      yPercent: 100,
      opacity: 0,
      scale: 1,
      delay: -2,
      ease: Power2.out,
    })
    .from(".news__item:nth-child(4)", 2, {
      yPercent: 50,
      opacity: 0,
      scale: 1,
      delay: -2,
      ease: Power2.out,
    })
    .from(".news__item:nth-child(5)", 2, {
      yPercent: 50,
      opacity: 0,
      scale: 1,
      delay: -2,
      ease: Power2.out,
    })
    .from(".news__item:nth-child(6)", { opacity: 0, duration: 1 }, "-=1");
}
// CONTROLS ANIMATIONS FOR THE FOUNDERS SECTION
function founders() {
  const foundersTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".founders",
    },
  });

  foundersTl
    .from(".founders__heading", { opacity: 0, y: 100, duration: 1 })
    .from(".founders__container", { opacity: 0 }, "-=.7");
}
// CONTROLS ANIMATIONS FOR THE GALLERY SECTION
function gallery() {
  const gallerytl = gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery",
    },
  });
  gallerytl
    .from(".layout__item:nth-child(1)", { opacity: 0, duration: 1 })
    .from(
      ".layout__item:nth-child(2)",
      { opacity: 0, y: 50, duration: 1 },
      "-=.7"
    )
    .from(
      ".layout__item:nth-child(3)",
      { opacity: 0, y: 50, duration: 1 },
      "-=.7"
    )
    .from(
      ".layout__item:nth-child(4)",
      { opacity: 0, y: 50, duration: 1 },
      "-=.7"
    );
}
// CONTROLS ANIMATIONS FOR THE BENEFICIARIES SECTION
function beneficiaries() {
  const beneficiariesTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".beneficiaries",
    },
  });

  beneficiariesTl
    .from(".beneficiaries__heading", { opacity: 0, y: 100, duration: 1 })
    .from(".beneficiaries__container", { opacity: 0 }, "-=.7");
}

navReveal();
imageReveal();
hero();
mission();
news();
gallery();
founders();
beneficiaries();

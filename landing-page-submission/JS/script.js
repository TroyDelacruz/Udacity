/* Declaring global variables */

const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

/* Helper Functions */

function ifInViewport() {
  return ifInViewport.top >= 0;
}

/* Main Functions */

// Add Class active when near top of viewport

function setActiveClass() {
  for (let i = 0; i < navList.length; i++) {
    if (ifInViewport(sectionList[i])) {
      navList[i].classList.add("your-active-class");
    } else {
      navList[i].classList.remove("your-active-class");
    }
  }
}

setActiveClass();

const scroll = () => {
  const link = document.querySelectorAll(".navbar__menu a");
  link.forEach((link) => {
    link.addEventListener("click", () => {
      for (i = 0; i < sections; i++) {
        sections[i].addEventListener("click", sectionScroll(link));
      }
    });
  });
};

scroll();

// Building Nav

function navBuild() {
  let navUI = "";

  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;

    navUI += `<a class ="menu__link" data-id="${sectionID}">${sectionDataNav}</a>`;
  });

  navList.innerHTML = navUI;
}

navBuild();

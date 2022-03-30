// Selecting global variables
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
let navigationList = '';

/* Start Helper Functions */

function navItemHTML(id, name) {
  const item = `<a class="menu__link" data-id="${id}">${name}</a>`
  return item;
};

function InViewport (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
};

/* function makeNavigation () {
  sections.forEach((section) => {
    navigationList += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">
          ${section.dataset.nav}</a></li>`;
  });

  navigation.innerHTML.navigationList
}

makeNavigation(); */
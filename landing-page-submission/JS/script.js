// Selecting global variables
const navigation = document.getElementById('navbar__list')
const sections = document.querySelectorAll('section')
let navigationList = '';
/* Start Helper Functions */

// Create navigation bar by selecting the sections

function makeNavigation () {
  sections.forEach((section) => {
    navigationList += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">
          ${section.dataset.nav}</a></li>`;
  });

  navigation.innerHTML.navigationList
}

makeNavigation();
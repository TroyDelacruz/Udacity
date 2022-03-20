/* Defining global variable(s) */

const navSections = querySelectorAll("section");

/* Starting the beginning functions */

function createNavHTML(id, name) {
  const navHTML = `<a class ="menu__link" data-id="${id}>${name}</a>`;
  return navHTML;
}

function inViewport(elem) {
  const bound = elem.getBoundingClientRect();
  return bound.top >= 0;
}

/* Starting the functions that will build upon the previous */

// Building the navigation

function buildNav() {}

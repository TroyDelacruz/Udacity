/* Define global variables */

const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
let numberOfListItems = sections.length;
/* End Global Variables */


/* Starting Functions */

function createListItem () {
    for (section of sections) {
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');

        // Creates an item for each one

        listItem = document.createElement('li');

        // Adding item text

        listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;

        // Adding list item to menu

        menu.appendChild(listItem);
    }
};
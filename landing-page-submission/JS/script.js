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

// Will show if section is in viewport

function sectionInViewPort (elem) {
    let sectionPos = elem.getBoundingClientRect();
    return (sectionPos >= 0)
};

function toggleActiveClass() {
    for (section of sections) {
        
        //If the section is in the viewport
        if (sectionInViewPort(section)) {
            //Check if it doesn't already have "your-active-class"
            if (!section.classList.contains('your-active-class')) {
                //Add it
                section.classList.add('your-active-class');
            }
        } else { //Out of viewport? Remove your-active-class
            section.classList.remove('your-active-class');
        }
    }
};

/*Completed helper functions */
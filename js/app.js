/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


// Define Global Variables
const sections = document.querySelectorAll("section");
const navbar_list = document.getElementById("navbar__list");


// Helper Functions


// Main Functions
// build the nav
/*** Setps
 * Loop through each section and create a menu item for it
 * Get the id of the section and name of section from data-nav
 * Set the menu item attributes and content
 * Append the item to navList
 */ 
function createMenu(){
    // Loop through each section and create a menu item for it
    sections.forEach(function(section){
        const listItem = document.createElement("li");
        // Get the id of the section and title of section from data-nav
        const sec_id = section.getAttribute('id');
        const sec_title = section.getAttribute('data-nav');
        // Set the menu item attributes and content
        listItem.innerHTML = `<a class="menu__link" href="#${sec_id}">${sec_title}</a>`;
        // Append the item to navList
        navbar_list.appendChild(listItem);
    });
}


// Add class 'active' to section when near top of viewport
/*** Setps
 * Loop through each section and get rect bounding client of section
 * remove active class from all sections use classList()
 * checks if the section is near the top half of the viewport then add active class to section
*/
function setActive(){
    // Loop through each section and get rect bounding client of section
    sections.forEach(function(section){
        const rect = section.getBoundingClientRect();
        // remove active class from all sections use classList()
        section.classList.remove("your-active-class");
        // check
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
            section.classList.add("your-active-class");
        }
    });
}


// Scroll to anchor ID using scrollTO event


// Events
// Build menu 
document.addEventListener("DOMContentLoaded", createMenu);

// Scroll to section on link click

// Set sections as active
window.addEventListener("scroll", setActive);


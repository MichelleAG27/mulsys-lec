'use strict';

// navbar

const navbaropenbutton = document.querySelector("[data-menu-open-button]");
const navbarclosebutton = document.querySelector("[data-menu-close-button]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navelement = [navbaropenbutton, navbarclosebutton, overlay];

for (let i = 0; i < navelement.length; i++) {

  navelement[i].addEventListener("click", function () {

    navbar.classList.toggle("active"); 
    document.body.classList.toggle("active");
    overlay.classsList.toggle("active");
  });

}


// scroll atas
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});
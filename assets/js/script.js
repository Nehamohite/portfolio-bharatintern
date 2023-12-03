'use strict';


const addEventOnElem = function(elem, type, callback){
    if(elem.length > 1){
        for(let i=0; i<elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    }else{
        elem.addEventListener(type, callback)
    }
}


const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar-link');
const navToggler = document.querySelector('.nav-toggle-btn');

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function() {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);


const header = document.querySelector('.data-header');

window.addEventListener("scroll", function() {
    if(this.window.scrollY > 100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
})

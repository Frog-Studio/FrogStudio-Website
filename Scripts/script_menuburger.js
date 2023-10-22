// JavaScript pour le menu burger
const menuToggle = document.querySelector('.menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')

menuToggle.addEventListener("click", togglenav)

function togglenav(){
    menuToggle.classList.toggle("active")
    mobileMenu.classList.toggle("active")
}
// Fin du script pour menu burger
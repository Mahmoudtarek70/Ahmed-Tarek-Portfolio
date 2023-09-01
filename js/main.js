/* menu show y hidden */
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

/* Menu Show */
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    })
}

/* Menu Hidden */
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Modal 
const modalViews = document.querySelectorAll(".services_modal")
const modalButtons = document.querySelectorAll(".services_button")
const modalCloses = document.querySelectorAll(".services_modal-close")

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal")
}

modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener("click", () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", ()=> {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        })
    })
})

// Portfolio 

// Click Bar 
const button = document.querySelectorAll('.text')
function activeLink(){
    button.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}

button.forEach((item) => 
item.addEventListener('click', activeLink));

// Filter
const filterItem = document.querySelector(".texts");
const filterImg = document.querySelectorAll(".frame");

filterItem.onclick = (selectedItem)=>{
let filterName = selectedItem.target.getAttribute("data-filter");
    filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-filter");
        if((filterImges == filterName) || (filterName == "all")){
        image.classList.remove("hide"); 
        image.classList.add("show");
        }else{
        image.classList.add("hide"); 
        image.classList.remove("show");
        }
    });
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Change background header 

function scrollHeader(){
    const nav = document.getElementById('header')
    //when the scroll is greater than 200 viewport height and the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Show Scroll Up

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Loader

var Loader = document.getElementById("preloader")
window.addEventListener('load', function(){
    Loader.style.display = "none";
})


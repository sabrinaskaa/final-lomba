/*====== MENU =====*/
const showMenu = (toggleId,navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav-toggle','nav-menu');

/* ==========   SHOW LIST   ========== */
const showList = (toggleId,navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show-list')
      })
  }
}

showList('nav-toggle','nav-list');

/* ==========   ANIMATION TOGGLE    ========== */
const hambToggle = (toggleId,navhomeId,navgalleryId,navShopId,navTeamId) =>{
const toggle = document.getElementById(toggleId),
home = document.getElementById(navhomeId),
gallery = document.getElementById(navgalleryId),
shop = document.getElementById(navShopId),
team = document.getElementById(navTeamId)

if(toggle && home && gallery && shop && team){
    toggle.addEventListener('click', ()=>{
        toggle.classList.toggle('active')
    })
    home.addEventListener('click', ()=>{
        toggle.classList.toggle('active')
    })
    gallery.addEventListener('click', ()=>{
        toggle.classList.toggle('active')
    })
    shop.addEventListener('click', ()=>{
        toggle.classList.toggle('active')
    })
    team.addEventListener('click', ()=>{
      toggle.classList.toggle('active')
    })
  }
}

hambToggle('nav-toggle', 'link-home', 'link-gallery', 'link-shop', 'link-team');


/* ==========   REMOVE MENU   ========== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')

  const navList = document.getElementById('nav-list')
  navList.classList.remove('show-list')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ==========   SCROLL ANIMATION NAVBAR   ========== */
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 200)
});


let slidePosition = 0;
const slides = document.getElementsByClassName('slider-content-1');
const totalSlides = slides.length;

document.
getElementById('sliders-button--next')
.addEventListener("click", function() {
  moveToNextSlide();
});
document.
getElementById('sliders-button--prev')
.addEventListener("click", function() {
  moveToPrevSlide();
});

function updateSlidePosition() {
for (let slide of slides) {
  slide.classList.remove('slider-content-1--visible');
  slide.classList.add('slider-content-1--hidden');
}

slides[slidePosition].classList.add('slider-content-1--visible');
}

function moveToNextSlide() {
if (slidePosition === totalSlides - 1) {
  slidePosition = 0;
} else {
  slidePosition++;
}

updateSlidePosition();
}

function moveToPrevSlide() {
if (slidePosition === 0) {
  slidePosition = totalSlides - 1;
} else {
  slidePosition--;
}

updateSlidePosition();
};



let sliderPosition = 0;
const sliders = document.getElementsByClassName('slider-content-2');
const totalSliders = sliders.length;

document.
getElementById('sliders-button--next-1')
.addEventListener("click", function() {
  moveToNextSlider();
});
document.
getElementById('sliders-button--prev-1')
.addEventListener("click", function() {
  moveToPrevSlider();
});

function updateSliderPosition() {
for (let slider of sliders) {
  slider.classList.remove('slider-content-2--visible');
  slider.classList.add('slider-content-2--hidden');
}

sliders[sliderPosition].classList.add('slider-content-2--visible');
}

function moveToNextSlider() {
if (sliderPosition === totalSliders - 1) {
  sliderPosition = 0;
} else {
  sliderPosition++;
}

updateSliderPosition();
}

function moveToPrevSlider() {
if (sliderPosition === 0) {
  sliderPosition = totalSliders - 1;
} else {
  sliderPosition--;
}

updateSliderPosition();
};

/* ==========   SWIPE REVEAL ANIMATION   ========== */ 
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
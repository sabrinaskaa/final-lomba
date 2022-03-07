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
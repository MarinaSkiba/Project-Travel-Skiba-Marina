'use strict';
const iconMenu= document.querySelector('.menu_icon');
if (iconMenu) {
  const nav = document.querySelector('.topnav');
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    nav.classList.toggle('_active');
    
  });
}
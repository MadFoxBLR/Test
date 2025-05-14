const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top');

const visible = document.querySelector('.info__text');
const visibleForm = document.querySelector('.form__info-row');





navBtn.onclick = function () {
  navIcon.classList.toggle('nav-icon--active');
  nav.classList.toggle('header__top--mobile');
  document.body.classList.toggle('no-scroll');

  visible.classList.toggle('visible');
  visibleForm.classList.toggle('visible');
  

 

}
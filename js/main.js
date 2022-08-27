const headerHover = document.getElementById('header__row');
const active_class = document.querySelector('header_fixed');
const imgScroll = document.querySelector('header-about__img');

window.addEventListener('scroll', e => {
  if(window.pageYOffset > 100) headerHover.classList.add('header_fixed');
  else headerHover.classList.remove('header_fixed'); 
})
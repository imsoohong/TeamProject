const centerMenu = document.querySelector('.center__menu');
const liMenu = document.querySelector('.menu__li');
const li2Menu = document.querySelector('.menu__li2');
const li3Menu = document.querySelector('.menu__li3');
const li4Menu = document.querySelector('.menu__li4');

const headerToggleBtn = document.querySelector('.header__toggle-btn');

headerToggleBtn.addEventListener('click', () => {
  centerMenu.classList.toggle('open');
  liMenu.classList.toggle('open');
  li2Menu.classList.toggle('open');
  li3Menu.classList.toggle('open');
  li4Menu.classList.toggle('open');
  console.log('ㅎㅇ');
});

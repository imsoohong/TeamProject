const centerMenu = document.querySelector('.header__center');
const liMenu = document.querySelector('.center__menu');

const headerToggleBtn = document.querySelector('.header__toggle-btn');

headerToggleBtn.addEventListener('click', () => {
  centerMenu.classList.toggle('open');
  liMenu.classList.toggle('open');
});

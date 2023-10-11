const header = document.querySelector('.header');
const headerToggle = header.querySelector('.header__toggle');

const map = document.querySelector('.map');

header.classList.remove('header--no-js');
headerToggle.addEventListener('click', () => header.classList.toggle('header--opened'));

map.classList.remove('map--no-js');

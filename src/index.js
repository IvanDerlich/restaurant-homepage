import './style.scss';
import navbar from './modules/navbar.html';
import home from './modules/home.html';
import footer from './modules/footer.html';
import contact from './modules/contact.html';
import menu from './modules/menu.html';

const anchor = document.getElementById('content');

function loadHtml(component, className) {
  const elem = document.createElement('div');
  elem.id = className;
  elem.innerHTML = component;
  anchor.appendChild(elem);
}

loadHtml(navbar, 'navbar-content');
loadHtml('', 'main');
loadHtml(footer, 'footer-content');

const main = document.getElementById('main');

function renderContent(htmlString, id) {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
  const elem = document.createElement('div');
  elem.id = id;
  elem.innerHTML = htmlString;
  main.appendChild(elem);
}
renderContent(home, 'home');

const homeBtn = document.getElementById('home-lnk');
const menuBtn = document.getElementById('menu-lnk');
const contactBtn = document.getElementById('contact-lnk');

function selectHome() {
  homeBtn.classList.add('active-custom');

  menuBtn.classList.remove('active-custom');
  contactBtn.classList.remove('active-custom');
}

homeBtn.addEventListener('click', () => {
  selectHome();
  renderContent(home, 'home');
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('active-custom');

  homeBtn.classList.remove('active-custom');
  contactBtn.classList.remove('active-custom');

  renderContent(menu, 'menu');
});

contactBtn.addEventListener('click', () => {
  contactBtn.classList.add('active-custom');

  homeBtn.classList.remove('active-custom');
  menuBtn.classList.remove('active-custom');

  renderContent(contact, 'contact');
});


selectHome();
import './styles.css';

import menuItems from '../src/templates/menu-items.hbs';
import menu from '../src/menu.json';

const markup = menuItems(menu);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);

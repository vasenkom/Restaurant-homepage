import _ from 'lodash';
import './style.css';
import poke1 from './img/poke1.jpg';
import poke2 from './img/poke2.jpg';
import poke3 from './img/poke3.jpg';
import poke4 from './img/poke4.jpg';
import side1 from './img/side1.jpg';
import side2 from './img/side2.jpg';
import map from './img/map2.png';

export function footerAdd () {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = '<p>by vasenkom</p>';
    return {footer}
}
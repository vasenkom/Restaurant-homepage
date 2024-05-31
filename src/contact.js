import _ from 'lodash';
import './style.css';

import map from './img/map2.png';

export function contactMapAdd () {

    const contactMainBlock = document.createElement('div');
    contactMainBlock.classList.add('main');

    // Contact info
    const contactSection = document.createElement('div');
    contactSection.classList.add('contact');

    const h1ContactSection = document.createElement('h2');
    h1ContactSection.textContent = "Where can you find us?";
    contactSection.appendChild(h1ContactSection);

    const infoContactSection = document.createElement('div');
    infoContactSection.classList.add('contact-table');

    const textInfoContactSection = document.createElement('div');
    textInfoContactSection.classList.add('contact-text');
    textInfoContactSection.innerHTML = '<p>Happy street 1</p> <p>Happy town, Happiness 111111</p> <p>MON-FRI 10:00 - 21:00</p>'
    infoContactSection.appendChild(textInfoContactSection);

    const mapInfoContactSection = new Image();
    mapInfoContactSection.src = map;
    infoContactSection.appendChild(mapInfoContactSection);

    contactSection.appendChild(infoContactSection);

    contactMainBlock.appendChild(contactSection);

    return {contactMainBlock}    
}
import _ from 'lodash';
import './style.css';
import poke1 from './img/poke1.jpg';
import poke2 from './img/poke2.jpg';
import poke3 from './img/poke3.jpg';
import poke4 from './img/poke4.jpg';
import side1 from './img/side1.jpg';
import side2 from './img/side2.jpg';
import map from './img/map2.png';

export function heroAdd () {
    // Main block with hero-section, menu and contact included
    const mainBlock = document.createElement('div');
    mainBlock.classList.add('main');

    // Hero section
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section');
    
    const heroSectionText = document.createElement('div');
    heroSectionText.classList.add('hero-section-text');
    
    const heroSectionFreshText = document.createElement('p');
    heroSectionFreshText.textContent = 'FRESH AND TASTY';
    heroSectionText.appendChild(heroSectionFreshText);

    const heroSectionH1 = document.createElement('h1');
    heroSectionH1.textContent = 'POKE AND MORE';
    heroSectionText.appendChild(heroSectionH1);

    const heroSectionButton = document.createElement('button');
    heroSectionButton.textContent = 'CHECK MENU';
    heroSectionText.appendChild(heroSectionButton);

    heroSection.appendChild(heroSectionText);
    mainBlock.appendChild(heroSection);

    return {mainBlock}
}
import _ from 'lodash';
import './style.css';
import poke1 from './img/poke1.jpg';
import poke2 from './img/poke2.jpg';
import poke3 from './img/poke3.jpg';
import poke4 from './img/poke4.jpg';
import side1 from './img/side1.jpg';
import side2 from './img/side2.jpg';
import map from './img/map2.png';
const contentBox = document.querySelector('#content');

export function componentAdd () {
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

    // Menu section
    const menuSection = document.createElement('div');
    menuSection.classList.add('menu');

    const h1MenuSection = document.createElement('h1');
    h1MenuSection.textContent = "TODAY'S MENU";
    menuSection.appendChild(h1MenuSection);

    const mainDishMenu = document.createElement('div');
    mainDishMenu.classList.add('menu-choice');
    mainDishMenu.classList.add('main');

    const h2MainDishMeni = document.createElement('h2');
    h2MainDishMeni.textContent = 'MAIN DISH';
    mainDishMenu.appendChild(h2MainDishMeni);

    const foodMenu = document.createElement('div');
    foodMenu.classList.add('food');

    // the first poke
    const pokeCard1 = document.createElement('div');
    pokeCard1.classList.add('card');

    const poke1Img = new Image();
    poke1Img.src = poke4;
    pokeCard1.appendChild(poke1Img);

    const namePokeCard1 = document.createElement('p');
    namePokeCard1.textContent = 'ZenZest Poke Bowl';
    pokeCard1.appendChild(namePokeCard1);

    const pricePokeCard1 = document.createElement('p');
    pricePokeCard1.textContent = '15$';
    pokeCard1.appendChild(pricePokeCard1);
    
    foodMenu.appendChild(pokeCard1);

    // the second poke
    const pokeCard2 = document.createElement('div');
    pokeCard2.classList.add('card');

    const poke2Img = new Image();
    poke2Img.src = poke2;
    pokeCard2.appendChild(poke2Img);

    const namePokeCard2 = document.createElement('p');
    namePokeCard2.textContent = 'Aloha Bliss Bowl';
    pokeCard2.appendChild(namePokeCard2);

    const pricePokeCard2 = document.createElement('p');
    pricePokeCard2.textContent = '15$';
    pokeCard2.appendChild(pricePokeCard2);
    
    foodMenu.appendChild(pokeCard2);

    // the third poke
    const pokeCard3 = document.createElement('div');
    pokeCard3.classList.add('card');

    const poke3Img = new Image();
    poke3Img.src = poke3;
    pokeCard3.appendChild(poke3Img);

    const namePokeCard3 = document.createElement('p');
    namePokeCard3.textContent = 'Garden Grove Bowl';
    pokeCard3.appendChild(namePokeCard3);

    const pricePokeCard3 = document.createElement('p');
    pricePokeCard3.textContent = '15$';
    pokeCard3.appendChild(pricePokeCard3);

    foodMenu.appendChild(pokeCard3);

    // Side dish menu

    const sideDishMenu = document.createElement('div');
    sideDishMenu.classList.add('menu-choice');
    sideDishMenu.classList.add('sided');

    const h2SideDishMenu = document.createElement('h2');
    h2SideDishMenu.textContent = 'SIDE DISH';
    sideDishMenu.appendChild(h2SideDishMenu);

    const foodSideDishMenu = document.createElement('div');
    foodSideDishMenu.classList.add('food');

    // the first side dish
    const sideCard1 = document.createElement('div');
    sideCard1.classList.add('card');

    const side1Img = new Image();
    side1Img.src = side1;
    sideCard1.appendChild(side1Img);

    const nameSideCard1 = document.createElement('p');
    nameSideCard1.textContent = 'Dumpling Oasis';
    sideCard1.appendChild(nameSideCard1);

    const priceSideCard1 = document.createElement('p');
    priceSideCard1.textContent = '10$';
    sideCard1.appendChild(priceSideCard1);
    
    foodSideDishMenu.appendChild(sideCard1);

    // the second side dish
    const sideCard2 = document.createElement('div');
    sideCard2.classList.add('card');

    const side2Img = new Image();
    side2Img.src = side2;
    sideCard2.appendChild(side2Img);

    const nameSideCard2 = document.createElement('p');
    nameSideCard2.textContent = 'Safari Spice Salad';
    sideCard2.appendChild(nameSideCard2);

    const priceSideCard2 = document.createElement('p');
    priceSideCard2.textContent = '13$';
    sideCard2.appendChild(priceSideCard2);
    
    foodSideDishMenu.appendChild(sideCard2);

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

    // Footer
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = '<p>by vasenkom</p>'

    mainDishMenu.appendChild(foodMenu);
    sideDishMenu.appendChild(foodSideDishMenu);
    menuSection.appendChild(mainDishMenu);
    menuSection.appendChild(sideDishMenu);
    mainBlock.appendChild(menuSection);
    mainBlock.appendChild(contactSection);

    return {mainBlock, footer}    
}
// const { mainBlock, footer } = componentAdd();
// contentBox.appendChild(mainBlock);
// contentBox.appendChild(footer);
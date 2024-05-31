import _ from 'lodash';
import './style.css';

import { contactMapAdd } from './contact.js'
import { menuAdd } from './menu.js'

import { heroAdd } from './hero.js'
import { footerAdd } from './footer.js';

const contentBox = document.querySelector('#content');

const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

function loadHome() {
    // Clear previous content
    contentBox.innerHTML = '';

    //add hero section
    const {mainBlock} = heroAdd();
    contentBox.appendChild(mainBlock);

    //add menu section
    const {menuMainBlock} = menuAdd();
    contentBox.appendChild(menuMainBlock);

    //add contact section
    const {contactMainBlock} = contactMapAdd();
    contentBox.appendChild(contactMainBlock);

    //add footer section
    const {footer} = footerAdd();
    contentBox.appendChild(footer);
}

// Load home content initially
loadHome();

homeBtn.addEventListener('click', loadHome);

menuBtn.addEventListener('click', function() {
    contentBox.innerHTML = '';
    // Load menu content
    const {menuMainBlock} = menuAdd();
    contentBox.appendChild(menuMainBlock);

    //add footer section
    const {footer} = footerAdd();
    contentBox.appendChild(footer);
})

contactBtn.addEventListener('click', function() {
    contentBox.innerHTML = '';

    // Load contact content
    const {contactMainBlock} = contactMapAdd();
    contentBox.appendChild(contactMainBlock);

    //add footer section
    const {footer} = footerAdd();
    contentBox.appendChild(footer);
})
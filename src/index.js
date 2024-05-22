import _ from 'lodash';
import './style.css';

import {contactMapAdd} from './contact.js'
import {menuAdd} from './menu.js'
import {componentAdd} from './home.js'

const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

homeBtn.addEventListener('click', function() {
    const { mainBlock, footer } = componentAdd();
    contentBox.appendChild(mainBlock);
    contentBox.appendChild(footer);
})

menuBtn.addEventListener('click', function() {
    contactMapAdd();
})

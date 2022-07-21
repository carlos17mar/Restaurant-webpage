import './style.css';
import createHeader from './header.js';
import _ from 'lodash';

const container = document.getElementById('container')
const header = container.appendChild(createHeader());

const button1 = document.createElement('button');
button1.innerHTML = 'Menu';

header.appendChild(button1);

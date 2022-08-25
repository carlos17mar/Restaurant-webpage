import './style.css';
import createHeader from './header.js';
import _ from 'lodash';
//En el index simplemente crear una funcion que sea crearWeb()
//Crear otro archivo js que inicialice todas las funciones.
//Crear un archivo para cada funcionalidad.



const container = document.getElementById('container')
const header = container.appendChild(createHeader());

const button1 = document.createElement('button');
button1.innerHTML = 'Menu';
header.appendChild(button1);
button1.setAttribute('class','bg-sky-500 hover:bg-sky-700 ...');
button1.addEventListener("click",()=>(
    console.log('Carlos')));

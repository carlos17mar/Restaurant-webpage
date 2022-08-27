import './style.css';
import createnavBar from './header.js';
import _ from 'lodash';

//En el index simplemente crear una funcion que sea crearWeb()
//Crear otro archivo js que inicialice todas las funciones.
//Crear un archivo para cada funcionalidad.


const container = document.getElementById('container')
const header = container.appendChild(createnavBar());


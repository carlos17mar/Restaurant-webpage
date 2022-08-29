import './style.css';
import createnavBar from './header.js';
import createHome from './home';
//En el index simplemente crear una funcion que sea crearWeb()
//Crear otro archivo js que inicialice todas las funciones.
//Crear un archivo para cada funcionalidad.

const content = document.getElementById('content')
const container = document.getElementById('container')
const header = container.appendChild(createnavBar());
const home = content.appendChild(createHome());



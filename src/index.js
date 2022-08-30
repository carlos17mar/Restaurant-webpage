import './style.css';
import createnavBar from './header.js';
import createHome from './home';
//En el index simplemente crear una funcion que sea crearWeb()
//Crear otro archivo js que inicialice todas las funciones.
//Crear un archivo para cada funcionalidad.

const content = document.getElementById('content')
const container = document.getElementById('container')
const header = container.appendChild(createnavBar());
const home = createHome();
content.appendChild(home);
//Permite despejar el div principal y apendizar el nodo deseado.
function apendizar(nodo){
    content.textContent='';
    content.appendChild(nodo);

}

const homeButton = document.getElementById('home');
homeButton.addEventListener('click',()=>(
apendizar(home)
));
const menuButton = document.getElementById('menu');
menuButton.addEventListener('click',()=>(
   console.log('hola') 
));
const aboutButton = document.getElementById('about');
aboutButton.addEventListener('click',()=>(
content.textContent=''
));
const contactoButton = document.getElementById('contacto');
contactoButton.addEventListener('click',()=>(
content.textContent=''
));

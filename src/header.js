import Logo from "./img/logo.png";

export default function createnavBar() {
  //Creamos la NavBar
  const navBar = document.createElement("nav");
  //Creamos el div contenedor
  const container = document.createElement("div");

  //Seteamos los atributos del elemento nav
  navBar.setAttribute(
    "class",
    "bg-red-600 border-gray-200 px-2 sm:px-5 py-2.15 rounded dark:bg-gray-900"
  );
  //Seteamos los atributos del div contenedor
  container.setAttribute(
    "class",
    "container flex flex-wrap justify-between items-center mx-auto"
  );
  //Creamos un hipervinculo que nos lleve al inicio
  const a = document.createElement("a");
  //Aqui lo hay que implementar la funcion que nos ponga el estado por default, ya que todo esta generado por JS no hay un url.
  a.setAttribute("class", "flex items-center");

  //Insertamos el logo en el hipervinculo
  const logo = new Image();
  logo.src = Logo;
  logo.setAttribute("class", "px-py mr-16 h-24 sm:h-30");
  a.appendChild(logo);
  const span = document.createElement("span");
  span.innerHTML = "Los Pollos Hermanos";
  span.setAttribute(
    "class",
    "text-white self-center text-4xl font-semibold whitespace-nowrap dark:text-white"
  );
  a.appendChild(span);
  //Creamos los botones
  const buttonBar = document.createElement("div");

  const home = document.createElement("button");
  home.innerHTML = "Inicio";
  home.setAttribute(
    "class",
    "text-lg no-underline text-white hover:text-black ml-2"
  );
  buttonBar.appendChild(home);

  const menu = document.createElement("button");
  menu.innerHTML = "Menu";
  menu.setAttribute(
    "class",
    "text-lg no-underline text-white hover:text-black ml-2"
  );
  buttonBar.appendChild(menu);

  const about= document.createElement("button");
  about.innerHTML = "Conocenos";
  about.setAttribute(
    "class",
    "text-lg no-underline text-white hover:text-black ml-2"
  );
  buttonBar.appendChild(about);

  const contacto= document.createElement("button");
  contacto.innerHTML = "Contacto";
  contacto.setAttribute(
    "class",
    "text-lg no-underline text-white hover:text-black ml-2"
  );
  buttonBar.appendChild(contacto);



  container.appendChild(a);
  navBar.appendChild(container);
  container.appendChild(buttonBar);
  

  return navBar;
}

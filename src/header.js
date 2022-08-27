import Logo from "./img/logo.png";

export default function createnavBar() {
  //Creamos la NavBar
  const navBar = document.createElement("nav");
  //Creamos el div contenedor
  const container = document.createElement("div");

  //Seteamos los atributos del elemento nav
  navBar.setAttribute(
    "class",
    "bg-red-600 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
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
  logo.setAttribute("class", "mr-16 h-24 sm:h-30");
  a.appendChild(logo);
  const span = document.createElement("span");
  span.innerHTML = "Los Pollos Hermanos";
  span.setAttribute(
    "class",
    "text-white self-center text-4xl font-semibold whitespace-nowrap dark:text-white"
  );
  a.appendChild(span);
  //Creamos los botones

  //Creamos el div que contiene los botones
  const listDiv = document.createElement("div");
  listDiv.setAttribute("class", "hidden w-full md:block md:w-auto");
  listDiv.setAttribute("id", "navbar-default");
  //Creamos la lista
  const list = document.createElement("ul");
  list.setAttribute(
    "class",
    "flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
  );
  //Creamos los botones.
  //Home
  const liHome = document.createElement("li");
  list.appendChild(liHome);
  const homeButton = document.createElement("button");
  homeButton.innerHTML = "Inicio";
  homeButton.setAttribute(
    "class",
    "flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
  );
  liHome.appendChild(homeButton);
//Menu
  const liMenu = document.createElement("li");
  list.appendChild(liMenu);
  const menuButton = document.createElement("button");
  menuButton.innerHTML = "Menu";
  menuButton.setAttribute(
    "class",
    "flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
  );
  liMenu.appendChild(menuButton);
//Contacto

  const liContacto = document.createElement("li");
  list.appendChild(liContacto);
  const contactoButton = document.createElement("button");
  contactoButton.innerHTML = "contacto";
  contactoButton.setAttribute(
    "class",
    "flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
  );
  liMenu.appendChild(contactoButton);

  listDiv.appendChild(list);
  container.appendChild(a);
  container.appendChild(listDiv);

  navBar.appendChild(container);
  return navBar;
}

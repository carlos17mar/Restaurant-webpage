export default function createHeader() {
  const element = document.createElement("nav");
  const h1 = document.createElement('h1');
//Titulo

  element.setAttribute('class','bg-sky-500');
  h1.innerHTML = "Restaurante pepe";
h1.setAttribute('class','text-3xl underline flex items-cente');  
  element.appendChild(h1);




  return element;
}



export default function createHeader() {
  const element = document.createElement("div");
  const h1 = document.createElement('h1');

  element.setAttribute('class','header');
  h1.innerHTML = "Restaurante pepe";
  element.appendChild(h1);

  return element;
}

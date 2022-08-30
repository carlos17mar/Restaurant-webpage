export default function createMenu() {
  const menu = document.createElement("div");
  const mainSection = document.createElement("section");

  const div1 = document.createElement("div");
  div1.setAttribute("class", "max-w-screen-xl px-4 py-8 mx-auto");
  const div2 = document.createElement("div");
  div1.appendChild(div2);
  const span1 = document.createElement("span");
  span1.setAttribute("class", "inline-block w-12 h-1 bg-red-700");
  div2.appendChild(span1);

  const title = document.createElement("h2");
  title.setAttribute(
    "class",
    "mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl"
  );
  title.innerHTML = "Menu:";
  div2.appendChild(title);

  const div3 = document.createElement("div");
  div3.setAttribute(
    "class",
    "grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8"
  );
  const a1 = document.createElement("a");
  a1.setAttribute("class", "block");
  div3.appendChild(a1);
  const div31 = document.createElement("div");
  const strong1 = document.createElement("strong");
  div31.appendChild(strong1);
  //Imagenes de los productos
  //Producto1
  const img1 = document.createElement("img");
  img1.setAttribute("class", "object-cover w-full -mt-3 h-96");
  img1.setAttribute(
    "src",
    "https://m.media-amazon.com/images/I/91pYwG-ArJL._SS500_.jpg"
  );
  a1.appendChild(img1);

  const h5Bucket = document.createElement("h5");
  h5Bucket.setAttribute("class", "mt-4 text-m text-black/90");
  h5Bucket.innerHTML = "El cubo de los hermanos!";
  a1.appendChild(h5Bucket);

  const div32 = document.createElement("div");
  div32.setAttribute(
    "class",
    "flex items-center justify-between mt-4 font-bold"
  );
  const p1 = document.createElement("p");
  p1.setAttribute("class", "text-lg");
  p1.innerHTML = "17.99$";
  div32.appendChild(p1);
  const p2 = document.createElement("p");
  p2.setAttribute("class", "text-l");
  p2.innerHTML = "17 Piezas de pollo.";
  div32.appendChild(p2);
  a1.appendChild(div32);
  //Producto 2
  const a2 = document.createElement("a");
  a2.setAttribute("class", "block");

  div3.appendChild(a2);
  const img2 = document.createElement("img");
  img2.setAttribute(
    "class",
    "object-cover w-full -mt-3 h-96 scale-50 hover:scale-75"
  );
  img2.setAttribute(
    "src",
    "https://cdn.concreteplayground.com/content/uploads/2019/08/Thirsty-Bird-Newtown-supplied-01.jpg"
  );
  a2.appendChild(img2);

  const h5Burger = document.createElement("h5");
  h5Burger.setAttribute("class", "mt-4 text-m text-black/90");
  h5Burger.innerHTML = "El pollito!";
  a2.appendChild(h5Burger);

  const div33 = document.createElement("div");
  div33.setAttribute(
    "class",
    "flex items-center justify-between mt-4 font-bold"
  );
  const p3 = document.createElement("p");
  p3.setAttribute("class", "text-lg");
  p3.innerHTML = "8.99$";
  div33.appendChild(p3);
  const p4 = document.createElement("p");
  p4.setAttribute("class", "text-l");
  p4.innerHTML = "Sanwich de pollo clasica";
  div33.appendChild(p4);
  a2.appendChild(div33);

  div1.appendChild(div3);
  mainSection.appendChild(div1);
  menu.appendChild(mainSection);
  return menu;
}

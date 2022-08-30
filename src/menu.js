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
  div1.appendChild(div3);


  div1.appendChild(div3);
  mainSection.appendChild(div1);
  menu.appendChild(mainSection);
  return menu;
}

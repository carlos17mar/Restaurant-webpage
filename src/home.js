import bg from "./img/homeBackground.jpg";

export default function createHome() {
  //Div que almacena todo
  const home = document.createElement("div");
  home.setAttribute("class", "relative");
  //
  const section = document.createElement("section");
  section.setAttribute("class", "relative bg-white font-burrito");
  //El gradiente blanco que overlapea la imagen
  const gradient = document.createElement("div");

  gradient.setAttribute(
    "class",
    "hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"
  );
  //La imagen
  const Background = new Image();
  Background.src = bg;
  Background.setAttribute(
    "class",
    "absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
  );

  const letterSpace = document.createElement("div");
  letterSpace.setAttribute(
    "class",
    "relative max-w-screen-xl px-4 py-32 mx-auto pl-10 lg:h-screen lg:items-center lg:flex"
  );

  const letterSpaceSon = document.createElement("div");
  letterSpaceSon.setAttribute("class", "pr-30 max-w-xl text-center sm:text-left");
  letterSpace.appendChild(letterSpaceSon);

  const title = document.createElement("h1");
  title.setAttribute("class", "	text-3xl sm:text-6xl");
  title.innerHTML = "Los Pollos Hermanos";
 
  const subtitle = document.createElement('h3');
    subtitle.setAttribute('class','pr-20 text-green-700 sm:block');
    subtitle.innerHTML='Un sabor familiar!';
    title.appendChild(subtitle);
  letterSpaceSon.appendChild(title);
 const video = document.createElement('iframe');
 video.setAttribute('width','900');
 video.setAttribute('height','480');
 video.setAttribute('class','pl-20');

 video.setAttribute('src','https://www.youtube.com/embed/f7xj_hn1euM?autoplay=1&mute=1&loop=1?controls=0');
letterSpace.appendChild(video)


  section.appendChild(Background);
  section.appendChild(gradient);
  section.appendChild(letterSpace);
  home.appendChild(section);
  return section;
}

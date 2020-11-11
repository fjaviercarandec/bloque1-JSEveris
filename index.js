// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];

for (let i = 0; i < colorList.length; i++) {
  let ul = document.querySelector(".color-list");
  let li = document.createElement("li");
  li.classList.add("color-item");
  if (!(i % 2 == 0)) {
    li.classList.add("color-item--odd");
  }
  let divColor = document.createElement("div");
  divColor.classList.add("color-name");
  divColor.textContent = "Color: " + colorList[i].colorName;
  let divMuestra = document.createElement("div");
  divMuestra.classList.add("color-show");
  divMuestra.textContent = "Muestra";
  divMuestra.style.backgroundColor = colorList[i].hex;
  divMuestra.style.border = "1px dashed";
  let buttonColor = document.createElement("button");
  buttonColor.classList.add("color-set");
  buttonColor.textContent = "Next item color";
  let buttonPage = document.createElement("button");
  buttonPage.classList.add("color-set");
  buttonPage.textContent = "Page Color";

  ul.appendChild(li);
  li.appendChild(divColor);
  li.appendChild(divMuestra);
  li.appendChild(buttonColor);
  li.appendChild(buttonPage);

  document.querySelectorAll("li")[i + 1].addEventListener("click", event => {
    event.stopPropagation();
    alert(colorList[i].colorName);
  });
}

for (let j = 0; j < 16; j++) {
  document
    .querySelectorAll(".color-set")
    [j].addEventListener("click", event => {
      event.stopPropagation();
      let auxLi = document.querySelectorAll("li");
      switch (j) {
        case 0:
          auxLi[2].style.backgroundColor = colorList[0].hex;
          break;
        case 1:
          document.querySelector("body").style.backgroundColor =
            colorList[0].hex;
          break;
        case 2:
          auxLi[3].style.backgroundColor = colorList[1].hex;
          break;
        case 3:
          document.querySelector("body").style.backgroundColor =
            colorList[1].hex;
          break;
        case 4:
          auxLi[4].style.backgroundColor = colorList[2].hex;
          break;
        case 5:
          document.querySelector("body").style.backgroundColor =
            colorList[2].hex;
          break;
        case 6:
          auxLi[5].style.backgroundColor = colorList[3].hex;
          break;
        case 7:
          document.querySelector("body").style.backgroundColor =
            colorList[3].hex;
          break;
        case 8:
          auxLi[6].style.backgroundColor = colorList[4].hex;
          break;
        case 9:
          document.querySelector("body").style.backgroundColor =
            colorList[4].hex;
          break;
        case 10:
          auxLi[7].style.backgroundColor = colorList[5].hex;
          break;
        case 11:
          document.querySelector("body").style.backgroundColor =
            colorList[5].hex;
          break;
        case 12:
          auxLi[8].style.backgroundColor = colorList[6].hex;
          break;
        case 13:
          document.querySelector("body").style.backgroundColor =
            colorList[6].hex;
          break;
        case 14:
          auxLi[1].style.backgroundColor = colorList[7].hex;
          break;
        case 15:
          document.querySelector("body").style.backgroundColor =
            colorList[7].hex;
          break;
      }
    });
}

document.querySelector("body").addEventListener("click", () => alert("body"));
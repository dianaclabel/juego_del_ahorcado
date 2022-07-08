var canvas = document.querySelector("canvas");

var pincel = canvas.getContext("2d");

pincel.fillStyle = "gray";
pincel.fillRect(0, 0, 1200, 600);

//piso de la horca
/*pincel.beginPath();
pincel.moveTo(400, 550);
pincel.lineTo(700, 550);
pincel.stroke();

//palo de la horca
pincel.beginPath();
pincel.moveTo(500, 100);
pincel.lineTo(500, 550);
pincel.stroke();

//parte superior de la horca
pincel.beginPath();
pincel.moveTo(500, 100);
pincel.lineTo(650, 100);
pincel.stroke();

//barra corta de la horca
pincel.beginPath();
pincel.moveTo(650, 100);
pincel.lineTo(650, 160);
pincel.stroke();

//cabeza
pincel.beginPath();
pincel.arc(650, 200, 40, 0, Math.PI * 2);
pincel.stroke();

//cuerpo
pincel.beginPath();
pincel.moveTo(650, 240);
pincel.lineTo(650, 400);
pincel.stroke();

//manos
pincel.beginPath();
pincel.moveTo(650, 260);
pincel.lineTo(630, 350);
pincel.moveTo(650, 260);
pincel.lineTo(680, 350);
pincel.stroke();

//piernas
pincel.beginPath();
pincel.moveTo(650, 400);
pincel.lineTo(630, 490);
pincel.moveTo(650, 400);
pincel.lineTo(680, 490);
pincel.stroke();

*/
//funcion de canvas reducido
/*
const dibujarHorca = function (x, y, a, b) {
  pincel.beginPath();
  pincel.moveTo(100 * x, 100 * y);
  pincel.lineTo(100 * a, 100 * b);
  pincel.stroke();
};

const dibujarcabezaHorca = function (x, y) {
  pincel.beginPath();
  pincel.arc(100 * x, 100 * y, 40, 0, Math.PI * 2);
  pincel.stroke();
};

dibujarHorca(4, 5.5, 7, 5.5, 0, 0);
dibujarHorca(5, 1, 5, 5.5);
dibujarHorca(5, 1, 6.5, 1);
dibujarHorca(6.5, 1, 6.5, 1.6);
dibujarHorca(6.5, 2);
dibujarHorca(6.5, 2.4, 6.5, 4);
dibujarcabezaHorca(6.5, 2);
dibujarHorca(6.5, 2.6, 6.3, 3.5);
dibujarHorca(6.5, 2.6, 6.8, 3.5);
dibujarHorca(6.5, 4, 6.3, 4.9);
dibujarHorca(6.5, 4, 6.8, 4.9);
*/
//------------ palabra aleatoria-----
let scripts = document.querySelector(".hanged__word");
let button = document.querySelector(".button--start");

button.addEventListener("click", function () {
  borrar();
  escogerPalabra();
});

let words = [
  "respeto",
  "solidaridad",
  "empatia",
  "puntualidad",
  "responsabilidad",
];

let word;

function escogerPalabra() {
  borrar();
  let sorteo = Math.random() * (words.length - 1);
  let index = Math.round(sorteo);
  word = words[index];
  dibujarLineas();
}

function dibujarLineas() {
  for (let i = 0; i < word.length; i++) {
    let div = document.createElement("div");
    div.textContent = word[i];
    div.className = "script__word";
    scripts.appendChild(div);
  }
}

function borrar() {
  document.getElementsByClassName(".script__word").remove();
}

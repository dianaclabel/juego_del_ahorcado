let palabras = [
  "respeto",
  "solidaridad",
  "empatia",
  "puntualidad",
  "responsabilidad",
];

let palabraSecreta;
let letras = [];
let palabrasCorrectas = "";
let errores = 9;
let tablero = document.querySelector("canvas").getContext("2d");
tablero.fillStyle = "gray";
tablero.fillRect(0, 0, 1200, 700);

function escogerPalabra() {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraSecreta = palabra;
  console.log(palabraSecreta);
  return palabraSecreta;
}

function dibujarLineas() {
  tablero.linetWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.strokeStyle = "#440093";
  tablero.beginPath();

  let ancho = 850 / palabraSecreta.length;
  console.log(ancho);

  for (let i = 0; i < palabraSecreta.length; i++) {
    tablero.moveTo(200 + ancho * i, 500);
    tablero.lineTo(250 + ancho * i, 500);
  }

  tablero.stroke();
  tablero.closePath();
}

dibujarLineas(escogerPalabra());

function escribirLetraCorrecta(index) {
  tablero.font = "bold 52px roboto";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#440093";
  let ancho = 850 / palabraSecreta.length;
  tablero.fillText(palabraSecreta[index], 200 + ancho * index, 500);
}

function escribirLetraInorrecta(letra, erroresleft) {
  tablero.font = "bold 40px roboto";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#440093";

  tablero.fill;
}

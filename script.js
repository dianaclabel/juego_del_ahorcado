var canvas = document.querySelector("canvas");
var pincel = canvas.getContext("2d");

let palabras = [
  "respeto",
  "solidaridad",
  "empatia",
  "puntualidad",
  "responsabilidad",
];

function escogerPalabra() {
  let sorteo = Math.random() * (palabras.length - 1);
  let index = Math.round(sorteo);
  palabraSecreta = palabras[index];
  console.log(palabraSecreta);
  return palabraSecreta;
}

function dibujarLineas() {
  canvas.linetWidth = 5;
  canvas.lineCap = "round";
  canvas.lineJoin = "round";
  canvas.strokeStyle = "#440093";
  canvas.beginPath();

  let ancho = 600 / palabraSecreta.length;

  for (let i = 0; i < palabraSecreta.length; i++) {
    canvas.moveTo(500 + ancho * i, 640);
    canvas.lineTo(550 + ancho * i, 640);
  }

  canvas.stroke();
  canvas.closePath();
}

dibujarLineas(escogerPalabra());

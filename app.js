// Lógica principal del ahorcado

const PALABRAS = ["cocina", "baño", "aguacate", "manzana"];
const MAX_INCORRECTOS = 9;

let estado = ""; // "jugando" | "gana" | "pierde"
let palabra = ""; // Palabra al azar
let correctas = [];
let incorrectas = [];

function inicializar() {
  palabra = PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
  incorrectas = [];
  correctas = palabra.split("").map((c) => "_");
  estado = "jugando";
}

function intentar(letra) {
  // La palabra incluye la letra ingresada?
  if (palabra.includes(letra)) {
    // Agregar la letra al conjunto de correctas
    for (let i = 0; i < correctas.length; i++) {
      if (palabra[i] === letra) {
        correctas[i] = letra;
      }
    }

    // Completa la palabra?
    if (!correctas.includes("_")) {
      estado = "gana";
    }
  } else {
    // Agregar la letra al conjunto de incorrectas si aún no está
    if (!incorrectas.includes(letra)) {
      incorrectas.push(letra);
    }

    // Se terminan los intentos?
    if (incorrectas.length === MAX_INCORRECTOS) {
      estado = "pierde";
    }
  }
}

// Conexión con HTML e interactividad

const correctasDiv = document.getElementById("correctas");
const incorrectasDiv = document.getElementById("incorrectas");
const resultadoGanaDiv = document.getElementById("resultado-gana");
const resultadoPierdeDiv = document.getElementById("resultado-pierde");

let canvas = document.querySelector("canvas").getContext("2d");

function reinicio() {
  limpiarCanvas();
  inicializar();
  dibujar();
}

reinicio();

function dibujar() {
  correctasDiv.innerHTML = correctas.join(" ");
  console.log(correctas);
  incorrectasDiv.innerHTML = incorrectas.join(" ");
  dibujarAhorcado(incorrectas.length);

  if (estado === "gana") {
    resultadoGanaDiv.classList.remove("oculto");
  } else if (estado === "pierde") {
    resultadoPierdeDiv.classList.remove("oculto");
  } else {
    resultadoGanaDiv.classList.add("oculto");
    resultadoPierdeDiv.classList.add("oculto");
  }
}

window.addEventListener("keyup", (evento) => {
  if (estado === "jugando" && evento.key.length === 1) {
    intentar(evento.key.toLowerCase());
    dibujar();
  }
});

// Dibujo del ahorcado

function limpiarCanvas() {
  canvas.fillStyle = "transparent";
  canvas.clearRect(0, 0, 300, 200);
}

function dibujarAhorcado(cantIncorrectas) {
  const dibujarLinea = function (x, y, a, b) {
    canvas.beginPath();
    canvas.moveTo(30 * x, 30 * y);
    canvas.lineTo(30 * a, 30 * b);
    canvas.stroke();
  };

  const dibujarcabeza = function (x, y) {
    canvas.beginPath();
    canvas.arc(30 * x, 30 * y, 10, 0, Math.PI * 2);
    canvas.stroke();
  };

  switch (cantIncorrectas) {
    case 1:
      // Base
      dibujarLinea(4, 5.5, 7, 5.5, 0, 0);
      break;
    case 2:
      // Palo
      dibujarLinea(5, 1, 5, 5.5);
      break;
    case 3:
      // Arriba
      dibujarLinea(5, 1, 6.5, 1);
      break;
    case 4:
      // Cachito
      dibujarLinea(6.5, 1, 6.5, 1.6);
      break;
    case 5:
      dibujarcabeza(6.5, 2);
      break;
    case 6:
      dibujarLinea(6.5, 2.4, 6.5, 4);
      break;
    case 7:
      dibujarLinea(6.5, 2.6, 6.3, 3.5);
      break;
    case 8:
      dibujarLinea(6.5, 2.6, 6.8, 3.5);
      break;
    case 9:
      dibujarLinea(6.5, 4, 6.3, 4.9);
      dibujarLinea(6.5, 4, 6.8, 4.9);
      break;
  }
}

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

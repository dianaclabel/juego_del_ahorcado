var canvas = document.querySelector("canvas");

var pincel = canvas.getContext("2d");

pincel.fillStyle = "gray";
pincel.fillRect(0, 0, 1200, 600);

//piso de la horca
pincel.beginPath();
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
pincel.fillStyle = "black";
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

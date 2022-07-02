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

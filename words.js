const storedWords = JSON.parse(localStorage.getItem("palabrasGuardadas")) || []; // traer de local storage

const newWordForm = document.getElementById("new-word");

newWordForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(newWordForm);
  const word = formData.get("word").toLowerCase();

  storedWords.push(word); // agregar datos junto con los datos de local storage (memoria ram)

  localStorage.setItem("palabrasGuardadas", JSON.stringify(storedWords)); // convertir a string los datos nuevos y lo que estaba en el local storage, agregarlo nuevamente a locala storage.(disco duro)

  newWordForm.reset();
});

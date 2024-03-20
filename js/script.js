const encendido = document.querySelector(".encendido");
const body = document.querySelector("body");
const apagado = document.querySelector(".apagado");

console.log(encendido);

encendido.addEventListener("click", () => {
  encendido.classList.add("off");
  body.classList.add("dark");
  apagado.classList.remove("off");
});

apagado.addEventListener("click", () => {
  apagado.classList.add("off");
  body.classList.remove("dark");
  encendido.classList.remove("off");
});

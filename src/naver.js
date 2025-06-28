
import './main.js';
const boton1El = document.querySelector("#boton-1");
const boton2El = document.querySelector("#boton-2");
const boton3El = document.querySelector("#boton-3");
const boton4El = document.querySelector("#boton-4");
const boton5El = document.querySelector("#boton-5");
const boton6El = document.querySelector("#boton-6");
const boton7El = document.querySelector("#boton-7");
const boton8El = document.querySelector("#boton-8");


const imagen1 = 'url("./fondo1.avif")';
const imagen2 = 'url("./fondo2.avif")';
const imagen3 = 'url("./fondo3.avif")';
const imagen4 = 'url("./fondo4.avif")';
const imagen5 = 'url("./fondo5.avif")';
const imagen6 = 'url("./fondo6.avif")';
const imagen7 = 'url("./fondo7.avif")';
const imagen8 = 'url("./fondo8.avif")';


function cambiarImagenDeFondo(nuevaImagen) {
  document.body.style.backgroundImage = nuevaImagen;
}

document.addEventListener("DOMContentLoaded", () => {
  
  boton1El.addEventListener("click", () => {
    cambiarImagenDeFondo(imagen1);
  });

  boton2El.addEventListener("click", () => {
    cambiarImagenDeFondo(imagen2);
  });

  boton3El.addEventListener("click", () => {
    cambiarImagenDeFondo(imagen3);
  });

  boton4El.addEventListener("click", () => {
    cambiarImagenDeFondo(imagen4);
  });

   boton5El.addEventListener("click", () => {
    cambiarImagenDeFondo(imagen5);
  });

  boton6El.addEventListener("click", () => {
    cambiarImagenDeFondo(imagen6);
  });

  boton7El.addEventListener("click", () => {
    cambiarImagenDeFondo(imagen7);
  });

  boton8El.addEventListener("click", () => {
    cambiarImagenDeFondo(imagen8);
  });

})
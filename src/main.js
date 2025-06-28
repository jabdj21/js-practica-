import './style.css'
import './naver.js'

document.querySelector('#app').innerHTML =

`
  <div class="w-full h-screen bg-[url(./fondo2.avif)] bg-cover bg-center">

<div class="fixed bottom-0 left-0 w-full flex justify-center gap-4 py-4 z-50" id="botones">
   <div>
  <button id="boton-1" onclick="cambiarFondo('fondo1.avif')" class="bg-[url(./fondo1.avif)] bg-cover bg-center border-solid  size-16 px-6 py-2 rounded-lg shadow"  data-bg="./fondo1.avif">
  <img src="./fondo1.avif" alt="Fondo 1" class="w-full h-full object-cover rounded-lg">
  </button>

  <button id="boton-2" onclick="cambiarFondo('fondo2.avif')" class="bg-[url(./fondo2.avif)] bg-cover bg-center border-solid size-16 px-6 py-2 rounded-lg shadow" data-bg="./fondo2.avif">
  <img src="./fondo2.avif" alt="Fondo 2" class="w-full h-full object-cover rounded-lg">
  </button>

  <button id="boton-3" onclick="cambiarFondo('fondo3.avif')" class="bg-[url(./fondo3.avif)] bg-cover bg-center border-solid size-16 px-6 py-2 rounded-lg shadow" data-bg="./fondo3.avif">
  <img src="./fondo3.avif" alt="Fondo 3" class="w-full h-full object-cover rounded-lg">
  </button>

  <button id="boton-4" onclick="cambiarFondo('fondo4.avif')" class="bg-[url(./fondo4.avif)] bg-cover bg-center border-solid size-16 px-6 py-2 rounded-lg shadow" data-bg="./fondo4.avif">
  <img src="./fondo4.avif" alt="Fondo 4" class="w-full h-full object-cover rounded-lg">
  </button>

  <button id="boton-5" onclick="cambiarFondo('fondo5.avif')" class="bg-[url(./fondo5.avif)] bg-cover bg-center border-solid size-16 px-6 py-2 rounded-lg shadow" data-bg="./fondo5.avif">
  <img src="./fondo5.avif" alt="Fondo 5" class="w-full h-full object-cover rounded-lg">
  </button>

  <button id="boton-6" onclick="cambiarFondo('fondo6.avif')" class="bg-[url(./fondo6.avif)] bg-cover bg-center border-solid size-16 px-6 py-2 rounded-lg shadow" data-bg="./fondo6.avif">
  <img src="./fondo6.avif" alt="Fondo 6" class="w-full h-full object-cover rounded-lg">
  </button>

  <button id="boton-7" onclick="cambiarFondo('fondo7.avif')" class="bg-[url(./fondo7.avif)] bg-cover bg-center border-solid size-16 px-6 py-2 rounded-lg shadow" data-bg="./fondo7.avif">
  <img src="./fondo7.avif" alt="Fondo 7" class="w-full h-full object-cover rounded-lg">
  </button>

  <button id="8" onclick="cambiarFondo('fondo8.avif')" class="bg-[url(./fondo8.avif)] bg-cover bg-center border-solid size-16 px-6 py-2 rounded-lg shadow" data-bg="./fondo8.avif">
  <img src="./fondo8.avif" alt="Fondo 8" class="w-full h-full object-cover rounded-lg">
  </button>
  </div>
</div>
   

   


`


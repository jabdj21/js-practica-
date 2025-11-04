import './style.css';
import productos from './productos.js';
import categorias from './categorias.js';

// Estado global del carrito
let carrito = [];

// Función para renderizar la estructura principal de la página
function renderLayout() {
  const container = document.querySelector('#app');
  
  // Renderizar el layout principal (navbar, contenedor de productos, footer y el sidebar del carrito)
  container.innerHTML = `
    <nav class="w-full h-[100px] bg-black flex items-center text-white justify-between px-10 sticky top-0 z-20">
      <img src="./shopgle_cart2.png" class="h-[50px]" alt="Logo">
      
      <ul class="flex gap-4">
        <li><button class="btn btn-outline btn-primary"><a href="">Inicio</a></button></li>
        <li><button class="btn btn-outline btn-primary" id="btn-todas"><a href="#">Todas</a></button></li>
        <li>
          <details class="dropdown">
            <summary class="btn btn-outline btn-primary m-1">Categorias</summary>
            <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm" id="categorias-list">
              ${categorias.map(cat => `<li><a href="#" data-category="${cat.id}">${cat.nombre}</a></li>`).join('')}
            </ul>
          </details>
        </li>
        <li>
          <details class="dropdown">
            <summary class="btn btn-outline btn-primary m-1">Cambiar fondo</summary>
            <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a class="bg-change" data-color="bg-slate-600">Azul</a></li>
              <li><a class="bg-change" data-color="bg-gray-800">Gris</a></li>
              <li><a class="bg-change" data-color="bg-neutral-800">Neutro</a></li>
              <li><a class="bg-change" data-color="bg-green-800">Verde</a></li>
              <li><a class="bg-change" data-color="bg-indigo-800">Morado</a></li>
              <li><a class="bg-change" data-color="bg-rose-900">Rosa</a></li>
              <li><a class="bg-change" data-color="bg-cyan-900">Cian</a></li>
            </ul>
          </details>
        </li>
      </ul>
      
      <div class="flex items-center gap-4">
        <form id="search-form" class="flex items-center gap-2">
          <input class="border border-gray-300 bg-gray-600 p-2 rounded-lg" type="text" placeholder="Buscar..." id="search-input">
          <button class="bg-black border border-red-900 text-white p-2 rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-500" type="submit">Buscar</button>
        </form>
        
        <div class="relative">
          <button class="btn btn-outline btn-primary flex items-center gap-2" onclick="abrirCarrito()">
            🛒 Carrito
            <span class="badge badge-primary" id="carrito-badge">0</span>
          </button>
        </div>
      </div>
    </nav>
    
    <div class="bg-gray-800 text-white p-4 text-center">
      <div class="flex justify-center items-center gap-8">
        <span class="text-lg font-semibold" id="contador-productos">(0) Productos</span>
      </div>
    </div>
    
    <div class="products-container bg-slate-600 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="products-grid"></div>
    
    <aside id="carrito-sidebar" class="fixed top-0 right-0 h-full w-full max-w-md bg-base-100 shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out z-40 flex flex-col">
      <div class="p-4 border-b flex justify-between items-center">
        <h3 class="text-2xl font-bold">🛒 Tu Carrito</h3>
        <button class="btn btn-sm btn-circle" onclick="cerrarCarrito()">✕</button>
      </div>
      
      <div id="carrito-items-container" class="flex-grow p-4 overflow-y-auto space-y-4">
        </div>
      
      <div class="p-4 border-t space-y-4">
        <div class="flex justify-between items-center text-lg font-bold">
          <span>Total:</span>
          <span id="carrito-total">$0.00</span>
        </div>
        <div class="flex gap-2">
          <button class="btn flex-1" onclick="cerrarCarrito()">Seguir Comprando</button>
          <button class="btn btn-primary flex-1" onclick="finalizarCompra()">Finalizar Compra</button>
        </div>
      </div>
    </aside>

    <footer class="w-full h-[100px] bg-black flex items-center text-white justify-center p-10 gap-10">
      <button class="bg-black border border-red-900 text-white p-4 rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-500"><a href="/datos (2).rar">Datos</a></button>
      <button class="bg-black border border-red-900 text-white p-4 rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-500"><a href="/img (3).rar">Imagenes</a></button>
    </footer>
  `;
}

// Función para renderizar las cards de productos en la grilla
function renderProducts(productsToRender) {
  const productsGrid = document.getElementById('products-grid');
  productsGrid.innerHTML = '';

  if (productsToRender.length === 0) {
    productsGrid.innerHTML = `<p class="text-white col-span-full text-center">No se encontraron productos.</p>`;
  } else {
    productsToRender.forEach(producto => {
      const categoria = categorias.find(cat => cat.id === producto.category);
      const productIndex = productos.findIndex(p => p.nombre === producto.nombre);
      
      productsGrid.innerHTML += `
        <div class="card bg-base-100 shadow-sm">
          <figure class="px-10 pt-10">
            <img src="/img/productos2${producto.img}" alt="${producto.nombre}" class="rounded-xl h-48 object-contain" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${producto.nombre}</h2>
            <p class="text-sm">${categoria ? categoria.nombre : 'Sin categoría'}</p>
            <p class="font-bold text-lg">$${producto.price.toFixed(2)}</p>
            <div class="card-actions">
              <button class="btn" onclick="abrirModalDetalles(${productIndex})">Detalles</button>
              <button class="btn btn-primary" onclick="agregarAlCarrito(${productIndex})">Comprar</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  actualizarContadorProductos(productsToRender.length);
}

// Función para renderizar el contenido del carrito en el sidebar
function renderCarrito() {
  const carritoContainer = document.getElementById('carrito-items-container');
  const carritoTotalEl = document.getElementById('carrito-total');
  
  if (carrito.length === 0) {
    carritoContainer.innerHTML = `
      <div class="text-center py-8">
        <p class="text-lg mb-4">Tu carrito está vacío</p>
        <p class="text-gray-500">Agrega algunos productos para comenzar</p>
      </div>`;
  } else {
    carritoContainer.innerHTML = carrito.map((item, index) => `
      <div class="flex items-center justify-between p-2 bg-base-200 rounded-lg">
        <img src="/img/productos2${item.img}" alt="${item.nombre}" class="w-16 h-16 object-cover rounded">
        <div class="flex-grow mx-3">
          <div class="font-bold text-sm">${item.nombre}</div>
          <div class="text-primary font-semibold">$${item.price.toFixed(2)}</div>
        </div>
        <div class="flex items-center gap-2">
          <button class="btn btn-xs btn-outline" onclick="decrementarCantidad(${index})">-</button>
          <span class="font-bold">${item.cantidad}</span>
          <button class="btn btn-xs btn-outline" onclick="incrementarCantidad(${index})">+</button>
        </div>
        <button class="btn btn-ghost btn-sm ml-2 text-error" onclick="eliminarDelCarrito(${index})">
          🗑️
        </button>
      </div>
    `).join('');
  }
  
  // Calcular y mostrar el total
  const total = carrito.reduce((sum, item) => sum + (item.price * item.cantidad), 0);
  carritoTotalEl.textContent = `$${total.toFixed(2)}`;
}

// --- Funciones del Carrito (globales para los onclick) ---

window.agregarAlCarrito = function(index) {
  const producto = productos[index];
  const productoExistente = carrito.find(item => item.nombre === producto.nombre);
  
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  
  actualizarCarrito();
  mostrarNotificacion('✅ Producto agregado al carrito!');
};

window.eliminarDelCarrito = function(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
  mostrarNotificacion('🗑️ Producto eliminado del carrito');
};

window.incrementarCantidad = function(index) {
  carrito[index].cantidad++;
  actualizarCarrito();
};

window.decrementarCantidad = function(index) {
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad--;
  } else {
    // Si la cantidad es 1, eliminar el producto
    carrito.splice(index, 1);
  }
  actualizarCarrito();
};

window.abrirCarrito = function() {
  document.getElementById('carrito-sidebar').classList.remove('translate-x-full');
};

window.cerrarCarrito = function() {
  document.getElementById('carrito-sidebar').classList.add('translate-x-full');
};

window.finalizarCompra = function() {
  if (carrito.length === 0) return;
  
  const total = carrito.reduce((sum, item) => sum + (item.price * item.cantidad), 0);
  alert(`🎉 ¡Compra realizada con éxito!\n\nTotal: $${total.toFixed(2)}\n\n¡Gracias por tu compra!`);
  
  carrito = [];
  actualizarCarrito();
  cerrarCarrito();
};

// --- Funciones de Modales y Detalles ---

window.abrirModalDetalles = function(index) {
  // Primero, cerramos cualquier modal de detalles que ya esté abierto para evitar duplicados
  window.cerrarModalDetalles();

  const producto = productos[index];
  const categoria = categorias.find(cat => cat.id === producto.category);
  
  const modalHTML = `
    <dialog id="detalles-modal" class="modal modal-open">
      <div class="modal-box max-w-4xl">
        <h3 class="text-lg font-bold">${producto.nombre}</h3>
        <div class="flex gap-4 py-4">
          <img src="/img/productos2${producto.img}" alt="${producto.nombre}" class="w-1/3 rounded-lg" />
          <div class="w-2/3">
            <p class="font-semibold">Precio: $${producto.price.toFixed(2)}</p>
            <p class="font-semibold">Categoría: ${categoria ? categoria.nombre : 'Sin categoría'}</p>
            <p class="mt-2">${producto.description}</p>
          </div>
        </div>
        <div class="modal-action">
          <button class="btn" onclick="cerrarModalDetalles()">Salir</button>
          <button class="btn btn-primary" onclick="agregarAlCarrito(${index}); cerrarModalDetalles()">Agregar al Carrito</button>
        </div>
      </div>
    </dialog>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
};

window.cerrarModalDetalles = function() {
  const modal = document.getElementById('detalles-modal');
  if (modal) {
    modal.remove();
  }
};

// --- Funciones Auxiliares ---

function actualizarCarrito() {
  renderCarrito(); // Renderiza el contenido del sidebar
  
  // Actualiza el contador (badge) del carrito en el navbar
  const carritoBadge = document.getElementById('carrito-badge');
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  carritoBadge.textContent = totalItems;
}

function actualizarContadorProductos(cantidad) {
  const contadorProductos = document.getElementById('contador-productos');
  if (contadorProductos) {
    contadorProductos.textContent = `(${cantidad}) Productos`;
  }
}

function mostrarNotificacion(mensaje) {
  const notificacion = document.createElement('div');
  notificacion.className = 'fixed top-24 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform translate-x-full';
  notificacion.textContent = mensaje;
  document.body.appendChild(notificacion);
  
  setTimeout(() => {
    notificacion.classList.remove('translate-x-full');
  }, 10);
  
  setTimeout(() => {
    notificacion.classList.add('translate-x-full');
    setTimeout(() => notificacion.remove(), 300);
  }, 2000);
}

// --- Configuración de Event Listeners ---

function setupEventListeners() {
  // Filtrado por categoría
  document.querySelectorAll('#categorias-list a').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const categoryId = parseInt(item.getAttribute('data-category'));
      const filteredProducts = productos.filter(p => p.category === categoryId);
      renderProducts(filteredProducts);
    });
  });

  // Botón "Todas"
  document.getElementById('btn-todas')?.addEventListener('click', (e) => {
    e.preventDefault();
    renderProducts(productos);
  });

  // Cambio de fondo
  document.querySelectorAll('.bg-change').forEach(item => {
    item.addEventListener('click', () => {
      const colorClass = item.getAttribute('data-color');
      document.querySelector('.products-container').className = `products-container ${colorClass} p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`;
    });
  });

  // Búsqueda
  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = productos.filter(p => 
      p.nombre.toLowerCase().includes(searchTerm) || 
      p.description.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
  });
}

// --- Inicialización de la Aplicación ---
document.addEventListener('DOMContentLoaded', () => {
  renderLayout();
  renderProducts(productos);
  renderCarrito(); // Para asegurar que el carrito esté renderizado (vacío) al inicio
  setupEventListeners();
});
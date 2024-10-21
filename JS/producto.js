// Lista de productos
const productos = [
    {
        id: 1,
        nombre: "Celular Modelo A",
        descripcion: "Este celular cuenta con características de última tecnología, un excelente rendimiento y una cámara de alta calidad.",
        marca: "Marca A",
        precio: 299,
        stock: 50,
        categoria: "Celular",
        url_imagen: "https://http2.mlstatic.com/D_NQ_NP_828557-MLA75148190826_032024-O.webp"
    },
    {
        id: 2,
        nombre: "Celular Modelo B",
        descripcion: "Un teléfono con una pantalla impresionante y una duración de batería excepcional.",
        marca: "Marca B",
        precio: 399,
        stock: 30,
        categoria: "Celular",
        url_imagen: "https://acdn.mitiendanube.com/stores/105/049/products/combos-23-fd9fb1e217e72554be17044844111868-1024-1024.jpg"
    },
    {
        id: 3,
        nombre: "Funda Protectora",
        descripcion: "Funda de alta resistencia para proteger tu celular de caídas.",
        marca: "Marca C",
        precio: 19.99,
        stock: 100,
        categoria: "Accesorio",
        url_imagen: "https://acdn.mitiendanube.com/stores/001/474/949/products/productos-2021-04-17t002509-5411-a4af48b1df44ef73c716186300946688-640-0.png"
    },
    {
        id: 4,
        nombre: "Auriculares Inalámbricos",
        descripcion: "Auriculares Bluetooth con calidad de sonido superior.",
        marca: "Marca D",
        precio: 49.99,
        stock: 75,
        categoria: "Accesorio",
        url_imagen: "https://via.placeholder.com/500"
    }
];

// Función para cargar solo productos de la categoría "Celular"
function cargarProductos(categoria = null) {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';

    // Filtrar los productos según la categoría proporcionada
    const productosFiltrados = categoria ? productos.filter(producto => producto.categoria === categoria) : productos;

    productosFiltrados.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${producto.url_imagen}" alt="${producto.nombre}">
            <div class="card-body">
                <h5>${producto.nombre}</h5>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
                <button class="btn">Agregar al Carrito</button>
            </div>
        `;
        listaProductos.appendChild(card);
    });
}

document.getElementById('menu-btn').addEventListener('click', function() {
    const menuItems = document.getElementById('menu-items');
    menuItems.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
});

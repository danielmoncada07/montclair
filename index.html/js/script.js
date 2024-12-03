// Esperamos a que todo el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', function () {
    
    // Validación del formulario de contacto
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function (event) {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            if (!nombre || !email || !mensaje) {
                alert("Por favor, completa todos los campos.");
                event.preventDefault(); // Evitar que se envíe el formulario
            } else {
                alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
            }
        });
    }

    // Cambiar color de los botones de navegación al pasar el ratón
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.style.backgroundColor = '#555';
            link.style.color = '#fff';
        });
        link.addEventListener('mouseleave', function() {
            link.style.backgroundColor = 'transparent';
            link.style.color = '#fff';
        });
    });
});

let carrito = []; // Array para almacenar los productos del carrito

// Función para agregar productos al carrito
function agregarAlCarrito(nombreProducto, precioProducto, idBoton) {
    // Verificamos si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.nombre === nombreProducto);

    if (!productoExistente) {
        // Si no está en el carrito, lo agregamos
        const producto = {
            nombre: nombreProducto,
            precio: precioProducto
        };
        carrito.push(producto); // Agregar el producto al carrito

        // Cambiar el texto del botón a "Comprar"
        document.getElementById(idBoton).textContent = 'Comprar'; // Cambiar el texto del botón
        document.getElementById(idBoton).onclick = function () {
            realizarCompra(nombreProducto); // Llamar a la función de comprar cuando el producto ya está en el carrito
        };

        alert(nombreProducto + " ha sido añadido al carrito.");
    } else {
        alert(nombreProducto + " ya está en el carrito.");
    }

    // Actualizar el carrito visualmente
    mostrarCarrito();
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const listaCarrito = document.getElementById("carrito-lista");
    const totalCarrito = document.getElementById("total");
    listaCarrito.innerHTML = ''; // Limpiar el carrito antes de actualizarlo

    let total = 0;

    // Recorrer el carrito y agregar los productos a la lista
    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - ${producto.precio} HNL`;
        listaCarrito.appendChild(li);

        // Sumar el precio del producto al total
        total += producto.precio;
    });

    // Mostrar el total actualizado en la página
    totalCarrito.textContent = `Total: ${total} HNL`;
}

// Función para realizar la compra
function realizarCompra(producto) {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    alert(`¡Has comprado: ${producto}!`);

    // Aquí puedes agregar la lógica para procesar la compra

    // Vaciar el carrito después de la compra
    carrito = [];
    mostrarCarrito(); // Actualizar la vista del carrito
}
// Evitar el envío real del formulario y mostrar el mensaje de agradecimiento
document.getElementById("formulario-contacto").onsubmit = function(e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado (enviar el formulario)

    // Mostrar el mensaje de agradecimiento
    document.getElementById("agradecimiento").style.display = "block";

    // Ocultar el formulario después de enviar
    document.getElementById("formulario-contacto").style.display = "none";
};

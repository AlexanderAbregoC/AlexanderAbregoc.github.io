document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorCarrito = document.querySelector('.shop'); // Selecciona el contenedor del carrito

    carrito.forEach((producto) => {
        const box = document.createElement('div');
        box.className = 'box';
        box.innerHTML = `
            <img src="${producto.imagen}">
            <div class="content">
                <h3>${producto.nombreProducto}</h3>
                <h4>Price: $${producto.precio}</h4>
                <p class="unit">Quantity: <input name="" value="${producto.cantidad}"></p>
                <p class="btn-area"><i aria-hidden="true" class="fa fa-trash"></i> <span class="btn2">Remove</span></p>
            </div>
        `;
        contenedorCarrito.appendChild(box);
    });

    // Asegúrate de llamar a updateCart() aquí para actualizar los totales
    updateCart();
});

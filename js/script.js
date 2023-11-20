const sweetAlert = document.querySelector("#sweetAlert");

sweetAlert.addEventListener("click", () => {
    Swal.fire({
        title: 'Hecho!',
        text: '¿Agregar mas zapatillas?',
        icon: 'success',
        confirmButtonText: 'Si'
      })
})


document.addEventListener('DOMContentLoaded', function () {
    const productos = document.querySelectorAll('.producto');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    let total = 0;

    productos.forEach(producto => {
        const comprarBtn = producto.querySelector('.comprar');
        comprarBtn.addEventListener('click', () => {
            const nombre = producto.getAttribute('data-nombre');
            let precio;

            if (nombre === 'Jordan 1 Retro University Blue') {
                precio = 312.00;
            } else if (nombre === 'Jordan 1 Retro High OG Royal') {
                precio = 230.00;
            } else if (nombre === 'Jordan 1 Retro High Travis Scott') {
                precio = 1394.00;
            } else if (nombre === 'Jordan 1 Retro High Off-White University Blue'){
                precio = 1858.00;
            } else if (nombre === 'Jordan 1 Retro High Off-White Chicago'){
                precio = 5050.00;
            } else {
                precio = 50.00; 
            }

            Swal.fire({
                title: 'Hecho!',
                text: '¿Agregar más zapatillas?',
                icon: 'success',
                confirmButtonText: 'Sí'
            }).then((result) => {
                if (result.isConfirmed) {
                    const elementoCarrito = document.createElement('li');
                    elementoCarrito.innerHTML = `${nombre} - $${precio.toFixed(2)}`;
                
                    listaCarrito.appendChild(elementoCarrito);
                    
                    total += precio;
                    totalCarrito.textContent = total.toFixed(2);
                }
            });
        });
    });

    function borrarCarrito() {
        if (listaCarrito.childElementCount > 0) {
            Swal.fire({
                title: 'Vaciar Carrito',
                text: '¿Seguro que deseas vaciar el carrito?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, vaciar carrito'
            }).then((result) => {
                if (result.isConfirmed) {
                    listaCarrito.innerHTML = '';
                    total = 0;
                    totalCarrito.textContent = total.toFixed(2);
                    Swal.fire({
                        title: 'Carrito Vacío',
                        text: 'El carrito ha sido vaciado.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                }
            });
        } else {
            Swal.fire({
                title: 'Carrito Vacío',
                text: 'El carrito ya está vacío.',
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }
    }

    vaciarCarritoBtn.addEventListener('click', borrarCarrito);
});

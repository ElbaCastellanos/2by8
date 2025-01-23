// Submenús desplegables que solo abren hacia abajo
document.querySelectorAll('.menu-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        const submenu = this.nextElementSibling;
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            submenu.style.maxHeight = submenu.style.display === 'block' ? submenu.scrollHeight + "px" : "0";
        }
    });
});

function ordenar() {
    const cajas = document.querySelectorAll('.cajita'); // Selecciona todas las cajas
    const footer = document.getElementById('footer'); // Selecciona el footer
    const w = window.innerWidth * 0.75;
    const h = window.innerHeight;
    const separador = 30;

    const Alto_Sin_Separadores = h - separador * 4;
    const Alto_Entre_Tres = Alto_Sin_Separadores / 3;

    let yy = separador;
    let xx = w - (separador + Alto_Entre_Tres) * 3;

    // Ajustar las cajas dinámicamente
    cajas.forEach((caja, index) => {
        caja.style.width = `${Alto_Entre_Tres}px`;
        caja.style.height = `${Alto_Entre_Tres}px`;

        caja.style.left = `${xx}px`;
        caja.style.top = `${yy}px`;

        // Ajustar posición para nuevas filas
        if ((index + 1) % 3 === 0) {
            yy += Alto_Entre_Tres + separador;
            xx = w - (separador + Alto_Entre_Tres) * 3;
        } else {
            xx += Alto_Entre_Tres + separador;
        }
    });

    // Ajustar la posición del footer
    footer.style.left = `${xx}px`; // Alínea el footer a la izquierda

}

window.addEventListener('resize', ordenar);
window.addEventListener('load', ordenar);


// Mostrar/ocultar menú hamburguesa
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // Activa/desactiva la clase 'active' para mostrar/ocultar el menú
});

// Deshabilitar el clic derecho en imágenes
document.addEventListener('contextmenu', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        event.preventDefault(); // Evitar que aparezca el menú contextual
        alert('Clic derecho deshabilitado en imágenes.');
    }
});

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

    const Alto_Sin_Separadores = h - separador * 3; // Solo 2 filas → 3 separadores verticales
    const Alto_Entre_Dos = Alto_Sin_Separadores / 2;

    const Ancho_Total_Disponible = w - separador * 4; // 3 columnas → 4 separadores horizontales
    const Ancho_Entre_Tres = Ancho_Total_Disponible / 3;

    let xx = separador;
    let yy = separador;

    cajas.forEach((caja, index) => {
        caja.style.width = `${Ancho_Entre_Tres}px`;
        caja.style.height = `${Alto_Entre_Dos}px`;

        caja.style.left = `${xx}px`;
        caja.style.top = `${yy}px`;

        // Avanza columna
        xx += Ancho_Entre_Tres + separador;

        // Si completa 3 columnas, salta a siguiente fila
        if ((index + 1) % 3 === 0) {
            xx = separador;
            yy += Alto_Entre_Dos + separador;
        }
    });

    // Posiciona el footer debajo del grid
    footer.style.left = `${separador}px`;
    footer.style.top = `${yy + Alto_Entre_Dos + separador}px`;
}

window.addEventListener('resize', ordenar);
window.addEventListener('load', ordenar);


// Mostrar/ocultar menú hamburguesa
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // Activa/desactiva la clase 'active' para mostrar/ocultar el menú
});



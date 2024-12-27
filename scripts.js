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

function ordenar()
{
    h = window.innerHeight;
    w = window.innerWidth;
    // alert(w+" "+h);

    separador = 30;

    Alto_Sin_Separadores = h - (separador*4);
    Alto_Entre_Tres =  Alto_Sin_Separadores / 3;

    document.getElementById('caja_1').style.width = Alto_Entre_Tres + "px";
    document.getElementById('caja_1').style.height = Alto_Entre_Tres + "px";
    document.getElementById('caja_2').style.width = Alto_Entre_Tres + "px";
    document.getElementById('caja_2').style.height = Alto_Entre_Tres + "px";
    document.getElementById('caja_3').style.width = Alto_Entre_Tres + "px";
    document.getElementById('caja_3').style.height = Alto_Entre_Tres + "px";
    document.getElementById('caja_4').style.width = Alto_Entre_Tres + "px";
    document.getElementById('caja_4').style.height = Alto_Entre_Tres + "px";
    document.getElementById('caja_5').style.width = Alto_Entre_Tres + "px";
    document.getElementById('caja_5').style.height = Alto_Entre_Tres + "px";
    document.getElementById('caja_6').style.width = Alto_Entre_Tres + "px";
    document.getElementById('caja_6').style.height = Alto_Entre_Tres + "px";
    document.getElementById('caja_7').style.width = Alto_Entre_Tres + "px";
    document.getElementById('caja_7').style.height = Alto_Entre_Tres + "px";
    document.getElementById('caja_8').style.width = Alto_Entre_Tres + "px";
    document.getElementById('caja_8').style.height = Alto_Entre_Tres + "px";
    document.getElementById('caja_9').style.width = Alto_Entre_Tres + "px";
    document.getElementById('caja_9').style.height = Alto_Entre_Tres + "px";


   
    yy = separador;
    xx = w-((separador+Alto_Entre_Tres)*3);
   

    document.getElementById('footer').style.left = xx + "px";

    document.getElementById('caja_1').style.left = xx + "px";
    document.getElementById('caja_1').style.top  = yy + "px";

    xx+=separador+Alto_Entre_Tres;
    document.getElementById('caja_2').style.left = xx + "px";
    document.getElementById('caja_2').style.top  = yy + "px";

    xx+=separador+Alto_Entre_Tres;
    document.getElementById('caja_3').style.left = xx + "px";
    document.getElementById('caja_3').style.top  = yy + "px";

    yy = separador+((separador+Alto_Entre_Tres)*1);
    xx = w-((separador+Alto_Entre_Tres)*3);
   
    document.getElementById('caja_4').style.left = xx + "px";
    document.getElementById('caja_4').style.top  = yy + "px";

    xx+=separador+Alto_Entre_Tres;
    document.getElementById('caja_5').style.left = xx + "px";
    document.getElementById('caja_5').style.top  = yy + "px";

    xx+=separador+Alto_Entre_Tres;
    document.getElementById('caja_6').style.left = xx + "px";
    document.getElementById('caja_6').style.top  = yy + "px";

    yy = separador+((separador+Alto_Entre_Tres)*2);
    xx = w-((separador+Alto_Entre_Tres)*3);
   
    document.getElementById('caja_7').style.left = xx + "px";
    document.getElementById('caja_7').style.top  = yy + "px";

    xx+=separador+Alto_Entre_Tres;
    document.getElementById('caja_8').style.left = xx + "px";
    document.getElementById('caja_8').style.top  = yy + "px";

    xx+=separador+Alto_Entre_Tres;
    document.getElementById('caja_9').style.left = xx + "px";
    document.getElementById('caja_9').style.top  = yy + "px";
}
window.addEventListener('resize', () => { ordenar(); });
window.addEventListener('load', (event) => { ordenar(); });


// Mostrar/ocultar menú hamburguesa
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // Activa/desactiva la clase 'active' para mostrar/ocultar el menú
});

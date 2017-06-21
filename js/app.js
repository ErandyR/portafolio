var contenedorHabilidadCss = $(".mostrarCss");

var cargarPagina = function() {
    contenedorHabilidadCss.css("display", "none");
    var flecha = $("#mostrarCss");
    flecha.click(mostrarHabilidadCss);
}

var contador1 = 0;

var mostrarHabilidadCss = function() {
    contador1 ++;
    if(contador1 == 1) {
        contenedorHabilidadCss.css("display", "block");
    }
    else if(contador1 == 2) {
        contenedorHabilidadCss.css("display", "none");
        contador1 = 0;
    }
    
    console.log(contenedorHabilidadCss);
}

$(document).ready(cargarPagina);
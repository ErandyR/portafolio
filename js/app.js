var contenedorHabilidadCss = $(".mostrarCss");
var contenedorHabilidadJs = $(".mostrarJs");
var contenedorHabilidadHtml = $(".mostrarHtml");

var cargarPagina = function() {
    habilidadesCss();
    habilidadesJs();
    habilidadesHtml();
    $('.carousel').carousel();
}

var habilidadesCss = function() {
    contenedorHabilidadCss.css("display", "none");
    var $flecha1 = $("#mostrarCss");
    $flecha1.click(mostrarHabilidadCss);
    var $imgCss = $("#img-css");
    $imgCss.click(mostrarHabilidadCss);
}

var habilidadesJs = function() {
    contenedorHabilidadJs.css("display", "none");
     var $flecha2 = $("#mostrarJs");
    $flecha2.click(mostrarHabilidadJs);
    var $imgJs = $("#img-js");
    $imgJs.click(mostrarHabilidadJs);
}

var habilidadesHtml = function() {
    contenedorHabilidadHtml.css("display", "none");
    var $flecha3 = $("#mostrarHtml");
    $flecha3.click(mostrarHabilidadHtml);
    var $imgHtml = $("#img-html");
    $imgHtml.click(mostrarHabilidadHtml);
}

var contador1 = 0;
var contador2 = 0;
var contador3 = 0;

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

var mostrarHabilidadJs = function() {
    contador2 ++;
    if(contador2 == 1) {
        contenedorHabilidadJs.css("display", "block");
    }
    else if(contador2 == 2) {
        contenedorHabilidadJs.css("display", "none");
        contador2 = 0;
    }
}

var mostrarHabilidadHtml = function() {
    contador3 ++;
    if(contador3 == 1) {
        contenedorHabilidadHtml.css("display", "block");
    }
    else if(contador3 == 2) {
        contenedorHabilidadHtml.css("display", "none");
        contador3 = 0;
    }
}
$(document).ready(cargarPagina);

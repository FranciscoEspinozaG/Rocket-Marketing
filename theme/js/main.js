const   colorServicio = my_data.color_servicio,
        textoServicio = my_data.texto_servicio;

$('.bg-servicio').css('background', colorServicio);
$('.text-servicio').css('color', textoServicio);
$('.numero-menu').css('border', '1px solid' + textoServicio);
$('.boton-servicio > a').css('border', '1px solid' + textoServicio);
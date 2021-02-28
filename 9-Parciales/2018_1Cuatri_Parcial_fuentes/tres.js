function mostrar()
{
//declaracion


var precio;
var porcentaje;
var enteroprecio;
var enteroPorcentaje;
var operacionprecio;
var preciofinal;

//asignacion

precio = prompt("ingrese precio");
porcentaje = prompt("ingrese porcentaje de descuento");
enteroprecio = parseInt (precio);
enteroPorcentaje = parseInt (porcentaje);
operacionprecio = enteroprecio * enteroPorcentaje / 100;
preciofinal = enteroprecio - operacionprecio;

elPrecioFinal.value = preciofinal;
}

/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//descripcion

	var nombreprod;
	var importe;
	var importeparseado;
	var porcentaje;
	var porcentajeparseado;
	var descuento;
	var resultado;

	//asignacion

	nombreprod = txtIdImporte.value;
	importe = prompt("ingrese el importe");
	importeparseado = parseInt(importe);
	porcentaje = prompt("ingrese el porcentaje para el cual aplica su producto");
	porcentajeparseado = parseInt(porcentaje);
	descuento = (importeparseado * porcentajeparseado) / 100;
	resultado = importeparseado - descuento;

	alert("usted compro "+nombreprod+" por un precio final de: "+resultado+" Gracias! y vuelva prontoss! ");}

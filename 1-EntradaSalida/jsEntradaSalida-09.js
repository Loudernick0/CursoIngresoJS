/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//declaracion 

	var importe;
	var entero;
	var aumento;
	var sueldofinal;

	//asignacion

	importe = txtIdSueldo.value;
	entero = parseInt (importe);
	aumento = (entero * 10) / 100;
	sueldofinal = entero + aumento;

	txtIdResultado.value = sueldofinal;


}

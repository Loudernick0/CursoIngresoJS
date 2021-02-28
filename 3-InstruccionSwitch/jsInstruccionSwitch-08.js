/* Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/


function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado) 
	{
		case "Bariloche":
			alert("Hace Frío");
			break;
		case "Cataratas":
			alert("Hace Calor");
			break;
		case "Mar del plata":
			alert("Hace Calor");
			break;
		case "Ushuaia":
			alert("Hace Frío");
			break;			
	}
	alert(destinoIngresado);

}//FIN DE LA FUNCIÓN
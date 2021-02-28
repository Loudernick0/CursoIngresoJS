/* Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro 
pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch (destinoIngresado) 
	{
		case "Bariloche":
			alert("el destino se encuentra en Oeste del país");
			break;
		case "Cataratas":
			alert("el destino se encuentra en el Norte del País");
			break;
		case "Mar del plata":
			alert("el destino se encuentra al Este del país");
			break;
		case "Ushuaia":
			alert("el destino se encuentra al Sur del país");
			break;			
	}
	alert(destinoIngresado);

}//FIN DE LA FUNCIÓN
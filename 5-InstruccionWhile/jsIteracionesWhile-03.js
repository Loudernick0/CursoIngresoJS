/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{	
	var claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");
	while(claveIngresada != "utn750")
	{
		alert("la clave ingresada no es correcta!!!");
		claveIngresada = prompt("ingrese el número clave");
	}

	alert("ACCESO CONCEDIDO");
	
}//FIN DE LA FUNCIÓN

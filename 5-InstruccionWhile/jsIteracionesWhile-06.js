/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */


function mostrar()
{
	var acumulador;
	var numeroIngresado;
	i = 0;
	acumulador=0;
	
	do
	{
		numeroIngresado = prompt("ingrese un numero porfavor");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		i = i+1;
	}while(i<5);

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN
/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado,
 y mostrar la cantidad de numeros pares encontrados.*/


function mostrar()
{

	var numeroIngresado;
	var pares;
	var i;

	numeroIngresado = prompt("ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	pares = 0;

	for(i=numeroIngresado; i<=numeroIngresado; i++)
	{
		if(i % 2 == 0)
		{	
			pares = pares++;
			console.log(i);
		}
		
	}



	alert("la cantidad de numero pares encontrados fue de: "+pares);




}//FIN DE LA FUNCIÓN
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantdeceros=0;
	var pares=0;
	var cantpositivos=0;
	var cantnegativos=0;

	do
	{	
		numeroIngresado = prompt("ingrese un numero");
		numeroIngreso = parseInt(numeroIngresado);
		if(isNaN(numeroIngresado))
		{
			alert("El dato ingresado es inválido!");
		}
		else
		{
			if(numeroIngresado<0)
			{
				cantnegativos = cantnegativos + 1;
				sumaNegativos = sumaNegativos + numeroIngresado;
			}
			else
			{
				if(numeroIngresado==0)
				{
					cantdeceros = cantdeceros + 1;
				}
				else
				{
					if(numeroIngresado>0)
					{
						cantpositivos = cantpositivos + 1;
						sumaPositivos = sumaPositivos + numeroIngresado;
					}
				}
			}
		}

		respuesta=confirm("desea continuar?");
	}	while(respuesta==true)
	//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);
	document.write("la cantidad de negativos es: "+cantnegativos);
	document.write("la cantidad de ceros es: "+cantdeceros);
	document.write("la suma de positivos es de: "+sumaPositivos);
	document.write("la cantidad de los positivos es de: "+cantpositivos);
	


}//FIN DE LA FUNCIÓN
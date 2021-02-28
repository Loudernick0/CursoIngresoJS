/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numeroIngresado;
	var nummaximo;
	var numminimo;
	var continuar;
	var flag = "primera vez";
	do
	{

		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if(flag == "primera vez")
		{
			nummaximo = numeroIngresado;
			numminimo = numeroIngresado;
			flag = "ya pase";
		}
		else
		{

			if(numeroIngresado>nummaximo)
			{
				nummaximo = numeroIngresado;
				
			}	
			else
			{
				if(numeroIngresado<numminimo)
				{
					numminimo = numeroIngresado;
				}
			}	
		}	
		continuar = confirm("desea continuar??");
		}while(continuar == true);
		
	
		txtIdMaximo.value=numeroMaximo;
		txtIdMinimmo.value=numeroMinimo;
	
	
}
	
	/*// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN */
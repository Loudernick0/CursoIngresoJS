/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numero;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;

		do
		{
			numero = prompt("ingrese numero");
			numero = parseInt(numero);

				if(numero<0)
				{
					multiplicacionNegativos = multiplicacionNegativos * numero;
				}
				else 
				{
					if(numero>0)
					{
						sumaPositivos = sumaPositivos + numero;
					}
				}
		
			respuesta = confirm("desea ingresar otro numero?");	
		}while(respuesta == true);




	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
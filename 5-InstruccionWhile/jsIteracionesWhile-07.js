/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	var numero;
	var contador;
	var acumulador;
	var respuesta;

	contador=0;
	acumulador=0;

	do
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		contador = contador + 1;
		acumulador = acumulador + numero;
		respuesta = confirm("desea ingresar un nuevo numero?");

	}while(respuesta == true);


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN
/*
Ingresar una cantidad de numeros a determiinar por el usuario, determinar la cantidad de numeros
que son mayores que 10 y menores que 20 inclusive. mostrar el promedio de los numeros que cumplen la condicion*/
function mostrar()
{

var numero;
var cantidad = 0;
var i = "si";
var suma = 0;
var promedio;

	while(i=="si")
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		if(numero>9 && numero<21)
		{
			cantidad = cantidad + 1;
			suma = suma + numero;
		}

		i = prompt("desea ingresar otro numero?");

	}

	promedio = suma / cantidad;

	alert("la cantidad de numeros que estan entre 10 y 20 es de: "+cantidad);
	alert("la suma de los numeros ingresados que cumplen la condicion fue de: "+suma);
	alert("el promedio es de: "+promedio);

}




























	/*
	i = "si";
	contadorcantidad = 0;
	acumulador = 0;
	while(i == "si")
	{
		numeroIngresado = prompt("ingrese 1 número");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado>9 && numeroIngresado<21)
		{
			contadorcantidad=contadorcantidad+1;
			acumulador = acumulador+numeroIngresado;
		}

		i = prompt("desea ingresar otro numero?");
	}

	promedio = acumulador/contadorcantidad;

	alert("el promedio de los numeros ingresados es de: "+promedio);

}//FIN DE LA FUNCIÓN*/
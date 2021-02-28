/*
Debemos pedir 5 numeros sumar y mostrar por alert*/
function mostrar()
{
	//declaracion 
	var numero;
	var suma = 0;
	var i = 0;

	//asignacion 
	while(i<5)
	{
		numero = prompt("ingrese 1 numero");
		numero = parseInt(numero);
		suma = suma + numero;
		i= i + 1;
	}

	alert("la suma de ambos numeros es: "+suma);

	
}


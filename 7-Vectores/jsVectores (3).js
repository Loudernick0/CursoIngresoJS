/*al presionar el botón se pedira, a traves de prompt, y numeros
que seran guardados en un vector y luego serán mostrados mediante
document.write().*/


function mostrar()
{

var arraynumeros = [];

for(var i=0; i<5; i++)
{

	arraynumeros[i] = parseInt(prompt("ingrese un numero"));

}

for(var i=0; i<5;i++)
{
	document.write("los numeros ingresados en la posicion "+i+"es: "+arraynumeros[i]+"<br>");
}

}












/*
	var miArray = new Array();

	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}





}//FIN DE LA FUNCIÓN*/
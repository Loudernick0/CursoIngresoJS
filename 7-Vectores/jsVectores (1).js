/*al presionar el botón mostrará 10 números
que estaran contenidos en un vector.*/

function mostrar()
{
	var arraynumeros;
	
	arraynumeros = [1,2,4,6,8,90,45,76,2,45];

	document.write("el contenido del array es: <br>");

	for(i=0; i<10; i++)
	{
		document.write("posicion"+i+"es: "+arraynumeros[i]+"<br>");

	}



}














/*

function mostrar()
{

	var miArray = new Array();

	miArray[0]=5;
	miArray[1]=74;
	miArray[2]=8;
	miArray[3]=94;
	miArray[4]=5;
	miArray[5]=0;
	miArray[6]=80;
	miArray[7]=789;
	miArray[8]=5;
	miArray[9]=7;

document.write("El contenido del vector es: <br>");

	for(var i=0; i<10; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}





}//FIN DE LA FUNCIÓN*/
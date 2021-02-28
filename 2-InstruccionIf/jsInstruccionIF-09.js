/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	var num;

	num = Math.floor(Math.random() *30) + 1;

	if(num>=1 && num<=10)
	{
		alert(num);
	}

}//FIN DE LA FUNCIÓN
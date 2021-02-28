/* Alumno Nicolas Mongia
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".

*/

function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;

	switch (horaDelDia) {
		case "0":
		case "1":
		case "2":	
		case "3":
		case "4":
		case "5":
		case "6":
			alert("Dulces sueños");
			break;
		case "7":
		case "8":	
		case "9":
		case "10":
		case "11":
			alert("es de mañana!");
			break;
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			alert("es la tarde");
			break;
		case "20":
		case "21":
		case "22":
		case "23":
			alert("es de noche");
			break;																		
	}	
	alert(horaDelDia);
	
	



}//FIN DE LA FUNCIÓN
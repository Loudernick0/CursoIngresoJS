/* Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.". */


function mostrar()
{
	//tomo la hora
	var horaDelDia;
	horaDelDia = txtIdHora.value;
	horaDelDia = parseInt(horaDelDia);
	
	if(horaDelDia >= 24) 
	{
		alert("la hora ingresada no existe!");
	}
	else
	{
	switch (horaDelDia) {
		case 0:
		case 1:
		case 2:	
		case 3:
		case 4:
		case 5:
		case 6:
			alert("Dulces sueños");
			break;
		case 7:
		case 8:	
		case 9:
		case 10:
		case 11:
			alert("es de mañana!");
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("es la tarde");
			break;
		case 20:
		case 21:
		case 22:
		case 23:
			alert("es de noche");
			break;																		
		}

	}

	alert(horaDelDia);

}//FIN DE LA FUNCIÓN
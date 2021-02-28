//Alumno: Mongia Nicolás, Division 1 G
/*1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace*/
function mostrar()
{	
	var distancia;
	var tiempo;
	var velocidad;

	distancia = txtIdEdad.value; 
	tiempo = prompt("cuanto tiempo tardo??");
	tiempo = parseInt(tiempo);
	distancia = parseInt(distancia);

	velocidad = distancia / tiempo;

	if(velocidad < 61)
	{
		alert("Muy Lento!!!");
	}
	else if(velocidad > 60 && velocidad < 81)
		{
			alert("lentoooo!!");
		}
		else if(velocidad > 80 && velocidad < 101)
			{
				alert("buen ritmo!!");
			}
			else if(velocidad > 100 && velocidad < 121)
				{
					alert("ahi de la ley!!");
				}
				else if(velocidad >120)
					{
						alert("eso no se hace!!");
					}

}


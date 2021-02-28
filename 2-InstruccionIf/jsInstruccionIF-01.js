//Alumno: Mongia Nicolás, Division 1 G
/*2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III*/

function mostrar()
{	
	var nombre;
	var peso;
	var estatura;
	var IMC;

	nombre = txtIdEdad.value;
	peso = prompt("Cual es su peso??");
	estatura = prompt("cual es su estatura??");
	peso = parseFloat(peso);
	estatura = parseFloat(estatura);

	IMC = peso / estatura;

	if(IMC < 18.5)
	{
		alert(nombre+" su IMC es - bajo peso");
	}
	else if(IMC >= 18.5 && IMC <= 24.9)
		{
			alert(nombre+" su IMC es - Peso normal");
		}
		else if(IMC >= 25 && IMC <= 26.9)
			{
				alert(nombre+" su IMC es - preobesidad");
			}
			else if(IMC >= 27 && IMC <=29.9)
				{
					alert(nombre+" su IMC es - preobesidad tipo II");
				}
				else if(IMC >= 30 && IMC <= 34.9)
					{
						alert(nombre+" su IMC es - Obesidad tipo I");
					}
					else if(IMC >= 35 && IMC <= 39.9)
						{
							alert(nombre+" su IMC es - Obesidad tipo II");
						}
						else if(IMC >=40 && IMC <= 49.9)
							{
								alert(nombre+" su IMC es - Obesidad tipo III");
							}
							else 
							{
								alert(nombre+" su IMC es - Obesidad extrema")
							}

}
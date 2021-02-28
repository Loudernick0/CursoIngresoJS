/* una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso 
de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento */


function mostrar()
{
	var estacionIngresada;
	var localidad;
	var estadiabase;
	var preciofinal;
	var porcentaje;
	var precioporcentaje;
	
	estacionIngresada =txtIdEstacion.value;
	localidad = txtIdDestino.value;
	estadiabase = 15000;

	switch (estacionIngresada)
	{
		case "Invierno": 
			switch (localidad)
			{
				case "Bariloche": 
					porcentaje = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;		
			}
			break;
		case "Verano":
			switch (localidad)
			{
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;			
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (localidad)
			{
				case "Bariloche":
					porcentaje = 10;
					break;
				case "Cataratas":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 10;
					break;
				case "Cordoba":
					porcentaje = 0;
					break;		

			}			
			break;
	}

	precioporcentaje = (estadiabase * porcentaje) / 100;
	preciofinal = estadiabase+precioporcentaje;

	alert("el precio del viaje solicitado es: "+preciofinal);

	
}//FIN DE LA FUNCIÓN
/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	var edad;
	var edadentero;
	var estado;

	edad = txtIdEdad.value;
	edadentero = parseInt(edad);
	estado = estadoCivil.value;
	if (edadentero >= 18 && estado == "Soltero")
	{ 
		alert("es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN
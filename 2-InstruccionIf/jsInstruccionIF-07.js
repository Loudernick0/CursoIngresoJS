/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	var edad;
	var edadentero;
	var estado;

	edad = txtIdEdad.value;
	edadentero = parseInt(edad);
	estado = estadoCivil.value;
	
	if (edadentero<18 && estado !="Soltero")
	{ 
		alert("usted es demasiado pequeño para no ser soltero!!");
	}

}
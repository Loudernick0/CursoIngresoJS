function mostrar()
{
	var edad;
	var edadint;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad < 13 || edad > 17)
	 {
		alert("usted no es un adolescente");	
	}
	
}//FIN DE LA FUNCIÓN
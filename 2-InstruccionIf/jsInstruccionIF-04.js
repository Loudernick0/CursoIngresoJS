function mostrar()
{ 
	var edad;
	var edadint;

	edad = txtIdEdad.value;
	edadint = parseInt(edad);

	if(edadint >=13 && edadint <=17) {

		alert("usted es un adolescente");

	}
	else {

		alert("usted es extraterrestre");
	}

}//FIN DE LA FUNCIÓN
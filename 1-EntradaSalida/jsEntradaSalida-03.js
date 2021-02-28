/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{  
	var descripcion;
	var precioproducto;
	var precioparseado;
	var porcentaje;
	var preciofinal;

	descripcion = prompt ("ingrese su producto: ");
	precioproducto = txtIdNombre.value;
	precioparseado = parseInt(precioproducto);
	porcentaje = (precioparseado * 30) / 100;
	preciofinal = precioparseado+porcentaje;

	alert("el producto ingresado fue: "+descripcion+"y su precio es de: "+preciofinal);

}




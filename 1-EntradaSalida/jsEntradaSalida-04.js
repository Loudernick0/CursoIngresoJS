/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

//Alumno: Mongia Nicolás
/* Enunciado: 1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%.
 Pueden utilizar el html del ejercicio 4 para resolverlo. 
 */

function mostrar()
{  
	var descripcion;
	var precioproducto;
	var precioparseado;
	var preciofinal;

	descripcion = prompt ("ingrese su producto: ");
	precioproducto = txtIdNombre.value;
	precioparseado = parseInt(precioproducto);
	preciofinal = (precioparseado * 30) / 100;

	alert(descripcion+preciofinal)

}


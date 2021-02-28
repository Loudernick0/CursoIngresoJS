/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var ent1;
	var ent2;
	var suma;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	ent1 = parseInt (numero1, 10);
	ent2 = parseInt (numero2, 10);
	
	suma = ent1 + ent2;

	alert(suma);



}


/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero1;
	var numero2;
	var entero1;
	var entero2;
	var division;
	var resto;

	//asignacion 

	numero1 = txtIdNumeroDividendo.value;
	numero2 = txtIdNumeroDivisor.value;

	entero1 = parseInt (numero1);
	entero2 = parseInt (numero2);

	division = entero1 / entero2;
	resto = entero1 % entero2;

	alert ("el resto es "+resto);




}

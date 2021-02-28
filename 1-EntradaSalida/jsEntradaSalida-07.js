/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
//declaracion

var numero1;
var numero2;
var entero1;
var entero2;
var suma;

// asignacion

numero1 = txtIdNumeroUno.value;
numero2 = txtIdNumeroDos.value;

entero1 = parseInt (numero1);
entero2 = parseInt (numero2);

suma = entero1 + entero2;

alert(suma);




}

function restar()
{
	var numero1;
var numero2;
var entero1;
var entero2;
var resta;

// asignacion

numero1 = txtIdNumeroUno.value;
numero2 = txtIdNumeroDos.value;

entero1 = parseInt (numero1);
entero2 = parseInt (numero2);

resta = entero1 - entero2;

alert(resta);

}

function multiplicar()
{ 
	var numero1;
var numero2;
var entero1;
var entero2;
var multiplicacion;

// asignacion

numero1 = txtIdNumeroUno.value;
numero2 = txtIdNumeroDos.value;

entero1 = parseInt (numero1);
entero2 = parseInt (numero2);

multiplicacion = entero1 * entero2;

alert(multiplicacion);

}

function dividir()
{
var numero1;
var numero2;
var entero1;
var entero2;
var division;

// asignacion

numero1 = txtIdNumeroUno.value;
numero2 = txtIdNumeroDos.value;

entero1 = parseInt (numero1);
entero2 = parseInt (numero2);

division = entero1 / entero2;

alert(division);

}


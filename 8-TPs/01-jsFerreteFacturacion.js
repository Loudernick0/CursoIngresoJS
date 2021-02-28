/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var enteroprecio1;
    var enteroprecio2;
    var enteroprecio3;
    var suma;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    enteroprecio1 = parseInt(precio1);
    enteroprecio2 = parseInt(precio2);
    enteroprecio3 = parseInt(precio3);

    suma = enteroprecio1 + enteroprecio2 + enteroprecio3;

    alert(suma);




}
function Promedio () 
{
	var precio1;
    var precio2;
    var precio3;
    var enteroprecio1;
    var enteroprecio2;
    var enteroprecio3;
    var promedio;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    enteroprecio1 = parseInt(precio1);
    enteroprecio2 = parseInt(precio2);
    enteroprecio3 = parseInt(precio3);

    promedio = (enteroprecio1 + enteroprecio2 + enteroprecio3) / 3;

    alert(promedio);
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var enteroprecio1;
    var enteroprecio2;
    var enteroprecio3;
    var suma;
    var iva;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    enteroprecio1 = parseInt(precio1);
    enteroprecio2 = parseInt(precio2);
    enteroprecio3 = parseInt(precio3);

    suma = enteroprecio1 + enteroprecio2 + enteroprecio3;
    iva = suma * 21 / 100;

    alert(suma+iva);
}
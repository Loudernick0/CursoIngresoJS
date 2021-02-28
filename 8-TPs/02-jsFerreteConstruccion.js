/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var radio;
var enterolargo;
var enteroancho;
var enteroradio;
var perimetro;
var alambrenecesario;


largo = txtIdLargo.value;
ancho = txtIdAncho.value;
radio = txtIdRadio.value;

enterolargo = parseInt(largo);
enteroancho = parseInt(ancho);

perimetro = (enterolargo *2) + (enteroancho *2);

alambrenecesario = perimetro * 3;

alert("la cantidad de alambre necesario es de: "+alambrenecesario+ " metros");


}
function Circulo () 
{
    var largo;
var ancho;
var radio;
var enterolargo;
var enteroancho;
var enteroradio;
var perimetro;
var alambrenecesario;
var pi;


largo = txtIdLargo.value;
ancho = txtIdAncho.value;
radio = txtIdRadio.value;
pi = Math.PI;
enterolargo = parseInt(largo);
enteroancho = parseInt(ancho);
enteroradio = parseInt(radio);

perimetro = (2*enteroradio) *pi

alambrenecesario = perimetro * 3;

alert("la cantidad de alambre necesario es de: "+alambrenecesario+ " metros");

	
}
function Materiales () 
{
	var largo;
var ancho;
var radio;
var enterolargo;
var enteroancho;
var superficie;
var bolsasdecal;
var bolsasdecemento;



largo = txtIdLargo.value;
ancho = txtIdAncho.value;
radio = txtIdRadio.value;

enterolargo = parseInt(largo);
enteroancho = parseInt(ancho);

superficie = enterolargo * enteroancho;

bolsasdecal = superficie * 3;
bolsasdecemento = superficie * 2; 

alert("la cantidad de materiales necesarios es de: "+bolsasdecal+ " bolsas de cal y "+bolsasdecemento+" bolsas de cemento");

}
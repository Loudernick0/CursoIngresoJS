/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*function CalcularPrecio () 
{
     var cantidadlamparas;
     var marcalampara;
     var descuentofinal;
     var descuento;
     var preciofinal;
     var preciounitario;
     var preciosindescuento;
     var IIBBdesc;
     var IIBB;

     cantidadlamparas = txtIdCantidad.value;
     cantidadlamparas = parseInt(cantidadlamparas);
     marcalampara = Marca.value;
     preciounitario = 35;

     if(cantidadlamparas >=6)
     {
        descuento = 50;
     }
     else
     {
         if(cantidadlamparas == 5)
         {
             if(marcalampara == "ArgentinaLuz")
             {
                descuento = 40;
             }
             else
             {
                 descuento = 30;
             }
         }
         else
         {
             if(cantidadlamparas == 4)
             {
                 if(marcalampara == "ArgentinaLuz" || marcalampara == "FelipeLamparas")
                 {
                     descuento = 25;
                 }
                 else
                 {
                     descuento = 20;
                 }
             }
             else
             {
                 if(cantidadlamparas == 3)
                 {
                     if(marcalampara == "ArgentinaLuz")
                     {
                         descuento = 15;
                     }
                     else
                     {
                         if(marcalampara == "FelipeLamparas")
                         {
                             descuento = 10;
                         }
                         else
                         {
                             descuento = 5;
                         }
                     }
                 }
                 else
                 {
                     descuento = 0;
                 }
             }
         }
     }

     preciosindescuento = cantidadlamparas*preciounitario;

     if(descuento == 0)
     {
         descuentofinal = 0;
     }
     else
     {
        descuentofinal = (preciosindescuento*descuento) / 100;
     }
     preciofinal = preciosindescuento - descuentofinal;

     if(preciofinal > 120)
     {
         IIBBdesc = (preciofinal*10) / 100;
         IIBB = preciofinal + IIBBdesc;

         txtIdprecioDescuento.value = IIBB;
         alert("Usted pago "+IIBBdesc+" en concepto de Ingresos Brutos")
     }
     else
     {
        txtIdprecioDescuento.value = preciofinal;

     }

}*/


function CalcularPrecio () 
{ var cantidadlamparas;
    var marcalampara;
    var descuentofinal;
    var descuento;
    var preciofinal;
    var preciounitario;
    var preciosindescuento;
    var IIBBdesc;
    var IIBB;

    cantidadlamparas = txtIdCantidad.value;
     cantidadlamparas = parseInt(cantidadlamparas);
     marcalampara = Marca.value;
     preciounitario = 35;

     switch (cantidadlamparas)
     {
         case 
     }
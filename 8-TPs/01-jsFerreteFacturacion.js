/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let n1;
    let n2;
    let n3;
    let total;
    n1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    n2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    n3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    total= n1+n2+n3;
    alert(total)
	
}
function Promedio () 
{
	let n1;
    let n2;
    let n3;
    let total;
    n1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    n2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    n3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    total= (n1+n2+n3)/3;
    alert(total)
}
function PrecioFinal () 
{
	let n1;
    let n2;
    let n3;
    let total;
    n1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    n2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    n3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    total= n1+n2+n3;
    total = total * 1.21;
    alert(total)
}
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
let numero = 0;
numero = parseInt(prompt("Ingrese un número entre 0 y 9 inclusive."));
while(numero < 0 || numero >=9 || isNaN(numero)){
	numero = parseInt(prompt("El numero ingresado no está en el rango pedido, por favor vuelva a ingresar"));
}
document.getElementById("txtIdNumero").value = numero;
}//FIN DE LA FUNCIÓN
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables

	let numero=0;
	let max= 0;
	let min = 0;
	let seguir;

	do {
	numero= parseInt(prompt("Ingrese un numero:"))
	while (isNaN(numero)) {
		numero = parseInt(prompt("Ese no es un numero. Ingrese un numero:"))
	}
	if (numero>max) {
		max=numero;
	}
	else if (numero<min || min==0) {
		min=numero;		
	}
	seguir= prompt("Desea seguir ingresando? s/n").toLowerCase();
}while(seguir=="s")

document.getElementById("txtIdMaximo").value = max;
document.getElementById("txtIdMinimo").value = min;

}//FIN DE LA FUNCIÓN
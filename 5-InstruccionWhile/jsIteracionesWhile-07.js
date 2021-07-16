/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let acumulador=0;
	let numero;
	let promedio;
	let respuesta;
	let cantidad =0;
	let i=1;

	do{
		numero = parseInt(prompt("Ingrese el "+i+ "° numero "));
		respuesta = prompt("Desea ingresar otro número? si/no").toLowerCase();
		i++;
		cantidad++;
		acumulador+=numero;

	}while(respuesta=="si");

	promedio=acumulador/cantidad;
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN
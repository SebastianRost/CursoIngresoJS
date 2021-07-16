/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let acuP = 0;
	let acuN = 1;
	let seguir;
	let flag = 1;

	do {
		numero = parseInt(prompt("ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero, ingrese un numero"))
		}
		if (numero >= 0 ) {
			acuP = acuP + numero;
		}else{
			acuN = acuN * numero;
			flag = 0;
		
		}
		seguir = prompt("Quiere continuar? s/n");
	} while (seguir == "s");
		
	if (flag) {
		acuN=0;
	}
	
	document.getElementById("txtIdSuma").value=acuP;
	document.getElementById("txtIdProducto").value=acuN;
}//FIN DE LA FUNCIÓN
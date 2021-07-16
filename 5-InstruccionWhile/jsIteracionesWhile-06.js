function mostrar()
{

	let acumulador=0;
	let numero;
	let promedio;
	let	i=0; 

	while(i<5){
	numero=	parseInt(prompt("ingrese el 1 numero"))
		i++
		acumulador+=numero;
	}
	

	promedio=acumulador/5;
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;
	

}//FIN DE LA FUNCIÓN
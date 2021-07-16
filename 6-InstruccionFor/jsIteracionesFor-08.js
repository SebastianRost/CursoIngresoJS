function mostrar()
{

	let numero;
	let contador = 0;
	numero= parseInt(prompt("ingrese numero"))
	while (isNaN(numero)|| numero<=0){
		numero= parseInt(prompt("Error. Ingrese un numero "))
	}
	for (let i = 0; i <= numero; i++) {
	
		if(numero%i ==0){
			contador++;
		}
	}
	if (contador==2 || numero==0 || contador==1) {
		console.log("Es primo");
	}
	else{
		console.log("No es primo")
	}

}//FIN DE LA FUNCIÓN
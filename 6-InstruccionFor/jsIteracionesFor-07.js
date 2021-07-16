function mostrar()
{
	let cantidad;
	let contador = 0;
	cantidad= parseInt(prompt("ingrese cdad de numeros positivos"))
	while (isNaN(cantidad)|| cantidad<=0){
		cantidad= parseInt(prompt("Error. Ingrese un numero positivo"))
	}
	for (let i = 0; i <= cantidad; i++) {
	
		if(cantidad%i ==0){
			console.log(i);
			contador++;
		}
	}
	console.log("cantidad de divisores: "+ contador)		


}//FIN DE LA FUNCIÓN
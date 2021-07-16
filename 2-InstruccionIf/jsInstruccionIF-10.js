function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	nota = Math.floor(Math.random() *11)
	if ( nota >=9 ) {
		alert("EXCELENTE");
	}else if (nota >=4 && nota <9){
		alert("APROBÓ");
	}else{
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN
function mostrar()
{
	//tomo la edad  
	let edad; 
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad <13) {
		alert("Es un niño");
	} else if(edad >17){
		alert("Es adulto")
	}else{
		alert("Es adolescente")
	}
	


}//FIN DE LA FUNCIÓN
function mostrar()
{
	//tomo la edad  
	let edad; 
	let estado;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado= document.getElementById("estadoCivil").value;
	if (edad <18 && estado != "Soltero") {
		alert("Es muy pequeño para NO ser soltero.");
	} 


}//FIN DE LA FUNCIÓN
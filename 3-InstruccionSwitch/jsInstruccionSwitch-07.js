function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;
	switch (destino) {
		case "Bariloche":
			alert("Está en el oeste")
			break;
	
		case "Mar del plata":
			alert("Está en el este")
			break;

		case "Cataratas":
			alert("Está en el norte")
			break;

		case "Ushuaia":
			alert("Está en el sur")
			break;
		}

}//FIN DE LA FUNCIÓN
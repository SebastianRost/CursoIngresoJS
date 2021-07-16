function mostrar()
{
let destino;
destino = document.getElementById("txtIdDestino").value;
switch (destino) {
	case "Bariloche":
	case "Ushuaia":
		alert("Hace frío");		
		break;
	case "Mar del plata":
	case "Cataratas":
		alert("Hace calor");
		break;
}
}//FIN DE LA FUNCIÓN
function mostrar()
{
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;
	switch (mes) {
		
	
		case "Febrero":
			alert("Tiene 28 días")
			break;
		
		
		case "Abril":

		case "Junio":

		case "Septiembre":

		case "Noviembre":
			alert("Tiene 30 días");
		break;
		
		default:
			alert("Tiene 31 días")
			break;
	}




}//FIN DE LA FUNCIÓN
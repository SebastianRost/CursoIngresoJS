function mostrar()
{
	//tomo la hora
	let hora;
	hora = document.getElementById("txtIdHora").value;
	switch (hora) {
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("Es de mañana")
			break;
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
			alert("Es de tarde")
			break;
		case "17":
		case "18":
		case "19":
		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
			alert("Es de noche")
			break;
		default:
			alert("La hora no existe")
			break;
	
	


}
}//FIN DE LA FUNCIÓN
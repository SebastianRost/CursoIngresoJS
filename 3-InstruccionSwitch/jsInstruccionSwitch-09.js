function mostrar()
{

	let precio;
	let estacion;
	let destino;
	let precioFinal;

	precio = 15000;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {
		case "Invierno":
			
			switch (destino) {
				case "Bariloche":
					precioFinal= precio*1.2;
					break;
				case "Mar del plata":
					precioFinal= precio*0.8;
					break;
				default:
					precioFinal=precio*0.9;
					break;
	}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					precioFinal= precio*0.8;
					break;
				case "Mar del plata":
					precioFinal= precio*1.2;
					break;
				default:
					precioFinal= precio*1.1;
					break;
	}
			break;
		default:
			switch (destino) {
				case "Cordoba":
					precioFinal= precio;
					break;
				default:
					precioFinal= precio*1.1;
					break;
			}

					break;
	}
	alert(precioFinal)
}//FIN DE LA FUNCIÓN

//Estrategia de resolucion
//1-definir variables
//2-relevar datos de entrada
//3-definir ambito para cada estacion
//4-dentro de cada ambito de estacion definir un ambito para cada destino de
//5- calculos precio final
//6-informamos precio final
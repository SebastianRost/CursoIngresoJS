function mostrar()
{
	// Bienvenidos.
	// En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	

	let sexo;
	let edad;
	let temperatura;
	let estadoCivil;
	let nombre;
	let seguir;
	let contaSolteroViudo = 0;
	let contaMayoresViudos = 0;
	let viejoFiebre=0;
	let flag = 1;
	let maxTemp;
	let maxNombre;
	let acumEdadSolteros = 0;
	let contadorSoltero=0;
	let promedio = 0;

	do {
		nombre= prompt("ingrese nombre");
		edad= parseInt(prompt("ingrese edad"));
		while(edad <= 0 || isNaN(edad)){
			edad = parseInt(prompt("Error, ingrese edad:"));
		}
		sexo = prompt("ingrese sexo f/m:");
		while(sexo!="f" && sexo!="m"){
		sexo = prompt("error.ingrese sexo f/m:");
		}
		estadoCivil = prompt("ingrese estado civil soltero/casado/viudo:");
		while(estadoCivil!="casado" && estadoCivil!="soltero" && estadoCivil!="viudo"){
		estadoCivil = prompt("error.ingrese estado civil soltero/casado/viudo:");
		}
		temperatura= parseFloat(prompt("ingrese temperatura"));
		while(temperatura <= 0 || isNaN(temperatura)){
			temperatura = parseFloat(prompt("Error, ingrese temperatura:"));
		}

		if (flag || temperatura > maxTemp) {
			maxTemp = temperatura;
			maxNombre = nombre;
			flag =0;
		}
		if (edad>=18 && estadoCivil=="viudo"){
			contaMayoresViudos++;
		}
		if (sexo =="m" && estadoCivil !="casado"){
			contaSolteroViudo++;
		}
		if (edad > 60 && temperatura>38) {
			viejoFiebre++;
		}
		if (sexo=="m" && estadoCivil=="soltero"){
			acumEdadSolteros+=edad;
			contadorSoltero++;
		}

		seguir = prompt("Ingresa otro pasajero?: s/n");
	} while (seguir == 's');

	console.log("a) El nombre de la persona con mas temperatura es: "+ maxNombre+ " con "+maxTemp+" de temperatura");
	console.log("b)Mayores de edad estan viudos: "+contaMayoresViudos);
	console.log("c) La cantidad de hombres que hay solteros o viudos: "+contaSolteroViudo);
	console.log("d) Gente mayor con fiebre: "+viejoFiebre);
	if (contadorSoltero !=0) {
		promedio = acumEdadSolteros/contadorSoltero;
	}
	console.log("e) El promedio de edad entre los hombres solteros: "+promedio)
}

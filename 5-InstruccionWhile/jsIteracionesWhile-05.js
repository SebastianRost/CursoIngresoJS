/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("ingrese sexo m o f").toLowerCase();
	while(!(sexo=="m"||sexo=="f")){
		prompt("ingrese sexo m o f").toLowerCase();
	}
	document.getElementById("txtIdSexo").value = `Su sexo es: ${sexo}`	
	
}//FIN DE LA FUNCIÓN
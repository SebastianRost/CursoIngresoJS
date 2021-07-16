/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{	
	let mostrarDatos;
	mostrarDatos = prompt("Ingrese dato a mostrar");
	document.getElementById("txtIdNombre").value= mostrarDatos;
}


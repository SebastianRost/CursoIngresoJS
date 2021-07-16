/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	aumento = sueldo* 10 / 100;
	resultado = sueldo+ aumento;
	document.getElementById("txtIdResultado").value = resultado;
	
}

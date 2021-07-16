/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	
	let n1;
	let n2;
	let total;
	n1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	n2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = n1+n2;
	alert(`La suma es ${total} `)
}


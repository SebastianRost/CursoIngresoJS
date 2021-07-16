/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let n1;
	let n2;
	let total;
	n1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	n2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = n1+n2;
	alert(`la suma es ${total}`);	
}

function restar()
{
	let n1;
	let n2;
	let total;
	n1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	n2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = n1-n2;
	alert(`la resta es ${total}`);
}

function multiplicar()
{ 
	let n1;
	let n2;
	let total;
	n1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	n2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = n1*n2;
	alert(`la multiplicacion es ${total}`);
}

function dividir()
{
	let n1;
	let n2;
	let total;
	n1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	n2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = n1/n2
	alert(`la division es ${total}`);
}


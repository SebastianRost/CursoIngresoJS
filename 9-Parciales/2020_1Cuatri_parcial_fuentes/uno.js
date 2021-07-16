
function mostrar()
{

	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let acumBar=0;
	let acumJab=0;
	let acumAlc=0;
	let contBar=0;
	let contJab=0;
	let contAlc=0;
	let precioAlcBarato=0;
	let flagA=0;
	let cantidadAlcBarato=0;
	let fabricanteAlcBarato=0;
	let promedio=0;
	let mayor;


for (let i = 0; i < 5; i++) {
	tipo = prompt("ingrese tipo 'barbijo' , 'jabon' o 'alcohol' ");
	while(tipo !="barbijo" && tipo !="jabon" && tipo !="alcohol"){
		tipo = prompt("Tipo incorrecto. ingrese tipo 'barbijo' , 'jabon' o 'alcohol' ")
	}
	precio = parseFloat(prompt("ingrese precio entre $100 y $300"));
	while(precio<100 || precio>300 || isNaN(precio)){
	precio = parseFloat(prompt("Error.ingrese precio entre $100 y $300"));
	}	
	cantidad = parseFloat(prompt("ingrese cantidad (max 1000)"));
	while(!(cantidad>0 && cantidad<=1000)){
	cantidad = parseFloat(prompt("Error.ingrese cantidad (max 1000)"));
	}
	marca = prompt("ingrese marca ");
	fabricante = prompt("ingrese fabricante");

	if (tipo=="barbijo") {
		acumBar+=cantidad;
		contBar++;
	}
	else if (tipo=="alcohol"){
		acumAlc+=cantidad;
		contAlc++;
		if (precioAlcBarato>precio || flagA==0) {
			precioAlcBarato=precio;	
			cantidadAlcBarato= cantidad;
			fabricanteAlcBarato= fabricante;
			flagA=1;
		}
		
	}else{
		acumJab+=cantidad;
		contJab++;
	}

}
if (acumJab>acumAlc && acumJab>acumBar) {
	mayor= "Jabon";
	promedio= acumJab/contJab;
} else if(acumAlc>acumBar && acumAlc>=acumJab){
	promedio= acumAlc/contAlc;
	mayor= "Alcohol";
}else{
	promedio= acumBar/contBar;
	mayor= "Barbijo";
}

alert("a)La cantidad de unidades del alcohol mas barato es: "+cantidadAlcBarato+" y el fabricante es: "+fabricanteAlcBarato+
"/n b) El promedio por compra del "+mayor+" es: "+promedio+
"/n c) Hay "+acumJab+" unidades de jabon")

}

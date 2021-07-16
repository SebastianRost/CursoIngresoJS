/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
let numero = 0;
let acuN= 0;
let acuP = 0;
let contaN = 0;
let contaP = 0;
let contaCero = 0;
let contaPar = 0;
let promedioN = 0;
let PromedioP = 0;
let total = 0;

	do {
	numero= parseInt(prompt("Ingrese un numero:"))
	while (isNaN(numero)) {
		numero = parseInt(prompt("Ese no es un numero. Ingrese un numero:"))
    }
    if (numero>=0) {
        acuP+=  numero;
        contaP++;
    } else {
        acuN+=numero;
        contaN++;
    }		
    if (numero == 0) {
        contaCero++;
    }
    if (numero%2==0) {
        contaPar++;
    }
    seguir = prompt("Quiere continuar? s/n");
} while (seguir == "s");
if (contaP != 0) {
 PromedioP = acuP/contaP;   
}
if (contaN != 0) {
promedioN = acuN/contaN;}

total = acuP+acuN;
console.log("La suma de los numeros negativos es: "+acuN);
console.log("La suma de los numeros positivos es: "+acuP);
console.log("La cantidad de numeros negativos es: "+contaN);
console.log("La cantidad de numeros positivos es: "+contaP);
console.log("La cantidad de ceros es: "+contaCero);
console.log("La cantidad de numeros pares es: "+contaPar);
console.log("El promedio de numeros negativos es: "+promedioN);
console.log("El promedio de numeros positivos es: "+PromedioP);
console.log("La Diferencia entre negativos y positivos es de: "+total);
}//FIN DE LA FUNCIÓN
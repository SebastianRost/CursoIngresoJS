function mostrar()
{
 let tipo;
 let cantidad;
 let precio;
 let descuento;
 let bruto;
 let contaArena=0;
 let contaCal=0;
 let contaCem=0;
 let acuArena=0;
 let acuCem=0;
 let acuCal=0;
 let sigue = "s";
 let totalBolsas;
 let masBolsas;
 let masCaro;

  
  do {
    tipo = prompt("Ingrese tipo: (arena,cal,cemento)");
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento"){
    tipo = prompt("No es valido.Ingrese tipo: (arena,cal,cemento)");
    }
    cantidad = parseInt(prompt("Ingrese cantidad"));
    while (cantidad<1 || isNaN(cantidad)){
    cantidad = parseInt(prompt("Error.Ingrese cantidad"));
    }
    precio = parseFloat(prompt("Ingrese precio"));
    while (precio<1 || isNaN(precio)){
    precio = parseInt(prompt("Error.Ingrese precio"));
    }
    if (tipo == "arena") {
      contaArena+=cantidad;
      acuArena+=precio;
    } else if(tipo == "cal") {
      contaCal+=cantidad;
      acuCal+=precio;
    } else{
      contaCem+=cantidad;
      acuCem+=precio;
    }
    sigue = prompt("Desea seguir comprando? s/n")
  } while (sigue == "s");

  bruto= acuArena+acuCem+acuCal;

  totalBolsas = contaCem+contaCal+contaArena;
  if (totalBolsas > 10) {
    descuento = "B)El importe a pagar neto es: $"+bruto*0.85;
  } else if (totalBolsas > 30) {
    descuento = "B)El importe a pagar neto es: $"+bruto*0.75;
  }else{
    descuento = "B)No hay descuento";
  }
  if (contaArena>contaCal && contaArena>contaCem) {
    masBolsas=" C)Hay mas bolsas de arena";
  }else if (contaCal>=contaArena && contaCal>=contaCem) {
    masBolsas=" C)Hay mas bolsas de cal";
  }else{
    masBolsas=" C)Hay mas bolsas de cemento";
  }
  if (acuArena>acuCal && acuArena>acuCem) {
    masCaro= " D)El mas caro es arena";
  } else if(acuCal>=acuArena&& acuCal>=acuCem) {
    masCaro= " D)El mas caro es cal";
  }else{
    masCaro= " D)El mas caro es cemento";
  }

  alert("A)El importe a pagar bruto es: $"+bruto+descuento+masBolsas+masCaro);

}

/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/

function mostrar()
{

  let marca;
  let tipo;
  let precio;
  let peso;
  let pesoTotal = 0;
  let marcaCaraLiquido;
  let precioLiquidoCaro;
  let marcaLivianoSolidos;
  let pesoLivianoSolidos;
  let seguir;
  let flagSolidos = 0;
  let flagLiquidos = 0;

  do{

    tipo = prompt("Ingrese el tipo de producto 'SOLIDO' o 'LIQUIDO': ").toLowerCase();
    while(tipo != "solido" && tipo != "liquido"){
      tipo = prompt("ERROR! Ingrese el tipo de producto 'SOLIDO' o 'LIQUIDO': ").toLowerCase(); 
    }

    marca = prompt("Inngrese la marca del producto: ");
    while(!isNaN(marca)){
      marca = prompt("ERROR! Inngrese la marca del producto: ");
    }

    precio = parseFloat(prompt("Ingrese precio del producto: "));
    while(isNaN(precio) || precio <= 0){
      precio = prompt("ERROR! Ingrese precio del producto: ");
    }

    peso = parseFloat(prompt("Ingrese peso del producto: "));
    while(isNaN(peso) || peso <= 0){
      peso = prompt("ERROR! Ingrese peso del producto: ");
    }

    if(tipo == "liquido"){

        if(flagLiquidos == 0 || precioLiquidoCaro < precio){
        precioLiquidoCaro = precio;
        marcaCaraLiquido = marca;
        flagLiquidos = 1;
      }
   }
    else{
          if(flagSolidos == 0 || pesoLivianoSolidos > peso){
            marcaLivianoSolidos = marca;
            pesoLivianoSolidos = peso;
            flagSolidos = 1;
          }
    }

    pesoTotal = pesoTotal + peso;

    seguir = prompt("Pulse 'S' para agregar mas productos o cualquier tecla para continuar: ").toLowerCase();

  } while(seguir == "s");


  console.log("El peso total de la compra es: " + pesoTotal + " KG");

  if(flagLiquidos == 0){
    console.log("No se registran productos liquidos");
  }
  else{
    console.log("La marca mas cara de los productos liquidos es: " + marcaCaraLiquido + " con un precio de: $" + precioLiquidoCaro);
  }


  if(flagSolidos == 0){
    console.log("No se registran productos solidos");
  }
  else{
    console.log("La marca mas liviana de los productos solido es: " + marcaLivianoSolidos + " con un peso de: " + pesoLivianoSolidos + " KG");
  }
  
}

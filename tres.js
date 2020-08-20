/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{


 let nombre;
 let lugar;
 let temporada;
 let cantidad;
 let lugarMasElegido;
 let promedioPersonasInv;
 let seguir;
 let flag = 0;
 let mayorCantidad;
 let nombreMayorCantidad;

 let contBariloche = 0;
 let contCataratas = 0;
 let contSalta = 0;
 let contInvierno = 0;
 let acumPersonasInv = 0;



 do{

	nombre = prompt("Ingrese nombre: ").toLowerCase();
	while(!isNaN(nombre)){
		nombre = prompt("ERROR! Nombre invalido. Ingrese nombre: ").toLowerCase();
	}

	lugar = prompt("Ingrese destino 'BARILOCHE', 'CATARATAS' o 'SALTA': ").toLowerCase();
	while(lugar != "cataratas" && lugar != "bariloche" && lugar != "salta"){
		lugar = prompt("ERROR! Ingrese destino 'BARILOCHE', 'CATARATAS' o 'SALTA': ").toLowerCase();
	}

	temporada = prompt("Ingrese temporada 'VERANO', 'PRIMAVERA' o 'OTOÑO' 'INVIERNO': ").toLowerCase();
	while(temporada != "verano" && temporada != "primavera" && temporada != "otoño" && temporada != "invierno"){
		temporada = prompt("ERROR! Ingrese temporada 'VERANO', 'PRIMAVERA' o 'OTOÑO' 'INVIERNO': ").toLowerCase();
	}

	cantidad = parseInt(prompt("Ingrese cantidad de pasajeros: "));
	while(isNaN(cantidad) || cantidad <= 0){
		cantidad = parseInt(prompt("ERROR! Ingrese cantidad de pasajeros: "));
	}


	if(lugar == "bariloche"){
		contBariloche ++;

	} else if(lugar == "cataratas"){
		contCataratas ++;
	}
	else{
		contSalta ++;
	}


	if(flag == 0 || mayorCantidad < cantidad){
		mayorCantidad = cantidad;
		nombreMayorCantidad = nombre;
		flag = 1;
	}


	if(temporada == "invierno"){
		contInvierno ++;
		acumPersonasInv = acumPersonasInv + cantidad;
	}

	seguir = prompt("'S' para agregar mas destinos y personas o presione cualquier tecla para continuar: ").toLowerCase();

 } while(seguir == "s");


 promedioPersonasInv = acumPersonasInv / contInvierno;

 if(contCataratas > contBariloche && contCataratas > contSalta){
	lugarMasElegido = "Cataratas";
	
 } else if(contBariloche > contCataratas && contBariloche > contSalta){
	 lugarMasElegido = "Bariloche";
 }
 else{
	 lugarMasElegido = "Salta";
 }


 console.log("El lugar mas elegido es: " + lugarMasElegido);

 console.log("El nombre del titular que lleva mas pasajeros es: " + nombreMayorCantidad + " con una cantidad de: " + mayorCantidad + " de personas");

 if(contInvierno == 0){
	console.log("No se registran personas que viajen en invierno");
 }
 else{
	console.log("El promedio de las personas que viajan en invierno " + promedioPersonasInv);
 }
}

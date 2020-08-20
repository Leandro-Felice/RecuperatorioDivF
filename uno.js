/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let edad;
	let sexo;
	let nombre;
	let temperatura;
	let contMujeres = 0;
	let contHombres = 0;
	let acumuladorEdad = 0;
	let mayortemp;
	let mujerMayortemp;
	let promedioEdad;
	let flagM = 0;

 for(let i = 0; i < 5; i++){

	nombre = prompt("Ingrese nombre: ").toLowerCase();
	while(!isNaN(nombre)){
		nombre = prompt("ERROR! Nombre invalido. Ingrese nombre: ").toLowerCase();
	}

	edad = parseInt(prompt("Ingrese edad: "));
	while(isNaN(edad) || edad <= 0){
		edad = parseInt(prompt("ERROR! Edad invalida. Ingrese edad: "));
	}

	sexo = prompt("Ingrese sexo 'F' o 'M': ").toLowerCase();
	while(sexo != "m" && sexo != "f"){
		sexo = prompt("ERROR! Sexo invalido. Ingrese sexo: ").toLowerCase();
	}

	temperatura = parseFloat(prompt("Ingrese temperatura 'F' o 'M': "));
	while(isNaN(temperatura) || temperatura <= 0){
		temperatura = parseFloat(prompt("ERROR! temperatura invalida. Ingrese temperatura: "));
	}

	if(sexo == "f"){
		contMujeres++;
	}
	else{
		contHombres++;
	}

	if(flagM == 0 || mayortemp < temperatura){
		mayortemp = temperatura;
		mujerMayortemp = nombre;
		flagM = 1;
	}

	acumuladorEdad = acumuladorEdad + edad;
 } 

 promedioEdad = acumuladorEdad / 5;

 
 console.log("El promedio de edad es: " + promedioEdad);


 if(flagM == 0 || contMujeres == 0){
	 console.log("No se registran mujeres");
 }
 else{
	console.log("La cantidad total de mujeres es: " + contMujeres);
	console.log("La mujer con mayor temperatura es: " + mujerMayortemp + " registra una temperatura de: " + mayortemp + " °C");
 }
 

 if(contHombres == 0){
	 console.log("No se registran hombres");
 }
 else{
	console.log("La cantidad total de hombres es: " + contHombres);
 }

 






}

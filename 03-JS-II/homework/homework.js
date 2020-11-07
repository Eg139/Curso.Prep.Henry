// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x>y) {
    return x;
  }else{
    return y;
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var saludo;
  if (idioma == "aleman") {
    saludo = "Guten Tag!";
  } else if (idioma == "mandarin") {
    saludo = "Ni Hao!";
  }else if (idioma == "ingles") {
    saludo = "Hello!";
  }else{
    saludo = "Hola!";
  }
  return saludo;
}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    var resultado = false;
    if (numero == 10 || numero == 5) {
      resultado = true;
    }
    return resultado;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  let resultado = false;
  if (numero < 50 && numero > 20) {
    resultado = true;
  }
  return resultado;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  let result = false;
  if ((numero - Math.floor(numero))==0 ) {
    result = true;
  }
  return result;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let result;
  if (numero % 5 == 0 && numero % 3 == 0) {
    result = "fizzbuzz";
  }else if (numero % 5 == 0) {
    result = "buzz";
  } else if (numero % 3 == 0){
    result = "fizz";
  }else{
    result = numero;
  }
  return result;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  let aux= true;

  if (numero == 0 || numero == 1) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}

	return true;


}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};

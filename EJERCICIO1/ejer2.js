/*
Determina el rango de un número:
Declara una variable número con un valor numérico y utiliza condicionales para
determinar en qué rango se encuentra.
*/
let num = 1000;
let rango;

if (num < 0) {
  rango = "Número negativo";
} else if (num >= 0 && num <= 10) {
  rango = "El número se encuentra en el rango de 0 a 10";
} else if (num >= 10 && num <= 20) {
  rango = "El número se encuentra en el rango de 10 a 20";
} else {
  rango = "El número es mayor que 20";
}
console.log(rango)

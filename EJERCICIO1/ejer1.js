/*
Declara tres variables a, b y c con valores numéricos y utiliza condicionales
para determinar cuál de ellos es el mayor.
let grado= parseFloat(prompt("Ingresa tu número: "))
*/
let a = parseInt(prompt("Por favor ingresa el valor de A: "));
let b = parseInt(prompt("Por favor ingresa el valor de B: "));
let c = parseInt(prompt("Por favor ingresa el valor de C: "));
let mayor;
if (a >= b && a >= c) {
  mayor = a;
} else if (b >= a && b >= c) {
  mayor = b;
} else {
  mayor = c;
}
console.log("El número mayor es: ", mayor);

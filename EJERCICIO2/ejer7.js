/*
Inversión y manipulación de arrays:
Crea un array de palabras. Muestra el array original, luego uno con los elementos
invertidos, y otro con cada palabra en mayúsculas si tiene más de 5 letras.
*/
let palabras=["sol","casa","arbol","javascript"];
console.log("Array original: ", palabras)

let invertido= [...palabras].reverse();
console.log("Array invertido: ", invertido)

let transformado= palabras.map(palabra=> palabra.length>5 ? palabra.toUpperCase(): palabra);
console.log("Transformado: ", transformado)
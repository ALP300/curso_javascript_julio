/*
Verificación de año bisiesto y edad legal:
Pide el año de nacimiento y determina si es bisiesto. Luego calcula la edad del usuario
y verifica si es mayor de edad (18+).



*/
let añoNacimiento= parseInt(prompt("Ingrese su año de nacimiento: "))
let añoActual= new Date().getFullYear();
let esBisiesto= (añoNacimiento%4===0 && añoNacimiento %100!==0 ||añoNacimiento%400===0 );
console.log(`El año ${añoNacimiento} ${esBisiesto? "es bisiesto": "no es bisiesto" }`);
let edad= añoActual - añoNacimiento
if (edad>=18){
    console.log("Mayor de edad")
} else{
    console.log("No eres mayor de edad")
}
console.log(añoActual)
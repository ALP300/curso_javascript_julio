/*
Contador de dígitos pares e impares:
Solicita un número entero largo, y con un bucle determina cuántos dígitos son pares y
cuántos impares.
*/
let num= prompt("Ingrese un número entero largo: ")
let pares=0
let impares=0

for(let digito of num){
    let num= parseInt(digito)
    if (!isNaN(num)){
        if(num%2===0){
            pares++;
        }else{
            impares++
        }}   
}
console.log(`Dígitos pares: ${pares}`)
console.log(`Dígitos impares: ${impares}`)
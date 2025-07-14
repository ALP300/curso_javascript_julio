/*
Calculadora simple:
Declara tres variables: a (un número), operador (un operador aritmético como
cadena), y b (otro número). Utiliza condicionales para realizar la operación
correspondiente y muestra el resultado.
*/
let a= 20
let operador= "/"
let b= 30
let resultado
switch(operador){
    case '+':
        resultado= a+b
        break

    case '-':
        resultado= a-b
        break

    case '*':
        resultado= a*b
        break
    
    case '/':
        resultado= a/b
        break
    
    default:
        resultado="Operador no válido"

}
console.log("EL resultado es: ", resultado)

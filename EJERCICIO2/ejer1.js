/*
Sistema de clasificación de rendimiento:
Solicita al usuario su nota (0-20) y su asistencia (%). Si la nota es mayor o igual a 11 y
la asistencia es mayor o igual al 70%, se aprueba. De lo contrario, se desaprueba.
Además, otorga menciones especiales para notas mayores a 17 con asistencia completa.
*/
let nota= parseFloat(prompt("Ingresa tu nota (0-20): "))
let asistencia= parseFloat(prompt("Ingrese su porcentaje de asistencia (0-100): "))

if (isNaN(nota) || isNaN(asistencia) || nota < 0 || nota>20 || asistencia<0 || asistencia>100){
    console.log("Datos inválidos. La nota debe estar entre 0 y 20 y asistencia entre 0 y 100")
} else{
    if (nota>=11 && asistencia>=70){
        console.log("Aprobado")
        if(nota>17 && asistencia===100){
            console.log("Excelente rendimiento!")

        }
    }else{
        console.log("Desaprobado")
    }
}
/*
Evaluación de estudiantes:
Dado un array de estudiantes (nombre, notas[]), calcula el promedio individual y
muestra los que aprobaron (promedio ≥ 11) y su mención (suficiente, bueno, excelente).
*/
const estudiantes=[
    {nombre: "Ana", notas:[12,16,20]},
    {nombre: "Pedro", notas:[19,12,10]},
    {nombre: "Juan", notas:[17,13,18]},
];
function calcularPromedio(notas){
    return notas.reduce((sum, nota)=> sum+nota,0) / notas.length;
}
function mencion(promedio){
    if(promedio>=17) return "Excelente"
    if(promedio>=14) return "Bueno"
    return "Suficiente"
}
const resultados= estudiantes.map(est=>{
    const promedio= calcularPromedio(est.notas)
    const estado= promedio>=11 ? "Aprobado": "Desaprobado"
    const menciones= promedio>=11 ? mencion(promedio) : " ";
    return{
        nombre: est.nombre,
        promedio: promedio.toFixed(2),
        estado,
        menciones
    }
})
resultados.forEach(res=>{
    if(res.estado="Aprobado"){
        console.log(`${res.nombre}: Promedio ${res.promedio} -- Estado ${res.estado}  -- MENCION ${res.menciones}`)
    }else{
        console.log(`${res.nombre}: Promedio ${res.promedio} -- Estado ${res.estado} `)
    }
})

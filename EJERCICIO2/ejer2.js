/*
2. Validación de acceso:
Solicita usuario, contraseña y rol (admin, editor, visitante). Verifica si las credenciales
son válidas y muestra los permisos disponibles según el rol. Usa múltiples condicionales
y lógica anidada.
*/
const credenciales={
    usuario: "admin",
    contraseña:"12345"
}
let usuario= prompt("Ingresa su usuario: ")
let contraseña= prompt("Ingresa la contraseña: ")
let rol= prompt("Ingrese su rol (admin, editor, visitante): ").toLowerCase()

if(usuario===credenciales.usuario && contraseña===credenciales.contraseña){
    console.log("Acceso concedido");
    switch(rol){
        case "admin":
            console.log("Permisos de : editar, eliminar y gestionar ")
            break;
        case "editor":
            console.log("Permisos de: Crear, editar el contenido")
            break;
        case "visitante":
            console.log("Permisos de solo lectura")
            break
        default:
            console.log("Rol no válido")
    } 
}else{
   console.log("Acceso denegado :p ") 
}
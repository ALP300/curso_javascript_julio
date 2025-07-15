class Libro{
    #id;
    constructor(titulo, autor, isbn , disponible=true){
        this.#id= (Math.random() + 1).toString(36).substring(7);
        this.titulo= titulo
        this.autor= autor
        this.isbn= isbn
        this.disponible= disponible
    }

    prestar(){
        if(this.disponible){
            this.disponible= false;
            return `Libro "${this.titulo}" prestado con éxito`
        }
        return `Libro "${this.titulo}" no está disponible`
    }

    devolver(){
        if(!this.disponible){
            this.disponible= true;
            return `Libro "${this.titulo}" devuelto con éxito`
        }
        return `Libro "${this.titulo}" ya está disponible`
    }
}

const libro1= new Libro("Don Quijote", "Cervantes", "374398423", false)
console.log(libro1.devolver())
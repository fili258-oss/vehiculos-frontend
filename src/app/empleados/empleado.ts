export class Empleado{
    id: number;
    identificacion: string;
    nombre: string;
    edad: string;    
    genero: string;
    telefono: string;

    public constructor(id:number, identificacion:string, nombre:string, edad:string, genero:string, telefono:string){
        this.id = id;
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.telefono = telefono;
    }
}
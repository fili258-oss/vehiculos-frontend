export class Vehiculo{
    id: number;
    placa: string;
    modelo: string;
    marca: string;    
    color: string;
    imagen: string;

    public constructor(id:number, placa:string, modelo:string, marca:string, color:string, imagen:string){
        this.id = id;
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.imagen = imagen;
    }
}
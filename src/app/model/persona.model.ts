export class Persona{


id?: number;
nombre: string;
apellido: string;
descripcion: string;
img: string;


constructor(nombre: string,apellido: string,img: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.descripcion = apellido;
    this.img = img;
}
}

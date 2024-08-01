import {Region} from './region';

export class Client {
    id!:number;
    nombre!: string;
    apellido!: string;
    email!: string;
    direccion!: string;
    celular!:string;
    fechaNacimiento!: string; 
    region!: Region;   
    
}
import {Client} from './client';
import {Item } from './item';

export class Invoice{
   
    id!:number;
    descripcion!:string;
    client!:Client;
    items!:Item[];
    total!:number;


}
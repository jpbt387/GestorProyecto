import {Proyecto} from './proyecto'
export interface Respuesta
{
    codigo:number;
    mensaje:string;
    informacion:Proyecto;
}
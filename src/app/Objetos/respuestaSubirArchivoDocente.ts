import { ArchivoDocente } from './subirArchivoDocente';

export interface RespuestaSubirArchivoDocente
{
    codigo:number;
    mensaje:string;
    informacion:ArchivoDocente;
}
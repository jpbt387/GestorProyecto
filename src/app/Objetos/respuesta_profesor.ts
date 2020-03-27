import { Profesor } from './profesor';

export interface respuestaProfesor
{
    codigo:number;
    mensaje:string;
    informacion_profesor:Profesor;
}
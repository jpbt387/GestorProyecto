import { Estudiante } from './estudiantes';

export interface respuesta_Profesor_Estudiante
{
    codigo:number;
    mensaje:string;
    informacion_estudiante:Estudiante;
}
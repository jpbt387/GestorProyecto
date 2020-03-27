import { respuesta_Profesor_Estudiante } from './respuesta_profesor_estudiante';

export interface RespuestaUsuarioDocente
{
    mensaje:string;
    codigo:string;
    info:respuesta_Profesor_Estudiante;
}
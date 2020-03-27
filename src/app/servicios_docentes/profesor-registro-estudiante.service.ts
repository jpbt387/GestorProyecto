import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { respuesta_Profesor_Estudiante } from '../Objetos/respuesta_profesor_estudiante';

@Injectable({
  providedIn: 'root'
})
export class ProfesorRegistroEstudianteService 
{
  rutaServicioRegistroEstudiante:string = 'http://192.168.56.1:8080/ServAuten/app/docente/registrarEstudiante'
  constructor(private httpSolicitud:HttpClient) { }

  registrarEstudiante(idEstudiante:string,nombres:string,apellidos:string,correo:string,telefono:string,idProyecto:string,idProfesorEncardado:string):Promise<respuesta_Profesor_Estudiante>
  {
    const informaciónEstudiante = 
    {
      idEstudiante:idEstudiante,
      nombres:nombres,
      apellidos:apellidos,
      correo:correo,
      telefono:telefono,
      idProyecto:idProyecto,
      idProfesorEncardado:idProfesorEncardado
    }
    return this.httpSolicitud.post<respuesta_Profesor_Estudiante>(`${this.rutaServicioRegistroEstudiante}`,informaciónEstudiante).toPromise();
  }


}

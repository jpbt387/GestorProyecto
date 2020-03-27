import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { respuestaProfesor } from '../Objetos/respuesta_profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorRegistroService 
{
  rutaServicioRegistroProfesor:string = 'http://192.168.56.1:8080/ServAuten/app/docente/registrarDocente'
  constructor(private httpSolicitud:HttpClient) { }
  registrarProfesor(cedula:string,nombre:string,apellidos:string,correo:string,telefono:string):Promise<respuestaProfesor>
  {
    const informacionProfesor = 
    {
      "cedula":cedula,
      "nombre":nombre,
      "apellidos":apellidos,
      "correo":correo,
      "telefono":telefono
    }
    return this.httpSolicitud.post<respuestaProfesor>(`${this.rutaServicioRegistroProfesor}`,informacionProfesor).toPromise();
  }
}
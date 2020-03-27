import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { respuesta_Profesor_Estudiante } from '../Objetos/respuesta_profesor_estudiante';
import { RespuestaUsuarioDocente } from '../Objetos/respuesta-usuario-docente';

@Injectable({
  providedIn: 'root'
})
export class ServicioAutenticarDocenteService 
{
  rutaServicioAutenticarDocente = 'http://192.168.56.1:8080/ServAuten/app/docente/autenticarDocente'
  constructor(private servicioAutenticarDocente:HttpClient) { }

  autenticarDocente(nombreUsuario:string,contraseña:string):Promise<RespuestaUsuarioDocente>
  {
    const informacionUsuarioDocente =
    {
      "nombreUsuario":nombreUsuario,
      "contraseña":contraseña
    }
    return this.servicioAutenticarDocente.post<RespuestaUsuarioDocente>(`${this.rutaServicioAutenticarDocente}`,informacionUsuarioDocente).toPromise();
  }
}

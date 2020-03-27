import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Respuesta } from '../Objetos/respuesta';

@Injectable({
  providedIn: 'root'
})
export class ProyectoRegistroService 
{
  rutaServicioRegistroProyecto:string = 'http://192.168.56.1:8080/ServAuten/app/docente/registrarProyecto'
  constructor(private httpSolicitud:HttpClient) { }

  registrar(idProyecto:string,nombreProyecto:string,comentarios:string):Promise<Respuesta>
  {
    const informacion = 
    {
      "idProyecto":idProyecto,
      "nombreProyecto":nombreProyecto,
      "comentarios":comentarios
    }
    return this.httpSolicitud.post<Respuesta>(`${this.rutaServicioRegistroProyecto}`,informacion).toPromise();
  }
}

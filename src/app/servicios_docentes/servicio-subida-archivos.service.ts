import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaSubirArchivoDocente } from '../Objetos/respuestaSubirArchivoDocente';

@Injectable({
  providedIn: 'root'
})
export class ServicioSubidaArchivosService {

  rutaSubidaArchivosDocente:string = 'http://192.168.56.1:8080/ServAuten/app/docente/subirArchivo'
  constructor(private httpSolicitud:HttpClient) { }
  cargarArchivos(archivo:File):Promise<RespuestaSubirArchivoDocente>
  {
    const valorArchivo =
    {
      archivo:archivo
    }
    return this.httpSolicitud.post<RespuestaSubirArchivoDocente>(`${this.rutaSubidaArchivosDocente}`,valorArchivo).toPromise();
  }


}

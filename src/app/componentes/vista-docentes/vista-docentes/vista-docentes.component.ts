import { Component, OnInit, ɵBypassType } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioSubidaArchivosService } from 'src/app/servicios_docentes/servicio-subida-archivos.service';
import { RespuestaSubirArchivoDocente } from 'src/app/Objetos/respuestaSubirArchivoDocente';

@Component({
  selector: 'app-vista-docentes',
  templateUrl: './vista-docentes.component.html',
  styleUrls: ['./vista-docentes.component.scss']
})
export class VistaDocentesComponent implements OnInit {

  uploadedFiles:File;
  codificado:string;
  respuestaServicio:RespuestaSubirArchivoDocente;
  ups:BinaryType;
  constructor(private enrutador:Router,private servicioSubirArchivo:ServicioSubidaArchivosService) { }

  ngOnInit(): void {
  }

  onUpload()
  {
    console.log('Upload');
    console.log(this.uploadedFiles[0].name);
    console.log(this.uploadedFiles[0].size);
    this.ups = this.uploadedFiles[0];
    console.log(this.ups);
    const promesaServicio:Promise<RespuestaSubirArchivoDocente> = this.servicioSubirArchivo.cargarArchivos(this.uploadedFiles[0]);
      promesaServicio.then((valor:RespuestaSubirArchivoDocente) =>
      {
        this.respuestaServicio = valor;
        if(this.respuestaServicio.codigo == 1)
        {
          alert(this.respuestaServicio.mensaje);
        }else
        {
          alert(this.respuestaServicio.mensaje);
        }
      });
    }
    onFileChange(e)
    {
      console.log('FileChange',e);
      this.uploadedFiles = e.target.files;
      console.log(this.uploadedFiles[0].type);
      console.log(this.uploadedFiles[0].name);
    }
  }
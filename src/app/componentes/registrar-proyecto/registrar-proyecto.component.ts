import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/Objetos/proyecto';
import {Respuesta} from 'src/app/Objetos/respuesta'
import { ProyectoRegistroService } from 'src/app/servicios_docentes/proyecto-registro.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar-proyecto',
  templateUrl: './registrar-proyecto.component.html',
  styleUrls: ['./registrar-proyecto.component.scss']
})
export class RegistrarProyectoComponent implements OnInit {

  constructor(private servicio:ProyectoRegistroService,private enrutador:Router) { }

  ngOnInit(): void 
  {
  }

  nombreProyecto: string;
  idProyecto: string;
  comentarios:string = ' ';
  respuesta_service: Respuesta;
  objeto_proyecto : Proyecto;

  registrar_proyecto()
  {
    if(this.nombreProyecto === undefined || this.idProyecto === undefined)
    {
      alert("ha dejado un campo sin rellenar");
    }else{
      const x: Promise<Respuesta> =  this.servicio.registrar(this.idProyecto,this.nombreProyecto,this.comentarios);

    x.then((value: Respuesta) => {
      this.respuesta_service = value;
      if(this.respuesta_service.codigo==1)
      {
        alert("registrados");
      }else{
        alert(this.respuesta_service.mensaje);
      }
    });
    }
  }
  regresar()
  {

  }
}

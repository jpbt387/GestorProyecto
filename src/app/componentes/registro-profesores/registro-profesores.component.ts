import { Component, OnInit } from '@angular/core';
import { ProfesorRegistroService } from 'src/app/servicios_docentes/profesor-registro.service';
import { respuestaProfesor } from 'src/app/Objetos/respuesta_profesor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-profesores',
  templateUrl: './registro-profesores.component.html',
  styleUrls: ['./registro-profesores.component.scss']
})
export class RegistroProfesoresComponent implements OnInit {

  constructor(private servcioRegistroProfesor:ProfesorRegistroService, private enrutador:Router) { }

  ngOnInit(): void {
  }
  cedula:string;
  nombre:string;
  apellidos:string;
  correo:string;
  telefono:string;
  respuesta_servicio:respuestaProfesor;
  registrarProfesor()
  {
    if(this.cedula.match('a-z'))
    {
      alert("solo valores numéricos en la cédula");
    }
    if(this.cedula === undefined)
    {
      alert("no ha ingresado su cédula");
    }else if(this.nombre === undefined)
    {
      alert("no ha ingresado su nombre");
    }else if(this.apellidos === undefined)
    {
      alert("no ha ingresado sus apellidos");
    }else if(this.correo == undefined)
    {
      alert("no ha ingresado su correo");
    }else if(this.telefono === undefined)
    {
      alert("no ha ingresado su número de teléfono");
    }else
    {
      const x: Promise<respuestaProfesor> =  this.servcioRegistroProfesor.registrarProfesor(this.cedula,this.nombre,this.apellidos,this.correo,this.telefono);

    x.then((value:respuestaProfesor) => {
      this.respuesta_servicio = value;
      if(this.respuesta_servicio.codigo==1)
      {
        alert("registrados");
      }else{
        alert(this.respuesta_servicio.mensaje);
      }
    });
    }
  }
  regresar()
  {
    this.enrutador.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ProfesorRegistroEstudianteService } from 'src/app/servicios_docentes/profesor-registro-estudiante.service';
import { respuesta_Profesor_Estudiante } from 'src/app/Objetos/respuesta_profesor_estudiante';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.scss']
})
export class RegistrarEstudianteComponent implements OnInit 
{
    idEstudiante:string;
    nombres:string;
    apellidos:string;
    correo:string;
    telefono:string;
    idProyecto:string;
    idProfesorEncardado:string;
    respuesta_Servicio:respuesta_Profesor_Estudiante;
  constructor(private servicioRegistroEstudainte:ProfesorRegistroEstudianteService) { }

  ngOnInit(): void {
  }

  registrarEstudiante()
  {
    if(this.idEstudiante === undefined)
    {
      alert("no ha ingresado el documento del estudiante");
    }else if(this.nombres === undefined)
    {
      alert("no ha ingresado el nombre del estudiante");
    }else if(this.apellidos === undefined)
    {
      alert("no ha ingresado los apellidos del estudiante");
    }else if(this.correo === undefined)
    {
      alert("no ha ingresado el correo del estudiante");
    }else if(this.telefono === undefined)
    {
      alert("no ha ingresado el telefono del estudiante");
    }else if(this.idProyecto === undefined)
    {
      alert("no ha ingresado el identificador del ptoyecto");
    }else if(this.idProfesorEncardado === undefined)
    {
      alert("no ha ingresado el documento del profesor encargado");
    }else
    {
      const promesaServicio: Promise<respuesta_Profesor_Estudiante> = this.servicioRegistroEstudainte.registrarEstudiante(this.idEstudiante,
        this.nombres,this.apellidos,this.correo,this.telefono,this.idProyecto,this.idProfesorEncardado);
        promesaServicio.then((valor:respuesta_Profesor_Estudiante) =>
        {
          this.respuesta_Servicio = valor;
          if(this.respuesta_Servicio.codigo==1)
            {
              alert("registrados");
            }else
            {
             alert(this.respuesta_Servicio.mensaje);
            }
        });
    }
  }
}

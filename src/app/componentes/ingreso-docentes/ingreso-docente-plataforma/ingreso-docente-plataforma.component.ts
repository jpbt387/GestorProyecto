import { Component, OnInit } from '@angular/core';
import { ServicioAutenticarDocenteService } from 'src/app/servicios_docentes/servicio-autenticar-docente.service';
import { RespuestaUsuarioDocente } from 'src/app/Objetos/respuesta-usuario-docente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-docente-plataforma',
  templateUrl: './ingreso-docente-plataforma.component.html',
  styleUrls: ['./ingreso-docente-plataforma.component.scss']
})
export class IngresoDocentePlataformaComponent implements OnInit 
{
  usuario:string;
  contrasenha:string;
  respuesta_servicio:RespuestaUsuarioDocente;
  pdf:BinaryType;
  constructor(private servicioAutenticarDocente:ServicioAutenticarDocenteService,private enrutador:Router) { }
  ngOnInit(): void {
  }
  autenticarDocente()
  {
    if(this.usuario === undefined)
    {

    }else if(this.contrasenha === undefined)
    {

    }else
    {
      const respuestaAutenticarDocente:Promise<RespuestaUsuarioDocente> = this.servicioAutenticarDocente.autenticarDocente(this.usuario,this.contrasenha);
      respuestaAutenticarDocente.then((valor:RespuestaUsuarioDocente) =>
      {
        this.respuesta_servicio = valor;
        if(this.respuesta_servicio.codigo == "1")
        {
          this.enrutador.navigate(['vistaDocente']);
        }else if(this.respuesta_servicio.codigo == "2")
        {
          alert("casi");
        }
        else if(this.respuesta_servicio.codigo == "0")
        {
          alert("no");
        }
      });
    }
  }
  regresar()
  {
    this.enrutador.navigate(['filtroIngreso']);
  }
  //
  /**
   * https://nehalist.io/uploading-files-in-angular2/
   * https://desarrolloweb.com/manuales/manual-angular-2.html
   */
}

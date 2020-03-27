import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  constructor(private enrutador:Router) { }

  ngOnInit(): void {
  }
  ingresoDocente()
  {
    this.enrutador.navigate(['ingresoDocentePlataforma']);
  }
  ingresoEstudiante()
  {
    this.enrutador.navigate(['ingresoEstudiantePlataforma']);
  }
  regresar()
  {
    this.enrutador.navigate(['']);
  }
}

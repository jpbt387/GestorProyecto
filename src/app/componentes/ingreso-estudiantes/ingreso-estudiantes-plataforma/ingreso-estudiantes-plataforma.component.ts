import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-estudiantes-plataforma',
  templateUrl: './ingreso-estudiantes-plataforma.component.html',
  styleUrls: ['./ingreso-estudiantes-plataforma.component.scss']
})
export class IngresoEstudiantesPlataformaComponent implements OnInit {

  usuario:string;
  contrasenha:string;
  constructor() { }

  ngOnInit(): void {
  }
  regresar()
  {
  }
}

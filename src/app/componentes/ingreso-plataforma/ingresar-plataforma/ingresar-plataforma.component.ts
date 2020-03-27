import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-plataforma',
  templateUrl: './ingresar-plataforma.component.html',
  styleUrls: ['./ingresar-plataforma.component.scss']
})
export class IngresarPlataformaComponent implements OnInit {

  constructor(private enrutador:Router) { }

  ngOnInit(): void {
  }

  ingresar()
  {
    this.enrutador.navigate(['filtroIngreso']);
  }
  registrar()
  {
    this.enrutador.navigate(['registroDocente']);
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoEstudiantesPlataformaComponent } from './ingreso-estudiantes-plataforma.component';

describe('IngresoEstudiantesPlataformaComponent', () => {
  let component: IngresoEstudiantesPlataformaComponent;
  let fixture: ComponentFixture<IngresoEstudiantesPlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoEstudiantesPlataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoEstudiantesPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

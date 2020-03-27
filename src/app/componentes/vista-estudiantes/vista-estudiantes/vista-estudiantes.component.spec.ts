import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEstudiantesComponent } from './vista-estudiantes.component';

describe('VistaEstudiantesComponent', () => {
  let component: VistaEstudiantesComponent;
  let fixture: ComponentFixture<VistaEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

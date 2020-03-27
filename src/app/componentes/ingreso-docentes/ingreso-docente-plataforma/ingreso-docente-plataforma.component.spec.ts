import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoDocentePlataformaComponent } from './ingreso-docente-plataforma.component';

describe('IngresoDocentePlataformaComponent', () => {
  let component: IngresoDocentePlataformaComponent;
  let fixture: ComponentFixture<IngresoDocentePlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoDocentePlataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoDocentePlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDocenteComponent } from './vista-docente.component';

describe('VistaDocenteComponent', () => {
  let component: VistaDocenteComponent;
  let fixture: ComponentFixture<VistaDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

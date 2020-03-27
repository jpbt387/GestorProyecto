import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDocentesComponent } from './vista-docentes.component';

describe('VistaDocentesComponent', () => {
  let component: VistaDocentesComponent;
  let fixture: ComponentFixture<VistaDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

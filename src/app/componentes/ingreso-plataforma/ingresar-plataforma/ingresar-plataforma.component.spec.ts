import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPlataformaComponent } from './ingresar-plataforma.component';

describe('IngresarPlataformaComponent', () => {
  let component: IngresarPlataformaComponent;
  let fixture: ComponentFixture<IngresarPlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarPlataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

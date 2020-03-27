import { TestBed } from '@angular/core/testing';

import { ServicioAutenticarDocenteService } from './servicio-autenticar-docente.service';

describe('ServicioAutenticarDocenteService', () => {
  let service: ServicioAutenticarDocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAutenticarDocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ProfesorRegistroEstudianteService } from './profesor-registro-estudiante.service';

describe('ProfesorRegistroEstudianteService', () => {
  let service: ProfesorRegistroEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesorRegistroEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

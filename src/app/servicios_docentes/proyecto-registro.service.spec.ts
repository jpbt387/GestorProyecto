import { TestBed } from '@angular/core/testing';

import { ProyectoRegistroService } from './proyecto-registro.service';

describe('ProyectoRegistroService', () => {
  let service: ProyectoRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

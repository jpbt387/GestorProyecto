import { TestBed } from '@angular/core/testing';

import { ProfesorRegistroService } from './profesor-registro.service';

describe('ProfesorRegistroService', () => {
  let service: ProfesorRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesorRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FlussoEsitoService } from './flusso-esito.service';

describe('FlussoEsitoService', () => {
  let service: FlussoEsitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlussoEsitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

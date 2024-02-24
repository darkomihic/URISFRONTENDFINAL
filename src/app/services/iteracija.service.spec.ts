import { TestBed } from '@angular/core/testing';

import { IteracijaService } from './iteracija.service';

describe('IteracijaService', () => {
  let service: IteracijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IteracijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

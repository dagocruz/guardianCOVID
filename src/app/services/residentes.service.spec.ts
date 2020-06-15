import { TestBed } from '@angular/core/testing';

import { ResidentesService } from './residentes.service';

describe('ResidentesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidentesService = TestBed.get(ResidentesService);
    expect(service).toBeTruthy();
  });
});

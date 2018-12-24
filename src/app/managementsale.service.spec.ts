import { TestBed } from '@angular/core/testing';

import { ManagementsaleService } from './managementsale.service';

describe('ManagementsaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagementsaleService = TestBed.get(ManagementsaleService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TextileService } from './textile.service';

describe('TextileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextileService = TestBed.get(TextileService);
    expect(service).toBeTruthy();
  });
});

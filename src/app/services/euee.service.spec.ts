import { TestBed } from '@angular/core/testing';

import { EUEEService } from './euee.service';

describe('EUEEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EUEEService = TestBed.get(EUEEService);
    expect(service).toBeTruthy();
  });
});

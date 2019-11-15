import { TestBed } from '@angular/core/testing';

import { AlldataService } from './alldata.service';

describe('AlldataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlldataService = TestBed.get(AlldataService);
    expect(service).toBeTruthy();
  });
});

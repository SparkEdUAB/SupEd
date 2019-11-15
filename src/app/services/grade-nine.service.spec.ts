import { TestBed } from '@angular/core/testing';

import { GradeNineService } from './grade-nine.service';

describe('GradeNineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GradeNineService = TestBed.get(GradeNineService);
    expect(service).toBeTruthy();
  });
});

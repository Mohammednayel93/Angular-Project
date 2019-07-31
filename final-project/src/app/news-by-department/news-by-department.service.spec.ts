import { TestBed } from '@angular/core/testing';

import { NewsByDepartmentService } from './news-by-department.service';

describe('NewsByDepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsByDepartmentService = TestBed.get(NewsByDepartmentService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FilterPresenterService } from './filter-presenter.service';

describe('FilterPresenterService', () => {
  let service: FilterPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

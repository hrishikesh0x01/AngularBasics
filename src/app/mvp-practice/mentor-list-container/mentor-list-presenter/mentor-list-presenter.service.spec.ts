import { TestBed } from '@angular/core/testing';

import { MentorListPresenterService } from './mentor-list-presenter.service';

describe('MentorListPresenterService', () => {
  let service: MentorListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MentorFormPresenterService } from './mentor-form-presenter.service';

describe('MentorFormPresenterService', () => {
  let service: MentorFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

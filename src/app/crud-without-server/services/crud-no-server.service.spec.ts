import { TestBed } from '@angular/core/testing';

import { CrudNoServerService } from './crud-no-server.service';

describe('CrudService', () => {
  let service: CrudNoServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudNoServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

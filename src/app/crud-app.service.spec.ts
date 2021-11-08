import { TestBed } from '@angular/core/testing';

import { CrudAppService } from './crud-app.service';

describe('CrudAppService', () => {
  let service: CrudAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

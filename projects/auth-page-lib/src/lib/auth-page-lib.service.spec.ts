import { TestBed } from '@angular/core/testing';

import { AuthPageLibService } from './auth-page-lib.service';

describe('AuthPageLibService', () => {
  let service: AuthPageLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPageLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

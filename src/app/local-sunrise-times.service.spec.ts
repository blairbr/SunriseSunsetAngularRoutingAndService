import { TestBed } from '@angular/core/testing';

import { LocalSunriseTimesService } from './local-sunrise-times.service';

describe('LocalSunriseTimesService', () => {
  let service: LocalSunriseTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalSunriseTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

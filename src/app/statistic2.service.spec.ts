import { TestBed } from '@angular/core/testing';

import { Statistic2Service } from './statistic2.service';

describe('Statistic2Service', () => {
  let service: Statistic2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Statistic2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

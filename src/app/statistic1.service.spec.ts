import { TestBed } from '@angular/core/testing';

import { Statistic1Service } from './statistic1.service';

describe('Statistic1Service', () => {
  let service: Statistic1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Statistic1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

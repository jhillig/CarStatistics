import { TestBed } from '@angular/core/testing';

import { Statistic3Service } from './statistic3.service';

describe('Statistic3Service', () => {
  let service: Statistic3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Statistic3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

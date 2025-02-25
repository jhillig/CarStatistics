import { TestBed } from '@angular/core/testing';

import { Statistic4Service } from './statistic4.service';

describe('Statistic4Service', () => {
  let service: Statistic4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Statistic4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export { Statistic4Service };

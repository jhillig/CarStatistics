import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistic2Component } from './statistic2.component';

describe('Statistic2Component', () => {
  let component: Statistic2Component;
  let fixture: ComponentFixture<Statistic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistic2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

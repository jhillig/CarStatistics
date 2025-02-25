import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistic3Component } from './statistic3.component';

describe('Statistic3Component', () => {
  let component: Statistic3Component;
  let fixture: ComponentFixture<Statistic3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistic3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistic3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

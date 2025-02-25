import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistic4Component } from './statistic4.component';

describe('Statistic4Component', () => {
  let component: Statistic4Component;
  let fixture: ComponentFixture<Statistic4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistic4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistic4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

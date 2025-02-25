import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistic5Component } from './statistic5.component';

describe('Statistic5Component', () => {
  let component: Statistic5Component;
  let fixture: ComponentFixture<Statistic5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistic5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistic5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

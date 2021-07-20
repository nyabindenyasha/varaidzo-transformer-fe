import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsManholeComponent } from './charts-manhole.component';

describe('ChartsComponent', () => {
  let component: ChartsManholeComponent;
  let fixture: ComponentFixture<ChartsManholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsManholeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsManholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

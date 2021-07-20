import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsOverheadComponent } from './charts-overhead.component';

describe('ChartsComponent', () => {
  let component: ChartsOverheadComponent;
  let fixture: ComponentFixture<ChartsOverheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsOverheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsOverheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

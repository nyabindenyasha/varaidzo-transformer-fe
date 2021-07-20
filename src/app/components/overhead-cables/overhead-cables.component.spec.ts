import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverheadCablesComponent } from './overhead-cables.component';

describe('OverheadCablesComponent', () => {
  let component: OverheadCablesComponent;
  let fixture: ComponentFixture<OverheadCablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverheadCablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverheadCablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

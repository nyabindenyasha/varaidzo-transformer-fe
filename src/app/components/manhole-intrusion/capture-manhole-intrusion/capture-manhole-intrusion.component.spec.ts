import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureManholeIntrusionComponent } from './capture-manhole-intrusion.component';

describe('CaptureManholeIntrusionComponent', () => {
  let component: CaptureManholeIntrusionComponent;
  let fixture: ComponentFixture<CaptureManholeIntrusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureManholeIntrusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureManholeIntrusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

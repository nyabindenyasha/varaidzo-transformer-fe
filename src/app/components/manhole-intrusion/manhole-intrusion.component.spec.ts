import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManholeIntrusionComponent } from './manhole-intrusion.component';

describe('ManholeIntrusionComponent', () => {
  let component: ManholeIntrusionComponent;
  let fixture: ComponentFixture<ManholeIntrusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManholeIntrusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManholeIntrusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

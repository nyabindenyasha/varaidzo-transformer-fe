import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManholesComponent } from './manholes.component';

describe('ManholesComponent', () => {
  let component: ManholesComponent;
  let fixture: ComponentFixture<ManholesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManholesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManholesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

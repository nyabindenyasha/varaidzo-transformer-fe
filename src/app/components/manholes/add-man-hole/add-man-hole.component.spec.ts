import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManHoleComponent } from './add-man-hole.component';

describe('AddManHoleComponent', () => {
  let component: AddManHoleComponent;
  let fixture: ComponentFixture<AddManHoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddManHoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

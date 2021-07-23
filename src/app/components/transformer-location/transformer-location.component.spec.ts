import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerLocationComponent } from './transformer-location.component';

describe('TransformerLocationComponent', () => {
  let component: TransformerLocationComponent;
  let fixture: ComponentFixture<TransformerLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformerLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformerLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

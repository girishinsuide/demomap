import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfpComponent } from './displayfp.component';

describe('DisplayfpComponent', () => {
  let component: DisplayfpComponent;
  let fixture: ComponentFixture<DisplayfpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayfpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

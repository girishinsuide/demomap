import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefpComponent } from './createfp.component';

describe('CreatefpComponent', () => {
  let component: CreatefpComponent;
  let fixture: ComponentFixture<CreatefpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatefpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

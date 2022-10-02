import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHandelingComponent } from './form-handeling.component';

describe('FormHandelingComponent', () => {
  let component: FormHandelingComponent;
  let fixture: ComponentFixture<FormHandelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHandelingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHandelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

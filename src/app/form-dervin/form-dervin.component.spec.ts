import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDervinComponent } from './form-dervin.component';

describe('FormDervinComponent', () => {
  let component: FormDervinComponent;
  let fixture: ComponentFixture<FormDervinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDervinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDervinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

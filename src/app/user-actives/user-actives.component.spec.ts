import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivesComponent } from './user-actives.component';

describe('UserActivesComponent', () => {
  let component: UserActivesComponent;
  let fixture: ComponentFixture<UserActivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserActivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

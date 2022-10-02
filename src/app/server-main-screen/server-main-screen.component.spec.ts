import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerMainScreenComponent } from './server-main-screen.component';

describe('ServerMainScreenComponent', () => {
  let component: ServerMainScreenComponent;
  let fixture: ComponentFixture<ServerMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerMainScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerObjectComponent } from './server-object.component';

describe('ServerObjectComponent', () => {
  let component: ServerObjectComponent;
  let fixture: ComponentFixture<ServerObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

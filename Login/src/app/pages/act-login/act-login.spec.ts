import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActLogin } from './act-login';

describe('ActLogin', () => {
  let component: ActLogin;
  let fixture: ComponentFixture<ActLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

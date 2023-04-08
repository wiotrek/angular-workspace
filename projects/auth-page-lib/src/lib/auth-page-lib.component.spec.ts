import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageLibComponent } from './auth-page-lib.component';

describe('AuthPageLibComponent', () => {
  let component: AuthPageLibComponent;
  let fixture: ComponentFixture<AuthPageLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPageLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPageLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

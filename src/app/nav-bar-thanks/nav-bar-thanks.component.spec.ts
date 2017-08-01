import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarThanksComponent } from './nav-bar-thanks.component';

describe('NavBarThanksComponent', () => {
  let component: NavBarThanksComponent;
  let fixture: ComponentFixture<NavBarThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

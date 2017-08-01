import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarTransComponent } from './nav-bar-trans.component';

describe('NavBarTransComponent', () => {
  let component: NavBarTransComponent;
  let fixture: ComponentFixture<NavBarTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

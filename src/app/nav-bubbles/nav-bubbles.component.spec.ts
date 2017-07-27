import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBubblesComponent } from './nav-bubbles.component';

describe('NavBubblesComponent', () => {
  let component: NavBubblesComponent;
  let fixture: ComponentFixture<NavBubblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBubblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

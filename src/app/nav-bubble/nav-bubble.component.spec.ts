import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBubbleComponent } from './nav-bubble.component';

describe('NavBubbleComponent', () => {
  let component: NavBubbleComponent;
  let fixture: ComponentFixture<NavBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

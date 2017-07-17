import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadDashboardComponent } from './launchpad-dashboard.component';

describe('LaunchpadDashboardComponent', () => {
  let component: LaunchpadDashboardComponent;
  let fixture: ComponentFixture<LaunchpadDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchpadDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

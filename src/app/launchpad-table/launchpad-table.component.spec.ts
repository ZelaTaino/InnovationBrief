import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadTableComponent } from './launchpad-table.component';

describe('LaunchpadTableComponent', () => {
  let component: LaunchpadTableComponent;
  let fixture: ComponentFixture<LaunchpadTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchpadTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

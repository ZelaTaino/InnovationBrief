import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadFormsComponent } from './launchpad-forms.component';

describe('LaunchpadFormsComponent', () => {
  let component: LaunchpadFormsComponent;
  let fixture: ComponentFixture<LaunchpadFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchpadFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationBriefAnswersComponent } from './innovation-brief-answers.component';

describe('InnovationBriefAnswersComponent', () => {
  let component: InnovationBriefAnswersComponent;
  let fixture: ComponentFixture<InnovationBriefAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovationBriefAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationBriefAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

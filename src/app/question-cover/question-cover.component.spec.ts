import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCoverComponent } from './question-cover.component';

describe('QuestionCoverComponent', () => {
  let component: QuestionCoverComponent;
  let fixture: ComponentFixture<QuestionCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

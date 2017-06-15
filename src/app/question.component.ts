import { Component, Input } from '@angular/core';
import { Question } from './question'

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent {
    @Input() question: Question;
}


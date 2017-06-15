import { Component } from '@angular/core';
import { Question } from './question';
import { QuestionSheetService } from './question-sheet.service';
import { OnInit } from '@angular/core';

@Component({
	selector: 'question-sheet',
	templateUrl:'./question-sheet.component.html',
	providers: [QuestionSheetService]
})

export class QuestionSheetComponent implements OnInit {
	questions : Question[];

	constructor(private questionSheetService: QuestionSheetService){}

	getQuestions(): void {
		this.questions = this.questionSheetService.getQuestions();
	}

	ngOnInit(): void {
		this.getQuestions();
	}
}
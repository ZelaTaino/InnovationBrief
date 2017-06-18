import { Component } from '@angular/core';
import { Question } from './question';
import { QuestionSheetService } from './question-sheet.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'question-sheet',
	templateUrl:'./question-sheet.component.html',
	providers: [QuestionSheetService]
})

export class QuestionSheetComponent implements OnInit {
	sheetType = "Background Information";
	questions : Question[];

	constructor(private questionSheetService: QuestionSheetService){}

	ngOnInit(): void {
		console.log("ngOnit");
		this.questionSheetService.getQuestions()
		.do(console.log)
		.subscribe(
			question => this.questions = question
		);
		console.log("QUESTIONS");
		console.log(this.questions);
	}
}
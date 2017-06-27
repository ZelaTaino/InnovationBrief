import { Question } from '../models/question';
import { Injectable } from '@angular/core';
import { QUESTIONS } from '../models/mock-questions';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class QuestionSheetService {

	constructor(private db:AngularFireDatabase){

		// const q$ : FirebaseListObservable<any> = db.list('backgroundQuestions');
		//this writes to the console
		// q$.subscribe(console.log);
	}

	getQuestions() : Observable<Question[]> {
		console.log("getQuestions");
		return this.db.list('background')
		.do(console.log)
		.map(Question.fromJsonList);		
	}
}
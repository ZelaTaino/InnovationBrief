import { Question } from './question';
import { Injectable } from '@angular/core';
import { QUESTIONS } from './mock-questions';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class QuestionSheetService {

	constructor(private db:AngularFireDatabase){

		const q$ : FirebaseListObservable<any> = db.list('backgroundQuestions');

		// q$.subscribe(
		// 	val => console.log(val)
		// );
		//this writes to the console
		q$.subscribe(console.log);
	}

	getQuestions() : Observable<Question[]> {
		return this.db.list('backgroundQuestions')
		.do(console.log)
		.map(Question.fromJsonList);		
	}
	
	// getQuestions() :  Question[] {
	// 	return QUESTIONS;
	// }
}
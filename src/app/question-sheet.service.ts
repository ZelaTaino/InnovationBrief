import { Question } from './question';
import { Injectable } from '@angular/core';
import { QUESTIONS } from './mock-questions';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class QuestionSheetService {

	constructor(private db:AngularFireDatabase){}
	
	getQuestions() :  Question[] {
		return QUESTIONS;
	}
}
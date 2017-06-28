import { Response } from '../models/response';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BackgroundFormService {

	private basePath: string = "/response";

	answers : FirebaseListObservable<any>;
	response_list : Observable<Response[]>;

	constructor(private db:AngularFireDatabase){}

	/*
	Component should call this method 
	to see if we should write or update
	the answers
	Takes user_id and question_id
	*/
	writeOrUpdate(user_id: number, question_id: number){

	}

	/*
	If theres no answer for this user,
	survey, question then write to db
	*/
	pushAnswer(answer: Response){
		console.log("Got here");
		this.answers.push(answer);
	}

	/*
	It should load answers already written
	to the db for this specific user and
	question.
	When page loads, component should
	call this function to answers on screen.
	*/
	readAnswers(query={}): FirebaseListObservable<any>{
		console.log("Read answer");
		this.answers = this.db.list(this.basePath, {query: query});
		// this.answers.subscribe( answers =>{
		// 	answers.forEach(a => {
		// 		console.log(a.answer);
		// 	});
		// });
		return this.answers;
	}

	/*
	If there is already an entry from
	this user, survey, question it 
	sould load on screen update
	*/
	updateAnswer(){}
}
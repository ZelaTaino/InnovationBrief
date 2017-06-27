import { Response } from '../models/response';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BackgroundFormService {

	private basePath: string = "/response";
	//figure out how to get the list
	answers : FirebaseListObservable<any> = null;

	constructor(private db:AngularFireDatabase){}

	pushAnswer(answer: Response){
		console.log("Got here");
		this.answers.push(answer);
	}
}
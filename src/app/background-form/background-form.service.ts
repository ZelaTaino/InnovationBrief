import { Response } from '../models/response';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BackgroundFormService {

	private basePath: string = "/response";

	answers : FirebaseListObservable<any> = this.db.list(this.basePath);

	constructor(private db:AngularFireDatabase){}

	pushAnswer(answer: Response){
		console.log("Got here");
		this.answers.push(answer);
	}
}
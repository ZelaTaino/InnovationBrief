import { Response } from './response';
import { InnovationBriefResponses } from './innovation-brief-responses';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class InnovationBriefService {

	private basePath: string = "/responses";
	ib_responses: InnovationBriefResponses;

	responses$: FirebaseListObservable<any>;

	constructor(private db:AngularFireDatabase){}

	setIBR(){
		console.log("setting ibr dict", this.ib_responses.getDict());
		// TODO: make user a var
		const path = this.db.object("/responses/user0");
		path.update({ [this.ib_responses.$key] : this.ib_responses.getDict() });
	}

	getResponses(): Observable<InnovationBriefResponses>{
		console.log("getting responses");
		return this.db.object('responses/user0/form0')
			.do(val => console.log(val))
			.map(val => InnovationBriefResponses.fromJson(val));
	}

}
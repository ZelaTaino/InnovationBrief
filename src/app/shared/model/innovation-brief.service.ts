import { InnovationBriefResponses } from './innovation-brief-responses';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../security/auth.service';

@Injectable()
export class InnovationBriefService {

  private basePath: string = "/responses";
  ib_responses: InnovationBriefResponses;

  responses$: FirebaseListObservable<any>;

  constructor(private db:AngularFireDatabase){}

  setIBR(){
    console.log("setting ibr dict", this.ib_responses.getDict());
    // TODO: make user a var
    const path = this.db.object("/responses/" + AuthService.UNKNOWN_USER.getUserId());
    path.update({ [this.ib_responses.$key] : this.ib_responses.getDict() });
  }

  getResponses(): Observable<InnovationBriefResponses>{
    console.log("getting responses from: ", AuthService.UNKNOWN_USER.getUserId());
    return this.db.object('responses/' + AuthService.UNKNOWN_USER.getUserId() + '/form0')
      .do(val => console.log(val))
      .map(val => InnovationBriefResponses.fromJson(val));
  }

}
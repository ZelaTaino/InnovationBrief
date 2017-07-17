import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { LaunchPad } from './launch-pad';
import { Form } from './form';


@Injectable()
export class GeneralService {

  constructor(private db: AngularFireDatabase) {}

  getLaunchPads(): Observable<LaunchPad[]>{
    return this.db.list('launch-pads')
      .do(val => console.log("getting Launch pad list: ", val))
      .map(val => LaunchPad.fromJsonList(val));

  }

  getForms(){
    return this.db.list('forms')
      .do(val => console.log(val))
      .map(val => Form.fromJsonList(val));
  }

}

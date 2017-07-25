import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../security/auth.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class QuestionService {

  constructor(
    private db:AngularFireDatabase,
    private authService: AuthService) { }

  getQuestion():Observable<any> {
    return this.db.object('questions/form0/q_1');
  }

}

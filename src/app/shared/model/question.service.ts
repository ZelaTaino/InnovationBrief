import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../security/auth.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Question } from './question';

@Injectable()
export class QuestionService {

  constructor(
    private db:AngularFireDatabase,
    private authService: AuthService) { }

  getQuestion(question_tag):Observable<Question> {
    return this.db.object(`questions/form0/${question_tag}`)
      .map(val => Question.fromJson(val));
  }

  updateAnswer(uid, answer_tag, answer){
    const path = this.db.object(`/responses/${uid}/form0`);
    path.update({ [answer_tag] : answer });
  }

  getAnswer(uid, answer_tag): Observable<any>{
    return this.db.object(`/responses/${uid}/form0/${answer_tag}`);
  }

}

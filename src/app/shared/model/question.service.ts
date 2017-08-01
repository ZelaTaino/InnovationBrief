import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../security/auth.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Question } from './question';

@Injectable()
export class QuestionService {

  form_id = "form0"; //change to make dynamic

  constructor(
    private db:AngularFireDatabase,
    private authService: AuthService) { }

  getQuestion(question_tag):Observable<Question> {
    return this.db.object(`questions/${this.form_id}/${question_tag}`)
      .map(val => Question.fromJson(val));
  }

  updateAnswer(uid, answer_tag, answer){
    const path = this.db.object(`/responses/${uid}/${this.form_id}`);
    path.update({ [answer_tag] : answer });
  }

  getAnswer(uid, answer_tag): Observable<any>{
    return this.db.object(`/responses/${uid}/${this.form_id}/${answer_tag}`);
  }

  submit(uid){
    const path = this.db.object(`userFormCompletion/${uid}`);
    path.update({[this.form_id]: true});
  }

}

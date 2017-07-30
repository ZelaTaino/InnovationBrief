import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionService } from '../shared/model/question.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Question } from '../shared/model/question';
import { AuthService } from '../security/auth.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  //get id from parameter
  //use that to get question, answer, and uploads
  num_questions = 11;
  question_id: number;
  answer_tag: string;
  uploader_tag: string;
  question: Question;
  response = "";

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private question_service: QuestionService,
    private router: Router) {
     }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.setTags(params['id']);
      this.getQuestion(params['id']);
      this.getAnswer(params['id']);
      this.question_id = +params['id'];
    });
  }

  getQuestion(id){
    let question_tag = `q_${id}`;
    this.question_service.getQuestion(question_tag)
      .do(val => console.log(val))
      .subscribe(val => this.question = val);
  }

  setTags(id){
    this.answer_tag = "a_" + id;
    this.uploader_tag = `a_${id}_files`;
    console.log("tag: ", this.uploader_tag);
  }

  getAnswer(id){
    this.authService.getCurrentUserId()
      .then(uid => {
        this.question_service.getAnswer(uid, this.answer_tag)
        .do(val => console.log(val.$value))
          .subscribe(val => this.response = val.$value);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateAnswer(){
    this.authService.getCurrentUserId()
      .then(uid => {
        this.question_service.updateAnswer(uid, this.answer_tag, this.response);
      })
      .catch(err =>
        console.log(err)
      );
  }

  next(){
    if((this.question_id + 1) !<= this.num_questions){
      let next_id = this.question_id + 1;
      this.router.navigate(['innovation-brief', next_id]);
      console.log("entered: ", next_id);
    }

    if(this.question_id == this.num_questions){
      this.router.navigate(['innovation-brief/confirmation']);
    }
  }

  previous(){
    if((this.question_id - 1) !> 0){
      let prev_id = this.question_id - 1;
      this.router.navigate(['innovation-brief', prev_id]);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../shared/model/question.service';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  //TODO: Add num questions to form to make dynamic

  num_bubbles = 11;

  constructor(
    private router: Router,
    private question_service: QuestionService,
    private authService: AuthService
  ) { }

  ngOnInit() {}

  submit(){

    this.authService.getCurrentUserId()
      .then(uid => {
        this.question_service.submit(uid);
        this.router.navigate(['innovation-brief/completed']);
      })
      .catch(err => {
        console.log(err);
      });
      
  }

  save(){
    this.authService.logout();
  }

  prev(){
    console.log("TEST");
    this.router.navigate(['innovation-brief/11']);
  }

}

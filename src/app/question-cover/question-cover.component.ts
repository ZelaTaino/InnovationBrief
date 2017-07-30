import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-cover',
  templateUrl: './question-cover.component.html',
  styleUrls: ['./question-cover.component.css']
})
export class QuestionCoverComponent implements OnInit {

  num_bubbles = 13;

  constructor() { }

  ngOnInit() {
  }

}

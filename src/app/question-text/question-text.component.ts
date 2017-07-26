import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../shared/model/question.service'

@Component({
  selector: 'app-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.css']
})
export class QuestionTextComponent implements OnInit {

  @Input() tag_id: string;
  question: any;

  constructor(private question_service: QuestionService) { }

  ngOnInit() {
  }

}

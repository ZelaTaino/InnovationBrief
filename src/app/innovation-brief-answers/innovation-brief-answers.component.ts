import { Component, OnInit } from '@angular/core';
import { InnovationBriefService } from '../shared/model/innovation-brief.service';
import { InnovationBriefResponses } from '../shared/model/innovation-brief-responses';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-innovation-brief-answers',
  templateUrl: './innovation-brief-answers.component.html',
  styleUrls: ['./innovation-brief-answers.component.css']
})
export class InnovationBriefAnswersComponent implements OnInit {
  
  ibr: InnovationBriefResponses;

  constructor(private activeRoute: ActivatedRoute, private ib_service: InnovationBriefService) { 
    this.ibr = new InnovationBriefResponses();
  }

  ngOnInit() {
    this.activeRoute.params
        .subscribe((params: Params) => {
          this.ib_service.getResponses(params['id'])
              .subscribe(val => this.ibr = val);
        });
  }

}

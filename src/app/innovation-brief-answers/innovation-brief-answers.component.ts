import { Component, OnInit } from '@angular/core';
import { InnovationBriefService } from '../shared/model/innovation-brief.service';
import { InnovationBriefResponses } from '../shared/model/innovation-brief-responses';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-innovation-brief-answers',
  templateUrl: './innovation-brief-answers.component.html',
  styleUrls: ['./innovation-brief-answers.component.css']
})
export class InnovationBriefAnswersComponent implements OnInit {
  
  ibr: InnovationBriefResponses;
  launchpad_id: any;

  constructor(
    private activeRoute: ActivatedRoute, 
    private ib_service: InnovationBriefService,
    private authService: AuthService,
    private router: Router) { 
    this.ibr = new InnovationBriefResponses();
  }

  ngOnInit() {
    this.authService.getCurrentUserId()
        .then(uid => {

          if(this.authService.isAdmin(uid)){
            this.activeRoute.params
                .subscribe((params: Params) => {
                  this.launchpad_id = params['id'];
                  this.ib_service.getResponses(params['id'])
                      .subscribe(val => this.ibr = val);
                });
          }else{
            console.log('logged in user id: ', uid);
            this.ib_service.getResponses(uid)
                .do(val => console.log("ngOnInit background", val))
                .subscribe(val => this.ibr = val);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
  }

  submit(){
    this.authService.getCurrentUserId()
      .then(uid => {
        this.ib_service.updateCompletion(uid);
        this.router.navigate(['innovation-brief/completed']);
      })
      .catch(err => {
        console.log(err);
      });
  }

}

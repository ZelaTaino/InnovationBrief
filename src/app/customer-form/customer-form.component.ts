import { Component } from '@angular/core';
import { InnovationBriefResponses } from '../shared/model/innovation-brief-responses';
import { InnovationBriefService } from '../shared/model/innovation-brief.service';
import { AuthService } from '../security/auth.service';

import { Router } from '@angular/router';

@Component({
	selector:'customer-form',
	templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent {

	ibr: InnovationBriefResponses;

	constructor(private authService: AuthService, private router: Router, private ib_service: InnovationBriefService){
		this.ibr = new InnovationBriefResponses();
	}

	ngOnInit(): void {
		this.authService.getCurrentUserId()
        .then(uid => {

          console.log('logged in user id: ', uid);
          if(!this.ib_service.ib_responses){
            this.ib_service.getResponses(uid)
                .do(val => console.log("ngOnInit customer", val))
                .subscribe(val => this.ibr = val);
          }else{
            this.ibr = this.ib_service.ib_responses;
          }

        })
        .catch(function (err) {
          console.log(err);
        });
	}

	createIBR(a_4, a_5, a_6){
		this.ibr.a_4 = a_4;
		this.ibr.a_5 = a_5;
		this.ibr.a_6 = a_6;
		this.ib_service.ib_responses = this.ibr;
		console.log("creating ibr: ", this.ibr);
	}

	// nextScreen(){
	// 	this.router.navigateByUrl('/market-form');
	// }
}
import { Component } from '@angular/core';
import { InnovationBriefResponses } from '../shared/model/innovation-brief-responses';
import { InnovationBriefService } from '../shared/model/innovation-brief.service';
import { AuthService } from '../security/auth.service';

import { Router } from '@angular/router';

@Component({
	selector: 'market-form',
	templateUrl: './market-form.component.html'
})
export class MarketFormComponent{

	ibr: InnovationBriefResponses;

	constructor(private authService: AuthService, private router: Router, private ib_service: InnovationBriefService){
		this.ibr = new InnovationBriefResponses();
	}

	ngOnInit(): void {
		// if(!this.ib_service.ib_responses){
		// 	this.ib_service.getResponses()
		// 		.do(val => console.log("ngOnInit market: ", val))
		// 		.subscribe(val => this.ibr = val);
		// }else{
		// 	this.ibr = this.ib_service.ib_responses;
		// }

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

	createIBR(a_7, a_8, a_9){
		this.ibr.a_7 = a_7;
		this.ibr.a_8 = a_8;
		this.ibr.a_9 = a_9;
		this.ib_service.ib_responses = this.ibr;
		console.log("creating ibr: ", this.ibr);
	}

	setIBR(){
		this.authService.getCurrentUserId()
				.then(uid =>{
					this.ib_service.setIBR(uid);
				})
				.catch(function(err){
					console.log(err);
				});
	}

  exitForm(){
    this.authService.getCurrentUserId()
        .then(uid => {
          this.router.navigateByUrl('launchpad/' + uid);
        })
        .catch(function(err){
          console.log(err);
        });
  }

}
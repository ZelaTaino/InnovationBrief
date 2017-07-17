import { Component } from '@angular/core';
import { InnovationBriefResponses } from '../shared/model/innovation-brief-responses';
import { InnovationBriefService } from '../shared/model/innovation-brief.service';

import { Router } from '@angular/router';

@Component({
	selector:'customer-form',
	templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent {

	ibr: InnovationBriefResponses;

	constructor(private router: Router, private ib_service: InnovationBriefService){
		this.ibr = new InnovationBriefResponses();
	}

	ngOnInit(): void {
		this.ib_service.getResponses()
			.do(val => console.log("ngOnInit: ", val))
			.subscribe(val => this.ibr = val);
	}

	createIBR(a_4, a_5, a_6){
		this.ibr.a_4 = a_4;
		this.ibr.a_5 = a_5;
		this.ibr.a_6 = a_6;
		this.ib_service.ib_responses = this.ibr;
		console.log("creating ibr: ", this.ibr);
	}

	nextScreen(){
		this.router.navigateByUrl('/market-form');
	}
}
import { Component } from '@angular/core';
import { InnovationBriefResponses } from '../shared/model/innovation-brief-responses';
import { InnovationBriefService } from '../shared/model/innovation-brief.service';

import { Router } from '@angular/router';

@Component({
	selector: 'market-form',
	templateUrl: './market-form.component.html'
})
export class MarketFormComponent{

	ibr: InnovationBriefResponses;

	constructor(private router: Router, private ib_service: InnovationBriefService){
		this.ibr = new InnovationBriefResponses();
	}

	ngOnInit(): void {
		this.ib_service.getResponses()
			.do(val => console.log("ngOnInit: ", val))
			.subscribe(val => this.ibr = val);
	}

	createIBR(a_7, a_8, a_9){
		this.ibr.a_7 = a_7;
		this.ibr.a_8 = a_8;
		this.ibr.a_9 = a_9;
		this.ib_service.ib_responses = this.ibr;
		console.log("creating ibr: ", this.ibr);
	}

	setIBR(){
		this.ib_service.setIBR();
	}	

}
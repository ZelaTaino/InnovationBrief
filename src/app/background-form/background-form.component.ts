import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { InnovationBriefService } from '../shared/model/innovation-brief.service';
import { Observable } from 'rxjs/Rx';
import { OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { InnovationBriefResponses } from '../shared/model/innovation-brief-responses';

@Component({
	selector: 'background-form',
	templateUrl: './background-form.component.html'
})

export class BackgroundFormComponent implements OnInit {
	answer1: string = "";
	answer2: string = "";
	answer3: string = "";
	answer_list : string[] = [];
	r: Response;
	response_list : Response[] = [];
	list_from_fb : FirebaseListObservable<any>;

	ibr: InnovationBriefResponses;

	constructor(private router: Router, private ib_service: InnovationBriefService){
		this.ibr = new InnovationBriefResponses();
	}

	createIBR(a_1:string, a_2: string, a_3: string){
		this.ibr.a_1 = a_1;
		this.ibr.a_2 = a_2;
		this.ibr.a_3 = a_3;
		this.ib_service.ib_responses = this.ibr;
		console.log("creating IBR: ", this.ibr);
	}

	nextScreen(){
		this.router.navigateByUrl('/customer-form');
	}

	ngOnInit(): void {
		this.ib_service.getResponses()
			.do(val => console.log("ngOnInit: ", val))
			.subscribe(val => this.ibr = val);
	}

	
	// submitted = false;

	// onSubmit(){this.submitted = true}

	// get diagnostic(){return JSON.stringify();}
}
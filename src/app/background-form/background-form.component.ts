import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Response } from '../models/response';

@Component({
	selector: 'background-form',
	templateUrl: './background-form.component.html'
})
export class BackgroundFormComponent{

	answer1: string = "";
	answer2: string = "";
	answer3: string = "";

	constructor(private router: Router){}

	passAnswers(ans_1:string, ans_2: string, ans_3: string){
		this.answer1 = ans_1;
		this.answer2 = ans_2;
		this.answer3 = ans_3;
	}

	nextScreen(){
		this.router.navigateByUrl('/customer-form');
	}

	// submitted = false;

	// onSubmit(){this.submitted = true}

	// get diagnostic(){return JSON.stringify();}
}
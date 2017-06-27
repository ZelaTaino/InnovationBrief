import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
	selector:'customer-form',
	templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent {

	answer4: string = "";
	answer5: string = "";
	answer6: string = "";

	constructor(private router: Router){}

	passAnswers(ans_4:string, ans_5: string, ans_6: string){
		this.answer4 = ans_4;
		this.answer5 = ans_5;
		this.answer6 = ans_6;
	}

	nextScreen(){
		this.router.navigateByUrl('/market-form');
	}
}
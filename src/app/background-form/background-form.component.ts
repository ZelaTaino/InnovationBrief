import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Response } from '../models/response';

@Component({
	selector: 'background-form',
	templateUrl: './background-form.component.html'
})
export class BackgroundFormComponent{

	constructor(private router: Router){}

	btnClick(){
		console.log("Enter");
		this.router.navigateByUrl('/customer-form');
	}

	model = new Response(1,1,1,"Hey");
	submitted = false;

	onSubmit(){this.submitted = true}

	get diagnostic(){return JSON.stringify(this.model);}
}
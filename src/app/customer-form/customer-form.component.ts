import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
	selector:'customer-form',
	templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent {

	constructor(private router: Router){}

	btnClick(){
		console.log("Enter");
		this.router.navigateByUrl('/market-form');
	}
}
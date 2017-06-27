import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '../models/response';
import { BackgroundFormService } from './background-form.service';
import { Observable } from 'rxjs/Rx';
import { OnInit } from '@angular/core';

@Component({
	selector: 'background-form',
	templateUrl: './background-form.component.html',
	providers: [BackgroundFormService]
})

export class BackgroundFormComponent implements OnInit {
	answer1: string = "";
	answer2: string = "";
	answer3: string = "";
	answer_list : string[] = [];
	r: Response;
	response_list : Response[] = [];

	constructor(private router: Router, private service: BackgroundFormService){}

	passAnswers(ans_1:string, ans_2: string, ans_3: string){
		console.log("Entered pass");
		this.answer1 = ans_1;
		this.answer2 = ans_2;
		this.answer3 = ans_3;
		this.answer_list.push(ans_1, ans_2, ans_3);
		console.log(this.answer_list);
		for(var ans of this.answer_list){
			this.r = new Response(0, 0, 0, ans);
			this.response_list.push(this.r);
		}
		console.log(this.response_list);
		for(var res of this.response_list){
			this.service.pushAnswer(res);
		}
	}

	nextScreen(){
		this.router.navigateByUrl('/customer-form');
	}

	ngOnInit(): void {}

	// submitted = false;

	// onSubmit(){this.submitted = true}

	// get diagnostic(){return JSON.stringify();}
}
import { Component } from '@angular/core';
import { Question } from '../models/question';
import { Router } from '@angular/router';
import { Response } from '../models/response';
import { BackgroundFormService } from './background-form.service';
import { Observable } from 'rxjs/Rx';
import { OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
	list_from_fb : FirebaseListObservable<any>;

	questions : Observable<Question[]>

	constructor(private router: Router, private bgService: BackgroundFormService){}

	passAnswers(ans_1:string, ans_2: string, ans_3: string){
		console.log("Entered pass");
		this.answer1 = ans_1;
		this.answer2 = ans_2;
		this.answer3 = ans_3;
		this.answer_list.push(ans_1, ans_2, ans_3);
		console.log(this.answer_list);
		for(var ans of this.answer_list){
			this.r = new Response(0, 0, ans);
			this.response_list.push(this.r);
		}
		console.log(this.response_list);
		for(var resp of this.response_list){
			this.bgService.pushAnswer(resp);
		}
	}

	nextScreen(){
		this.router.navigateByUrl('/customer-form');
	}

	ngOnInit(): void {
		this.questions = this.bgService.getQuestions().do(console.log);
		this.list_from_fb = this.bgService.readAnswers({limitToLast:3});
		this.parseAnswersArray(this.list_from_fb);
	}

	parseAnswersArray(list: FirebaseListObservable<any>){
		list.subscribe( answers =>{
			answers.forEach(a => {
				console.log(a.answer);
				//Im not sure how to assign it to each answer
				//Im going to try and use question componentsi
			});
		});
	}
	// submitted = false;

	// onSubmit(){this.submitted = true}

	// get diagnostic(){return JSON.stringify();}
}
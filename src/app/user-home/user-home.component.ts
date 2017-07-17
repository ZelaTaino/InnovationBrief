import { Component } from '@angular/core';
import { GeneralService } from '../shared/model/general.service';
import { Form } from '../shared/model/form';

@Component({
  selector: 'user-home',
  templateUrl: './user-home.component.html'
})

export class UserHomeComponent {
  
  title = 'Welcome';
  forms: Form[];

  constructor(private general_service: GeneralService){}

  ngOnInit(){
  	this.getForms();
  }

  getForms(){
  	this.general_service.getForms()
  		.do(val => console.log("getting forms: ", val))
  		.subscribe(val => this.forms = val);
  }

}

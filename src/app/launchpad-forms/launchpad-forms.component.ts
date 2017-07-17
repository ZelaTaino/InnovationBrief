import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../shared/model/general.service';
import { Form } from '../shared/model/form';

@Component({
  selector: 'launchpad-forms',
  templateUrl: './launchpad-forms.component.html',
  styleUrls: ['./launchpad-forms.component.css']
})
export class LaunchpadFormsComponent implements OnInit {

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

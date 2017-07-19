import { Component, OnInit,  } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { GeneralService } from '../shared/model/general.service';
import { Form } from '../shared/model/form';

import 'rxjs/add/operator/switchMap';

import { ActivatedRoute, Params } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'launchpad-forms',
  templateUrl: './launchpad-forms.component.html',
  styleUrls: ['./launchpad-forms.component.css']
})
export class LaunchpadFormsComponent implements OnInit {

  title = 'Welcome';
  forms: Form[];
  completion_indication: Observable<any>;

  constructor(private general_service: GeneralService, private route: ActivatedRoute){}

  ngOnInit(){
    this.getFormsWithCompletion();
  }

  getFormsWithCompletion(){
    let launchpad_id = "";
    this.route.params.subscribe((params: Params) => {
      launchpad_id = params['id'];
    });

    this.general_service.getFormsWithCompletion(launchpad_id)
      .do(val => console.log('testing: ', val))
      .subscribe(val => this.forms = val);
  }

  // getForms(){
  //   this.general_service.getForms()
  //     .do(val => console.log("getting forms: ", val))
  //     .subscribe(val => this.forms = val);
  // }

  // getUserFormCompletion(){
  //   this.route.paramMap
  //     .switchMap((params: ParamMap) => this.general_service.getUserFormCompletion(params.get('id')))
  //     .subscribe(val => this.completion_indication = val);
  // }
}

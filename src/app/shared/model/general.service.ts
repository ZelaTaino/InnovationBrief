import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { LaunchPad } from './launch-pad';
import { Form } from './form';


@Injectable()
export class GeneralService {

  constructor(private db: AngularFireDatabase) {}

  getLaunchPads(): Observable<LaunchPad[]>{
    return this.db.list('launch-pads')
      .do(val => console.log("getting Launch pad list: ", val))
      .map(val => LaunchPad.fromJsonList(val));

  }

  getForms(): Observable<Form[]>{
    return this.db.list('forms/')
      .do(val => console.log(val))
      .map(val => Form.fromJsonList(val));
  }

  // getUserFormCompletion(id: string): Observable<any> {
  //   return this.db.list('userFormCompletion/' + id)
  //     .do(val => console.log(val));
  // }

  getFormsWithCompletion(launchpad_id: string): Observable<Form[]>{
    console.log("test");
    //gives back list of forms
    const forms_list = this.db.list('forms/')
      .do(val => console.log(val))
      .map(val => Form.fromJsonList(val));

    let forms_complete_list = forms_list
      .map(forms => {
        for(let form of forms){
          this.db.object('userFormCompletion/' + launchpad_id + "/" + form.$key)
            .subscribe(val => form.complete = val.$value);
        }
        return forms;
      });

    forms_list.subscribe();

    return forms_complete_list;
  }

  addLaunchPad(client: string, project: string, created_user_id: string){
    
    //pushes launchpad object
    const launch_pad_path = this.db.object('/launch-pads');
    let url = project.split(' ').join('-');
    console.log('url: ', url);
    let launch_pad_object = {client: client, project: project, url: url};
    launch_pad_path.update({ [created_user_id] : launch_pad_object });

    //pushes form status
    const form_completion_path = this.db.object('userFormCompletion/' + created_user_id + '/');
    //get list of forms
    //make each key a form set to false
    let obj = {};
    this.getForms()
      .map(forms => {
        for(let form of forms){
          obj[form.$key] = false;
        }
      })
      .subscribe(val => form_completion_path.update(obj));
  }



}

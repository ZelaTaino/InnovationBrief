import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { LaunchPad } from './launch-pad';
import { Form } from './form';


@Injectable()
export class GeneralService {

  constructor(private db: AngularFireDatabase) {}

  getLaunchPads(): Observable<LaunchPad[]>{

    const lp_list = this.db.list('launch-pads', {
      query: {
        orderByChild: 'client'
      }
    }).map(val => LaunchPad.fromJsonList(val));

    let lp_complete_list = lp_list
      .map(lps => {
        for(let lp of lps){
          this.db.object(`userFormCompletion/${lp.$key}/form0`)
            .subscribe(val => lp.complete = val.$value);
        }
        return lps;
      });

      lp_list.subscribe();

    return lp_complete_list;

  }

  getLaunchPadInfo(lp_id): Observable<LaunchPad>{
    //TODO: dynamic
    return this.db.object(`launch-pads/${lp_id}`)
               .map(val => LaunchPad.fromJson(val));
  }

  getForms(): Observable<Form[]>{
    return this.db.list('forms/')
               .map(val => Form.fromJsonList(val));
  }

  getFormsWithCompletion(launchpad_id: string): Observable<Form[]>{

    //gives back list of forms
    const forms_list = this.db.list('forms/')
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

  addLaunchPad(client: string, project: string, username: string, password:string, created_user_id: string){
    
    //pushes launchpad object
    const launch_pad_path = this.db.object('/launch-pads');
    let launch_pad_object = {client: client, project: project, username: username, password: password};
    
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

  deleteLaunchPad(lp_id){
    this.db.object(`launch-pads/${lp_id}`).remove();
    this.db.object(`userFormCompletion/${lp_id}`).remove();
  }

  editLaunchPad(lp_id, lp){
    let path = this.db.list('/launch-pads');
    path.update(lp_id, { client : lp.client, project: lp.project } );
  }


}

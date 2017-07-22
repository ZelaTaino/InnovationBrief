import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { InnovationBriefService } from '../shared/model/innovation-brief.service';
import { Observable } from 'rxjs/Rx';
import { OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { InnovationBriefResponses } from '../shared/model/innovation-brief-responses';
import { AuthService } from '../security/auth.service';
import { Upload } from '../shared/model/upload';

@Component({
  selector: 'background-form',
  templateUrl: './background-form.component.html'
})

export class BackgroundFormComponent implements OnInit {
  
  ibr: InnovationBriefResponses;
  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(
    private router: Router, 
    private ib_service: InnovationBriefService, 
    private authService: AuthService){
    this.ibr = new InnovationBriefResponses();
  }

  createIBR(a_1:string, a_2: string, a_3: string){
    this.ibr.a_1 = a_1;
    this.ibr.a_2 = a_2;
    this.ibr.a_3 = a_3;
    this.ib_service.ib_responses = this.ibr;
    console.log("creating IBR: ", this.ibr);
  }

  detectFiles(event){
    this.selectedFiles = event.target.files;
  }

  upload(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var idValue = idAttr.nodeValue;

    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.ib_service.upload(this.currentUpload, idValue);
  }

  ngOnInit(): void {
    this.authService.getCurrentUserId()
        .then(uid => {

          console.log('logged in user id: ', uid);
          if(!this.ib_service.ib_responses){
            this.ib_service.getResponses(uid)
                .do(val => console.log("ngOnInit background", val))
                .subscribe(val => this.ibr = val);
          }else{
            this.ibr = this.ib_service.ib_responses;
          }

        })
        .catch(function (err) {
          console.log(err);
        });
  }

  
  // submitted = false;

  // onSubmit(){this.submitted = true}

  // get diagnostic(){return JSON.stringify();}
}
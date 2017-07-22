import { InnovationBriefResponses } from './innovation-brief-responses';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../security/auth.service';
import * as firebase from 'firebase';

import { Upload } from './upload';

@Injectable()
export class InnovationBriefService {

  ib_responses: InnovationBriefResponses;
  private uploadTask: firebase.storage.UploadTask;
  sdkdb: any;
  form_id = "form0";

  constructor(
    private db:AngularFireDatabase, 
    private authService: AuthService){

    this.sdkdb = firebase.database().ref();
    
  }

  setIBR(uid){
    console.log("setting ibr dict", this.ib_responses.getDict());
    const path = this.db.object(`/responses/${uid}`);
    path.update({ [this.ib_responses.$key] : this.ib_responses.getDict() });  
  }

  getResponses(uid): Observable<InnovationBriefResponses>{

    // const authInfo$ = this.authService.authInfo$;
    // // const responses_from_user = 
    // return authInfo$
    //   .switchMap(authInfo => this.db.object('responses/' + authInfo.getUserId() + '/form0'))
    //   .do(val => console.log('getting stuff: ', val))
    //   .map(val => InnovationBriefResponses.fromJson(val));

    // return this.authService.getCurrentUserId()
    //            .switchMap(authInfo => this.db.object('responses/' + authInfo.getUserId() + '/form0'))
    //            .do(val => console.log('getting stuff: ', val))
    //            .map(val => InnovationBriefResponses.fromJson(val));



    return this.db.object('responses/' + uid + "/" + this.form_id)
      .do(val => console.log(val))
      .map(val => InnovationBriefResponses.fromJson(val));

  }

  upload(upload: Upload, idValue: string){
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`/uploads/${upload.file.name}`).put(upload.file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => {
        console.log(err);
      },
      () => {
        upload.url = this.uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload, idValue);
      }

    );
  }

  private saveFileData(upload: Upload, idValue: string): Observable<any>{

    const newUploadKey = this.sdkdb.child('uploads').push().key;

    console.log(newUploadKey);
    let dataToSave = {};
    dataToSave[`uploads/${newUploadKey}`] = upload;
    dataToSave[`uploadsPerForm/user0/${this.form_id}/${idValue}/${newUploadKey}`] = true;

    return this.firebaseUpdate(dataToSave);

    // this.db.list('/uploads').push(upload); //get key that was pusehd
    // this.db.list('uploadsPerForm/' + "user0/" + "form0/" + "a_1_files");
  }

  firebaseUpdate(dataToSave){
    const subject = new Subject();

    this.sdkdb.update(dataToSave)
        .then(
          val => {
            subject.next(val);
            subject.complete();
          },
          err => {
            subject.error(err);
            subject.complete();
          }
        );

    return subject.asObservable();
  }

}
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

  //-------QUESTION METHODS
  

  //--------- RESPONSE METHODS

  //passes answers to db when user submits
  setIBR(uid){
    console.log("setting ibr dict", this.ib_responses.getDict());
    const path = this.db.object(`/responses/${uid}`);
    path.update({ [this.ib_responses.$key] : this.ib_responses.getDict() });  
  }

  //loads responses when user enters form
  getResponses(uid): Observable<InnovationBriefResponses>{
    return this.db.object('responses/' + uid + "/" + this.form_id)
      .do(val => console.log(val))
      .map(val => InnovationBriefResponses.fromJson(val));

  }


  //-------- UPLOAD METHODS

  //save file in storage
  upload(upload: Upload, idValue: string, uid){
    //saves in storage
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`/uploads/${upload.file.name}`).put(upload.file);

    //handles the success, failure, and progress of the upload
    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => {
        console.log(err);
      },
      () => {
        //once successful it passes to method to save to db
        upload.url = this.uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload, idValue, uid);
      }

    );
  }

  //passes upload to two nodes in db at one time
  private saveFileData(upload: Upload, idValue: string, uid): Observable<any>{

    //get future upload key
    const newUploadKey = this.sdkdb.child('uploads').push().key;
    
    //holds all data in dictionary and which nodes to pass to
    let dataToSave = {};
    dataToSave[`uploads/${newUploadKey}`] = upload;
    dataToSave[`uploadsPerForm/${uid}/${this.form_id}/${idValue}/${newUploadKey}`] = true;

    return this.firebaseUpdate(dataToSave);
  }

  //update method that returns the obseravble to the data pushed
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

  getUploads(uid, tag_id): Observable<Upload[]>{

    const uploads$ = this.db.list(`uploadsPerForm/${uid}/${this.form_id}/${tag_id}`)
    .do(val => console.log("get uplaods:", val));

    return uploads$.map(uploadsPerForm => 
      uploadsPerForm.map(u => 
        this.db.object('uploads/' + u.$key)))
            .flatMap(fb_observs => Observable.combineLatest(fb_observs))
            .do(val => console.log("stuff: ", val));
  }

  deleteUpload(uid, tag_id, upload){
    this.deleteFileData(uid, tag_id, upload.$key);
    this.deleteFileStorage(upload.name);
  }

  private deleteFileData(uid, tag_id, key) {

    let dataToSave = {};
    dataToSave[`uploads/${key}`] = null;
    dataToSave[`uploadsPerForm/${uid}/${this.form_id}/${tag_id}/${key}`] = null;

    return this.firebaseUpdate(dataToSave);
  }

  private deleteFileStorage(name: string){
    const storageRef = firebase.storage().ref();
    storageRef.child(`uploads/${name}`).delete();
  }

}
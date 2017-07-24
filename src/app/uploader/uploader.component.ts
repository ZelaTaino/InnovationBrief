import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { InnovationBriefService } from '../shared/model/innovation-brief.service';
import { Upload } from '../shared/model/upload';
import { AuthService } from '../security/auth.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  @Input() tag_id: string;
  @ViewChild('input_elem') input_elem: any;

  currentUpload: Upload;
  selectedFiles: FileList;
  uploads$: Observable<Upload[]>;

  constructor(
    private ib_service: InnovationBriefService,
    private authService: AuthService) {}

  //this works because it could handle its own info
  ngOnInit() {
    this.authService.getCurrentUserId()
        .then( uid => {
          this.uploads$ = this.ib_service.getUploads(uid, this.tag_id);
        })
        .catch(err => {
          console.log(err)
        });
  }

  //detecets when file is about to be uploaded
  detectFiles(event){
    this.selectedFiles = event.target.files;
  }

  //uploads a file and saves to db
  upload(event){

    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);

    this.authService.getCurrentUserId()
        .then(uid => {
          console.log("IDVALUE: ", this.tag_id);
          this.ib_service.upload(this.currentUpload, this.tag_id, uid);
          this.input_elem.nativeElement.value = "";
          this.selectedFiles = null;
        })
        .catch( err => {
          console.log(err);
        });
  }

  deleteUpload(upload){
    this.authService.getCurrentUserId()
        .then(uid => {
          this.ib_service.deleteUpload(uid, this.tag_id, upload);
        })
        .catch(err => {
          console.log(err)
        });
  }

}

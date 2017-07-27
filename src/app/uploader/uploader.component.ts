import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { InnovationBriefService } from '../shared/model/innovation-brief.service';
import { Upload } from '../shared/model/upload';
import { AuthService } from '../security/auth.service';
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
  label_text = "Choose file";

  constructor(
    private ib_service: InnovationBriefService,
    private authService: AuthService) {}

  //this works because it could handle its own info
  ngOnInit() {}

  //detecets when file is about to be uploaded
  detectFiles(event){
    this.selectedFiles = event.target.files;

    let filename = "";
    filename = event.target.value.split('\\').pop();

    if(filename){
      this.label_text = filename;
    }else{
      this.label_text = "Choose file";
    }
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
          this.label_text = "Choose file";
          this.selectedFiles = null;
          if(this.currentUpload.progress == 100){
            this.currentUpload = null;
          }
        })
        .catch( err => {
          console.log(err);
        });
  }

  // deleteUpload(upload){
  //   this.authService.getCurrentUserId()
  //       .then(uid => {
  //         this.ib_service.deleteUpload(uid, this.tag_id, upload);
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       });
  // }

}

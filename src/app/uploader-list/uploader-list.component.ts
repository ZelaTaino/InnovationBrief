import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Upload } from '../shared/model/upload';
import { InnovationBriefService } from '../shared/model/innovation-brief.service';
import { AuthService } from '../security/auth.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'uploader-list',
  templateUrl: './uploader-list.component.html',
  styleUrls: ['./uploader-list.component.css']
})
export class UploaderListComponent implements OnInit, OnChanges{

  @Input() tag_id: string;
  @Input() launchpad_id: any;
  uploads$: Observable<Upload[]>;

  constructor(
    private ib_service: InnovationBriefService,
    private authService: AuthService,
    private route: ActivatedRoute,) { }

  ngOnInit() {}

  ngOnChanges(changes){
    this.getUploads();
  }

  getUploads(){
    this.authService.getCurrentUserId()
        .then( uid => {
          if(this.authService.isAdmin(uid)){
            this.uploads$ = this.ib_service.getUploads(this.launchpad_id, this.tag_id);
          }else{
            this.uploads$ = this.ib_service.getUploads(uid, this.tag_id);
          }
        })
        .catch(err => {
          console.log(err)
        });
  }

  deleteUpload(upload){
    this.authService.getCurrentUserId()
        .then(uid => {
          this.ib_service.deleteUpload(uid, this.tag_id, upload);
          this.getUploads();
        })
        .catch(err => {
          console.log(err)
        });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '../shared/model/form';
import { AuthService } from '../security/auth.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  @Input()
  forms: Form[];

  constructor(
    private activeRoute: ActivatedRoute, 
    private route: Router, 
    private authService: AuthService) {}

  ngOnInit() {}

  goToForm(url){
    //if admin, go to answer sheet
    console.log(url);

    this.authService.getCurrentUserId()
        .then(uid => {
          if(this.authService.isAdmin(uid)){
            this.activeRoute.params.subscribe((params: Params) => {
              this.route
                  .navigate( ['innovation-brief-answers/' + params['id']], {relativeTo: this.activeRoute} );
            });
          }else{
            this.route
                  .navigate( [url], {relativeTo: this.activeRoute} );
          }
        })
        .catch(function(err){
          console.log(err);
        });

    //if user, go to innovation brief

  }

}

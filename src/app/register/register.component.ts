import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../security/auth.service";
import {Router} from "@angular/router";
import { ActivatedRoute, Params } from '@angular/router';
import { GeneralService } from '../shared/model/general.service';
import { LaunchPad } from '../shared/model/launch-pad'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {

  register_form: FormGroup;
  error_message: string;
  submitted = false;
  match: boolean;
  launchPad: any;
  is_edit: boolean;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private general_service: GeneralService,
              private route: ActivatedRoute) {
    this.register_form = this.fb.group({
      client: [null, Validators.required],
      project: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirm: [null, Validators.required]
    });
  }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {

      if(params['lp-id']){
        this.is_edit = true;
        this.getLaunchPadInfo(params['lp-id']);
      }

    });
  }

  getLaunchPadInfo(lp_id){
    this.general_service.getLaunchPadInfo(lp_id)
      .subscribe(lp => {
        this.register_form.setValue({client: lp.client, project: lp.project, username: lp.username, password: lp.password, confirm: null});
        this.register_form.controls['username'].disable();
        this.register_form.controls['password'].disable();
      });
  }

  isPasswordMatch() {
    const val = this.register_form.value;
    this.match = val && val.password && val.password == val.confirm;
    return val && val.password && val.password == val.confirm;
  }

  signUp(form: any) {
    this.submitted = true;
    let value = form.value;

    if(!value.client || !value.project || !value.username || !value.password || !value.confirm){
      this.error_message = "Please fill in required fields";
    }else if(!this.register_form.controls['password'].valid){
      this.error_message = "Password must be at least be six characters long";
    }else if(!this.isPasswordMatch()){
      this.error_message = "Passwords don't match";
    }else{
      this.authService.signUp(value.username, value.password, value.client, value.project)
        .subscribe(
            () => {
              console.log(value.username);
              console.log(value.password);
              console.log(this.authService.getCreatedUID());
              this.general_service.addLaunchPad(value.client, value.project, value.username, value.password, this.authService.getCreatedUID());
              alert('User created successfully !');
              this.authService.login('laas_stl@fake.com', 'LaaS2016');
              this.register_form.reset();
            }
        );
    }

    
  }

  editLaunchPad(){
    this.route.params.subscribe((params: Params) => {
      let value = this.register_form.value;
      let lp = {client: value.client, project: value.project}
      this.general_service.editLaunchPad(params['lp-id'], lp);
      this.router.navigate(["/launchpad-dashboard"]);
    });
  }

  deleteLaunchPad(){
    this.route.params.subscribe((params: Params) => {
      this.general_service.deleteLaunchPad(params['lp-id']);
      this.router.navigate(["/launchpad-dashboard"]);
    });
  }


}


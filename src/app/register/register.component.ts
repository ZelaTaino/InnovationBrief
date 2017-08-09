import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../security/auth.service";
import {Router} from "@angular/router";
import { GeneralService } from '../shared/model/general.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  register_form: FormGroup;
  error_message: string;
  submitted = false;
  match: boolean;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private general_service: GeneralService) {

    this.register_form = this.fb.group({
      client: [null, Validators.required],
      project: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirm: [null, Validators.required]
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
    let username_email = value.username + "@fake.com";

    if(!value.client || !value.project || !value.username || !value.password || !value.confirm){
      this.error_message = "Please fill in required fields";
    }else if(!this.register_form.controls['password'].valid){
      this.error_message = "Password must be at least be six characters long";
    }else if(!this.isPasswordMatch()){
      this.error_message = "Passwords don't match";
    }else{
      this.authService.signUp(username_email, value.password)
        .subscribe(
            () => {
              this.general_service.addLaunchPad(value.client, value.project, this.authService.getCreatedUID());
              alert('User created successfully !');
              this.router.navigate(['launchpad-dashboard']);
            }
        );
    }

    
  }


}


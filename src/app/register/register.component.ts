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

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private general_service: GeneralService) {

    this.form = this.fb.group({
      client: ['',Validators.required],
      project: ['', Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required],
      confirm: ['',Validators.required]
    });


  }

    isPasswordMatch() {
      const val = this.form.value;
      return val && val.password && val.password == val.confirm;
    }

    signUp() {
      const val = this.form.value;
      let username_email = val.username + "@fake.com";

      this.authService.signUp(username_email, val.password)
          .subscribe(
              () => {
                  this.general_service.addLaunchPad(val.client, val.project, this.authService.getCreatedUID());
                  alert('User created successfully !');
                  this.router.navigateByUrl('/launchpad-dashboard');
              },
              err => alert(err)
          );
    }


}


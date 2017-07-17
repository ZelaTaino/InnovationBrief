import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from "@angular/forms";
import { AuthService } from "../security/auth.service";
import { Router } from "@angular/router";
import {AuthInfo} from "../security/auth-info";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  form:FormGroup;
  authInfo:AuthInfo;

  constructor(private fb:FormBuilder, private authService: AuthService,
                private router:Router) {
      this.form = this.fb.group({
          email: ['',Validators.required],
          password: ['',Validators.required]
      });
  }

  ngOnInit() {
  }


  login() {
      const formValue = this.form.value;
      this.authService.authInfo$.subscribe(authInfo =>  this.authInfo = authInfo);
      
      this.authService.login(formValue.email, formValue.password)
          .subscribe(
              // need to handle login failure here
              (auth) => {
                if (auth.uid == this.authInfo.getAdminId()) {
                  this.router.navigate(['/admin-home']);
                } else {
                  this.router.navigate(['/user-home']);
                }
              }
          );
  }

  register() {
      this.router.navigate(['/register']);
  }
}

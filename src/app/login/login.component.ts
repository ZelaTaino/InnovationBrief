import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from "@angular/forms";
import { AuthService } from "../security/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import {AuthInfo} from "../security/auth-info";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  form:FormGroup;
  authInfo:AuthInfo;
  can_register: number;

  constructor(private fb:FormBuilder, private authService: AuthService,
    private router:Router, private route: ActivatedRoute) {
      this.form = this.fb.group({
          email: ['',Validators.required],
          password: ['',Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.do(val => console.log(val)).subscribe(params => this.can_register = +params['can_register'] || 0);
  }

  login() {
      const formValue = this.form.value;
      this.authService.authInfo$.subscribe(authInfo =>  this.authInfo = authInfo);
      
      this.authService.login(formValue.email, formValue.password)
          .subscribe(
              // need to handle login failure here
              (auth) => {
                if (auth.uid == this.authInfo.getAdminId()) {
                  this.router.navigate(['/launchpad-dashboard']);
                } else {
                  //TODO: call getUserId to config navigation
                  //hard coded user0
                  //ask brady if we should make another set of paths?
                  this.router.navigate(['launchpad-dashboard/launchpad/' + auth.uid]);
                }
              }
          );
  }

  register() {
      this.router.navigate(['/register']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from "@angular/forms";
import { AuthService } from "../security/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login_form:FormGroup;

  can_register: number;
  submitted = false;
  error_message: string;

  constructor(
    private fb:FormBuilder, 
    private authService: AuthService,
    private router:Router, 
    private route: ActivatedRoute) {
      this.login_form = this.fb.group({
        username: [null, Validators.required],
        password: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.do(val => console.log(val)).subscribe(params => this.can_register = +params['can_register'] || 0);
  }
  
  login(value: any) {
    console.log(value);
    this.submitted = true;

    if(!this.login_form.controls['username'].valid && !this.login_form.controls['password'].valid){
      this.error_message = "Looks like you forgot to enter a username and password!";
    }else if(!this.login_form.controls['username'].valid){
      this.error_message = "Looks like you forgot to enter a username!";
    }else if(!this.login_form.controls['password'].valid){
      this.error_message = "Looks like you forgot to enter a password!";
    }else{
      let username_email = value.username + "@fake.com";
      console.log(value.password);
      this.authService.login(username_email, value.password)
        .subscribe(
            (auth) => {
              if (this.authService.isAdmin(auth.uid)) {
                this.router.navigate(['/launchpad-dashboard']);
              } else {
                this.router.navigate(['/innovation-brief']);
              }
            },
            (error) =>{
              this.error_message = "Oops, wrong email or password";
            });
    }
  }

}

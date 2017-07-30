import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(
    private router: Router,
    private auth_service: AuthService
    ) { }

  ngOnInit() {
  }

  startForm(){
    this.router.navigate(["innovation-brief"]);
  }

  logout(){
    this.auth_service.logout();
  }


}

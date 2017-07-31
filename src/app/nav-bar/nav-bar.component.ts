import { Component, OnInit } from '@angular/core';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private auth_service: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.auth_service.logout();
  }

}

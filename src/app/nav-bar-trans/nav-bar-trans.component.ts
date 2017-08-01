import { Component, OnInit } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar-trans',
  templateUrl: './nav-bar-trans.component.html',
  styleUrls: ['./nav-bar-trans.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})
export class NavBarTransComponent implements OnInit {

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;

  constructor(
    private auth_service: AuthService,
    private router: Router) { }

  updateHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
  }

  goToHome(){
    this.auth_service.getCurrentUserId()
      .then(uid => {
        if(this.auth_service.isAdmin(uid)){
          this.router.navigate(['launchpad-dashboard']);
        }else{
          this.router.navigate(['innovation-brief']);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {

  @ViewChild('scroll_content') scroll_content: ElementRef;

  constructor(private auth_service: AuthService){}

  scrollTo(){
    let element = document.getElementById('about');
    this.scroll_content.nativeElement.scrollTop(100);
  }

  logout(){
    this.auth_service.logout();
  }



}

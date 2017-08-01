import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { WindowRefService } from '../shared/model/window.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {

  @ViewChild('about') element: ElementRef;
  win: Window;
  private offSet: number;

  constructor(
    private auth_service: AuthService,
    private _win: WindowRefService){
    this.win = _win.nativeWindow
  }

  scrollTo(yPoint: number, duration: number) {
    setTimeout(() => {
      this.win.window.scrollTo(0, yPoint)
    }, duration);
    return;
  }
    
  smoothScroll() {
    var startY = currentYPosition();
    var stopY = this.element.nativeElement.offsetTop - 60; //grabs about position
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      this.win.window.scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 100);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
        this.scrollTo(leapY, timer * speed);
        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
    }
    for (var i = startY; i > stopY; i -= step) {
      this.scrollTo(leapY, timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
  }
}

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { WindowRefService } from '../shared/model/window.service';

@Component({
  selector: 'app-question-cover',
  templateUrl: './question-cover.component.html',
  styleUrls: ['./question-cover.component.css']
})
export class QuestionCoverComponent {

  @ViewChild('guidance') element: ElementRef;
  win: Window;
  private offSet: number;

  constructor(
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
    var stopY = this.element.nativeElement.offsetTop - 40; //grabs guidance position
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

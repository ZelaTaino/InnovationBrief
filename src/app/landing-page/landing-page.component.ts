import { Component, ViewChild, ElementRef } from '@angular/core';
import {} from ''

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {

  @ViewChild('scroll_content') scroll_content: ElementRef;

  scrollTo(){
    let element = document.getElementById('about');
    this.scroll_content.nativeElement.scrollTop(100);
  }

}

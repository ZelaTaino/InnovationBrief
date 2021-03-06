import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'nav-bubble',
  templateUrl: './nav-bubble.component.html',
  styleUrls: ['./nav-bubble.component.css']
})
export class NavBubbleComponent implements OnInit {

  @Input() bubble_id: any;
  @Input() nav: string;
  is_active: boolean;
  is_section: boolean;


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { this.is_active = false; }

  ngOnInit() {

    if(this.bubble_id == 'cover' || 
        this.bubble_id == 'confirmation' || 
          this.bubble_id == 'innovation-brief'){
      this.is_section = true;
    }

    this.route.params.subscribe((params: Params) => {

      if(this.bubble_id == "innovation-brief"){
        this.is_active = true;

      }else if(+params['id'] >= this.bubble_id){
        this.is_active = true;

      }else if(this.router.url == "/innovation-brief/confirmation"){
        this.is_active = true;

      }else if(this.router.url == "/innovation-brief/cover"){
        if(this.bubble_id < 10 || this.bubble_id == 'cover'){
          this.is_active = true;
        }

      }else if(+params['id'] >= 10 && this.bubble_id == 'cover'){
        this.is_active = true;
        
      }else{
        this.is_active = false;
      }

    });
  }

  navTo(){
    if(this.bubble_id == 'innovation-brief'){
      this.router.navigate([this.bubble_id]);
    }else{
      this.router.navigate(["innovation-brief", this.bubble_id]);
    }
    
  }



}

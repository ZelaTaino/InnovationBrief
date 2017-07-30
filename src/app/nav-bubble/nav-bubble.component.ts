import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'nav-bubble',
  templateUrl: './nav-bubble.component.html',
  styleUrls: ['./nav-bubble.component.css']
})
export class NavBubbleComponent implements OnInit {

  @Input() q_id: number;
  @Input() nav: string;
  is_active: boolean;


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { this.is_active = false; }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log("bubble: ", +params['id']);

      if(this.router.url == "/innovation-brief/confirmation"){
        console.log("route: ", this.router.url);
        this.is_active = true;
      }else if(+params['id'] >= this.q_id){
        this.is_active = true;
      }else{
        this.is_active = false;
      }
    });
  }

  navTo(){
    if(this.nav){
      this.router.navigate(['innovation-brief', this.nav]);
    }else{
      this.router.navigate(['innovation-brief', this.q_id]);
    }
  }



}

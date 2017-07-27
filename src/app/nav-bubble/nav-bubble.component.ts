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
  is_active = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log("INITITITITII");
    this.route.params.subscribe((params: Params) => {
      console.log("bubble: ", +params['id']);
      if(+params['id'] >= this.q_id){
        this.is_active = true;
      }else{
        this.is_active = false;
      }
    });
  }

  navTo(){
    this.router.navigate(['innovation-brief', this.q_id]);
  }



}

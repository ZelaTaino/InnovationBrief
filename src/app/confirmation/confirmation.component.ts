import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  //TODO: Add num questions to form to make dynamic

  num_bubbles = 11;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  submit(){
    this.router.navigate(['innovation-brief/completed']);
  }

  prev(){
    console.log("TEST");
    this.router.navigate(['innovation-brief/11']);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-bubbles',
  templateUrl: './nav-bubbles.component.html',
  styleUrls: ['./nav-bubbles.component.css']
})
export class NavBubblesComponent implements OnInit {

  @Input() num_bubbles: number;
  bubbles_array: any;

  constructor() {}

  ngOnInit() {
    // console.log('testingg: ', this.num_bubbles);
    // this.num_bubbles_array = 
    //   Array.apply(null, {length: this.num_bubbles}).map(function(value, index){
    //     return index + 1;
    //   });

    this.bubbles_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'cover', 10, 11, 'confirmation']
  }

}

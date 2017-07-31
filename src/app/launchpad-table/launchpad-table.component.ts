import { Component, OnInit, Input } from '@angular/core';
import { LaunchPad } from '../shared/model/launch-pad';

@Component({
  selector: 'launchpad-table',
  templateUrl: './launchpad-table.component.html',
  styleUrls: ['./launchpad-table.component.css']
})
export class LaunchpadTableComponent implements OnInit {

  @Input() launchpads: LaunchPad[];

  constructor() { }

  ngOnInit() {
    console.log(this.launchpads);
  }

}

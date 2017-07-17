import { Component, OnInit } from '@angular/core';

import { GeneralService } from '../shared/model/general.service';

import { LaunchPad } from '../shared/model/launch-pad';

@Component({
  selector: 'launchpad-dashboard',
  templateUrl: './launchpad-dashboard.component.html',
  styleUrls: ['./launchpad-dashboard.component.css']
})
export class LaunchpadDashboardComponent implements OnInit {

  title = 'Welcome Admin';
  launch_pads: LaunchPad[];

  constructor(private general_service: GeneralService){}

  ngOnInit(){
    this.getLaunchPads();
  }

  getLaunchPads(){
    this.general_service.getLaunchPads()
      .do(val => console.log("getLaunchPads: ", val))
      .subscribe(val => this.launch_pads = val);
  }
}

import { Component } from '@angular/core';

import { GeneralService } from '../shared/model/general.service';

import { LaunchPad } from '../shared/model/launch-pad';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html'
})

export class AdminHomeComponent {
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
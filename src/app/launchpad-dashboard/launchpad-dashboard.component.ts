import { Component, OnInit } from '@angular/core';
import {AuthService} from "../security/auth.service";
import { GeneralService } from '../shared/model/general.service';
import { LaunchPad } from '../shared/model/launch-pad';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'launchpad-dashboard',
  templateUrl: './launchpad-dashboard.component.html',
  styleUrls: ['./launchpad-dashboard.component.css']
})

export class LaunchpadDashboardComponent implements OnInit {

  title = 'Welcome Admin';
  launch_pads: LaunchPad[];

  constructor(private general_service: GeneralService,
              private authService:AuthService){}

  ngOnInit(){
    this.getLaunchPads();

    // EXAMPLE OF GETTING CURRENT USER ID
    this.authService.getCurrentUserId()
        .then(function (uid) {
          console.log(uid);
        })
        .catch(function (err) {
          console.log(err);
        });
  }

  getLaunchPads(){
    this.general_service.getLaunchPads()
      .subscribe(val => this.launch_pads = val);
  }
}

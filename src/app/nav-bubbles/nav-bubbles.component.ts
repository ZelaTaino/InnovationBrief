import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'nav-bubbles',
  templateUrl: './nav-bubbles.component.html',
  styleUrls: ['./nav-bubbles.component.css']
})
export class NavBubblesComponent implements OnInit {

  @Input() num_bubbles: number;
  bubbles_array: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    
    this.authService.getCurrentUserId()
      .then(uid => {
        if(this.authService.isAdmin(uid)){
          this.bubbles_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }else{
          this.bubbles_array = ['innovation-brief', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'cover', 10, 11, 'confirmation']
        }
      })
      .catch(err => {
        console.log(err);
      });

    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent implements OnInit {
  question_id: number;
  launchpad_id: string;
  num_questions = 11;
  next_button_text: string;
  prev_button_text: string;
  is_next_cover: boolean;
  is_prev_cover: boolean;
  hidden_button: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.next_button_text ="Next";
      this.prev_button_text = "Previous";
    }

  ngOnInit() {

    if(this.router.url == "/innovation-brief/confirmation"){
      this.hidden_button = true;
    }else{
      this.hidden_button = false;
    }

    this.route.params.subscribe((params: Params) => {

      this.question_id = +params['id'];
      this.launchpad_id = params['lp-id'];

      if(this.question_id == 9){
        this.is_next_cover = true;
        this.next_button_text = "Challenge Statement";
      }else if(this.question_id == 11){
        this.is_next_cover = true;
        this.next_button_text = "Overview";
      }else{
        this.is_next_cover = false;
        this.next_button_text = "Next";
      }

      if(this.question_id == 1){
        this.is_prev_cover = true;
        this.prev_button_text = "Home";
      }else if(this.question_id == 10){
        this.is_prev_cover = true;
        this.prev_button_text = "Challenge Statement";
      }else{
        this.is_prev_cover = false;
        this.prev_button_text = "Previous";
      }

      // if(this.question_id == 9 || this.question_id == 11){
      //   this.is_next_cover = true;
      //   if(this.question_id == 9){
      //     this.next_button_text = "Challenge Statement";
      //   }else if(this.question_id == 11){
      //     this.next_button_text = "Overview";
      //   }else{
      //     this.next_button_text ="Next";
      //   }
      // }else{
      //   this.is_next_cover = false;
      // }

      // if(this.question_id == 1 || this.question_id == 10){
      //   this.is_prev_cover = true;
      //   if(this.question_id == 1){
      //     this.prev_button_text = "Home";
      //   }else if(this.question_id == 10){
      //     this.prev_button_text = "Challenge Statement";
      //   }else{
      //     this.prev_button_text = "Previous";
      //   }
      // }else{
      //   this.is_prev_cover = false;
      // }

    });

  }

  next(){

    if(this.question_id == 9 && !this.launchpad_id){
      this.router.navigate(['innovation-brief/cover',]);

    }else if((this.question_id + 1) !<= this.num_questions){
      let next_id = this.question_id + 1;
      this.router.navigate(["../", next_id], { relativeTo: this.route });

    }else if(this.question_id == this.num_questions){
      this.router.navigate(['innovation-brief/confirmation']);

    }else if(this.router.url == "/innovation-brief/cover"){
      this.router.navigate(["../", 10], { relativeTo: this.route });
    }
  }

  previous(){

    //if on confirmation
    if(this.router.url == "/innovation-brief/confirmation"){
      this.router.navigate(["../", 11], { relativeTo: this.route });

    //if on 10 go back to cover
    }else if(this.question_id == 10 && !this.launchpad_id){
      this.router.navigate(['innovation-brief/cover']);

    //if next id is not negative
    }else if((this.question_id - 1) !> 0){
      let prev_id = this.question_id - 1;
      this.router.navigate(["../", prev_id], { relativeTo: this.route });
    
    // if on 1 page
    }else if(this.question_id == 1){
      this.router.navigate(["innovation-brief"]);

    // if on cover go to 9
    }else if(this.router.url == "/innovation-brief/cover"){
      this.router.navigate(["../", 9], { relativeTo: this.route });
    }

  }


}

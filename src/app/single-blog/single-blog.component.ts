import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {

  displayPost: number;
  
  constructor() { 
  }

  ngOnInit(): void {
    if (history.state.post_id == 1) {
      this.displayPost = 1;
    }
    else {
      this.displayPost = 2;
    }
  }

}

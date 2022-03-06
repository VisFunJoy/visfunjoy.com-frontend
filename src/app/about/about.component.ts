import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  rainArray = [];
  constructor() { 
  }
  
  ngOnInit(): void {


    for(let i = 1; i<=150; i++) {
      this.rainArray.push(i);
    }
  }

}

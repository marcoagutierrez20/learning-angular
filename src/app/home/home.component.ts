import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCount: number = 0; //clickCount is of type number and initalized to 0

  constructor() { }

  ngOnInit(): void {
  }

  countClick() { //countClick function will add 1 onto clickCount
    this.clickCount += 1;
  }
}

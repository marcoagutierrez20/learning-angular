import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  typedText: string = ''; //typedText is of type string and initnalized to empty string.

  constructor() { }

  ngOnInit(): void {
  }

}

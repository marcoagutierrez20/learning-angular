import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  pokemon: Object | any;


  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getPokemon().subscribe(data => {
      this.pokemon = data;
      console.log(this.pokemon);
    })
  }
}

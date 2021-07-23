import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  pokemons: Object | any;


  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getPokemon().subscribe(data => {
      this.pokemons = data;
      this.pokemons = this.pokemons.results;
      console.log(this.pokemons);
    })
  }
}

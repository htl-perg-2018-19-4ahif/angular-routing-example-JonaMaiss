import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';
import { Observable } from 'rxjs/Observable';

interface IPokemon{
  name: string;
  url: Url;
}

interface IPokelist{
  count: number;
  results: IPokemon[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public url: string = 'https://pokeapi.co/api/v2/pokemon/';
  public pokelist: IPokemon[];

  constructor(private httpClient: HttpClient) {  
  }

  async getPokemons() {
    let count: IPokelist = await this.httpClient.get<IPokelist>(this.url).toPromise();
    this.pokelist = (await this.httpClient.get<IPokelist>(this.url+'?limit=' + count.count).toPromise()).results;
  };

}

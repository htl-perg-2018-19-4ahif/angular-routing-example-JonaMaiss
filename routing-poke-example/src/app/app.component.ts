import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface IPokemon{name: string;}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private httpClient: HttpClient) {  
  }

  async getPokemons() {
    const pokemons = await this.httpClient.get<IPokemon[]>('https://pokeapi.co/api/v2/pokemon/').toPromise();
  };

}

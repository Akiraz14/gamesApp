import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env';
import { Card, Pokemon } from '../models';
import { Observable, forkJoin } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FindSameService {

  private http = inject(HttpClient);

  private readonly apiUrl: string = environment.pokeApiUrl;
  private readonly totalPokemons = 1025;
  private pokemonList = new Map<number, Pokemon>();

  private _board: Card[] = [];

  get board() { return this._board; }
  get randomId() { return Math.floor(Math.random() * this.totalPokemons) + 1; }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokemon/${id}/`;
    return this.http.get<Pokemon>(url);
  }

  getPokemons(ids: number[]): void {
    const pokemonToSearch: Observable<Pokemon>[] = [];
    ids.forEach(id => {
      if (!this.pokemonList.has(id)) {
        pokemonToSearch.push(this.getPokemon(id));
      }
    });

    forkJoin(pokemonToSearch).subscribe((pokemonsSearched) => {
      pokemonsSearched.forEach(p => {
        this.pokemonList.set(p.id, p);
      });
      this.updateCards();
    })
  }

  updateCards() {
    this._board.forEach(card => {
      const pokemon = this.pokemonList.get(card.id);
      card.imgUrl = pokemon?.sprites.other?.['official-artwork'].front_default
        ?? pokemon?.sprites?.other?.home.front_default ?? '';
      card.name = pokemon?.name;
    })
  }

  createBoard(pairs: number): boolean {
    //Restar board
    const pokemons = new Set<number>();
    this._board = [];

    while (pokemons.size < pairs / 2) {
      const id = this.randomId;
      if (pokemons.has(id)) { continue; }

      const card: Card = {
        id: id,
        isFlipped: false,
      };
      this._board.push(structuredClone(card));
      this._board.push(structuredClone(card));
      pokemons.add(id);
    }

    const shuffle = (array: any[]) => { return array.sort(() => Math.random() - 0.5); };
    shuffle(this._board);
    shuffle(this._board);

    this.getPokemons(Array.from(pokemons));
    return true;
  }
  
}

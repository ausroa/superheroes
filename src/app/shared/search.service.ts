import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  heroSearch: string;

  constructor() { }

  onSearch(heroSearch: string) {
    this.heroSearch = heroSearch;
    console.log(heroSearch);

  }
}

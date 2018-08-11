import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  heroSearch: string;
  didSearch = false;

  constructor() { }

  onSearch(heroSearch: string) {
    this.heroSearch = heroSearch;
    this.didSearch = true;
    console.log(heroSearch, this.didSearch);
  }
}

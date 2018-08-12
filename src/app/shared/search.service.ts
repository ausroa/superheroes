import { Injectable } from '@angular/core';
import {HeroDataService} from './hero-data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  heroSearch: string;
  didSearch = false;

  constructor(private heroData: HeroDataService) { }

  onSearch(heroSearch: string) {
    this.heroSearch = heroSearch;
    this.didSearch = true;
  }
}

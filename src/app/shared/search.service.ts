import { Injectable } from '@angular/core';
import {HeroDataService} from './hero-data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  heroSearch: string;
  didSearch = false;

  constructor(private heroService: HeroDataService) { }

  onSearch(heroSearch: string) {
    return this.heroService.getHero(heroSearch);
  }
}

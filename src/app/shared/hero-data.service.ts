import { Injectable, OnInit } from '@angular/core';
import { Hero } from '../hero-list/hero-detail/hero.model';
import { SearchService } from './search.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HeroDataService implements OnInit{

  heroes: Hero[] = [
    new Hero('Superman', 94, 100, 100, 100, 100, 85, 'https://img00.deviantart.net/e8ce/i/2016/209/a/4/superman__alex_ross_by_davidbaldo-dabqua0.jpg'),
    new Hero('Batman', 81, 40, 29, 55, 63, 90, 'https://orig00.deviantart.net/93e7/f/2011/262/2/9/batman_color_by_txboi001-d4ad6u5.jpg')
  ]

  constructor() { }

  ngOnInit() {

  }
}

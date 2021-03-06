import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { Hero } from './hero-detail/hero.model';
import { HeroDataService } from '../shared/hero-data.service';
import { Route, ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  didSearch = false;
	@Input() allowView: boolean;

  constructor(private searchService: SearchService,
							private heroService: HeroDataService,
							private route: ActivatedRoute,
							private router: Router) { }

  ngOnInit() {

  }

  onSearch(heroSearch: string) {
    this.heroService.getHero(heroSearch);
    this.didSearch = true;
  }
}

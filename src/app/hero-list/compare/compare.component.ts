import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-detail/hero.model';
import { HeroDataService } from '../../shared/hero-data.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
	heroes: Hero [] = [];
	heroes2: Hero [] = [];

  constructor(private heroService: HeroDataService) { }

  ngOnInit() {
		this.heroes = this.heroService.heroes;
		this.heroes2 = this.heroService.heroes2;
  }

	compareHeroes() {
		
	}
}

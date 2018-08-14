import {Component, Input, OnInit} from '@angular/core';
import {HeroDataService} from '../../shared/hero-data.service';
import {Hero} from './hero.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	allowView = false;
	heroSearchResults: any[];
  heroes: Hero [] = [];
	heroes2: Hero [] = [];
	didSearch = false;

  constructor(private heroService: HeroDataService,
							private router: Router,
							private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroes = this.heroService.heroes;
		this.heroes2 = this.heroService.heroes2;
		this.didSearch = true;
  }

	reloadPage() {
		// this.router.navigate(['/servers']);
	}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { Hero } from '../hero-list/hero-detail/hero.model';
import { HeroDataService } from '../shared/hero-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	heroes: Hero [] = [];
	allowView = false;

  constructor(private router: Router,
							private route: ActivatedRoute,
							private heroService: HeroDataService) { }

  ngOnInit() {
		this.heroes = this.heroService.heroes;
  }

  onLoadHeroes() {
		this.router.navigate(['heroes'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

	onLoadDetails(id: number) {
		console.log(this.route.snapshot.queryParams);
		console.log(this.route.snapshot.fragment);
		this.route.fragment.subscribe();
		this.router.navigate(['/heroes', id, 'details'], {queryParams: {allowDetails: 1}, fragment: 'Loading'});
	}
}

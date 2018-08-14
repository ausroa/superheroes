import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero-detail/hero.model';
import { HeroDataService } from '../../shared/hero-data.service';
import { Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero-description',
  templateUrl: './hero-description.component.html',
  styleUrls: ['./hero-description.component.css']
})
export class HeroDescriptionComponent implements OnInit, OnDestroy {
	private hero: {name: string, id: number};
	paramSubscription: Subscription;

  constructor(private route: ActivatedRoute,
							private heroService: HeroDataService) { }

  ngOnInit() {
		this.hero = {
			name: this.route.snapshot.params['name'],
			id: this.route.snapshot.params['id']
		}
		this.paramSubscription = this.route.params
			.subscribe(
				(params: Params) => {
					this.hero.name = params['name'];
					this.hero.id = params['id'];
				}
			);
  }
	ngOnDestroy() {
		this.paramSubscription.unsubscribe();
	}

}

import { Injectable, OnInit } from '@angular/core';
import { Hero } from '../hero-list/hero-detail/hero.model';
import { SearchService } from './search.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroDataService implements OnInit {
  heroes: Hero[] = [
    new Hero('Superman', 94, 100, 100, 100, 100, 85, 'https://static3.srcdn.com/wordpress/wp-content/uploads/2018/04/Superman-by-Dan-Jurgens-in-Action-Comics-1000.jpg?q=50&fit=crop&w=798&h=407')
  ]
	heroes2: Hero [] = [
		new Hero('Batman', 81, 40, 29, 55, 63, 90, 'https://i.kinja-img.com/gawker-media/image/upload/s--_iU5hnjV--/c_scale,f_auto,fl_progressive,q_80,w_800/naiqjp2jbpvcylp09utj.png')
	]
	private query: string = '';
	private API_KEY: string = environment.HERO_API_KEY;
	private API_URL: string = environment.HERO_API_URL;
	private SEARCH_API: string = environment.HERO_API_SEARCH;
	private URL: string = this.API_URL + this.API_KEY + this.SEARCH_API;
	private heroName: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

	getHero(heroSearch: string) {
		return this.http.get(this.URL + heroSearch)
		.subscribe(data => {
			console.log(data);
		})
	}
}

import { Component, OnInit } from '@angular/core';
import {HeroDataService} from '../../shared/hero-data.service';
import {Hero} from './hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroes: Hero [] = [];

  constructor(private heroService: HeroDataService) { }

  ngOnInit() {
    this.heroes = this.heroService.heroes;
  }

}

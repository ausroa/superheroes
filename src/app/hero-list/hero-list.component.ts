import {Component, OnInit } from '@angular/core';
import {SearchService} from '../shared/search.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  constructor(private searchService: SearchService) { }

  ngOnInit() {

  }

  onSearch(heroSearch: string) {
    this.searchService.onSearch(heroSearch);
  }
}

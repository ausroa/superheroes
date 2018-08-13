import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-list/hero-detail/hero-detail.component';
import { HeroLinkColorDirective } from './shared/hero-link-color.directive';
import { HeroDescriptionComponent } from './hero-list/hero-description/hero-description.component';
import { CompareComponent } from './hero-list/compare/compare.component';
import { HomeComponent } from './home/home.component';

const appRoute: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'heroes', component: HeroListComponent },
	{ path: 'compare', component: CompareComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroLinkColorDirective,
    HeroDescriptionComponent,
    CompareComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
		FormsModule,
		RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

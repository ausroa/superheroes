import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-list/hero-detail/hero-detail.component';
import { HeroLinkColorDirective } from './shared/hero-link-color.directive';
import { HeroDescriptionComponent } from './hero-list/hero-description/hero-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroLinkColorDirective,
    HeroDescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

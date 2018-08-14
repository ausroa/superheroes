import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDescriptionComponent } from "./hero-list/hero-description/hero-description.component";
import { HeroDetailComponent } from "./hero-list/hero-detail/hero-detail.component";
import { CompareComponent } from "./hero-list/compare/compare.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Routes, RouterModule } from "@angular/router";

const appRoute: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'heroes', component: HeroListComponent, children: [
		{ path: ':id/:name', component: HeroDescriptionComponent },
	]},
	{ path: 'heroes/:id/:name/details', component: HeroDetailComponent },
	{ path: 'compare', component: CompareComponent },
	{ path: 'not-found', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoute)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}

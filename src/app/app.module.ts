import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeCodingComponent } from './home-coding/home-coding.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArtSquareComponent } from './art-components/art-square/art-square.component';
import { WebsitesComponent } from './orange-services/websites/websites.component';
import { PhotographyComponent } from './orange-services/photography/photography.component';
import { AdwordsComponent } from './orange-services/adwords/adwords.component';
import { SeoComponent } from './orange-services/seo/seo.component';
import { ConsultingComponent } from './orange-services/consulting/consulting.component';
import { CodingComponent } from './orange-services/coding/coding.component';
import { ContactBtnComponent } from './shared/contact-btn/contact-btn.component';
import { ArtworkComponent } from './orange-services/artwork/artwork.component';
import { CopywritingComponent } from './orange-services/copywriting/copywriting.component';
import { FooterComponent } from './footer/footer.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { HttpClientModule } from '@angular/common/http';

import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
const appRoutes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutUsComponent },
  {
    path: 'pricing',
    loadChildren: './pricing/pricing.module#PricingModule',
    data: { preload: true }

  },
  { path: 'contact', component: ContactComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'coding', component: CodingComponent },
  { path: 'seo', component: SeoComponent },
  { path: 'adwords', component: AdwordsComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'websites', component: WebsitesComponent },
  { path: 'artwork', component: ArtworkComponent },
  { path: 'copywriting', component: CopywritingComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'works',
    loadChildren: './works/works.module#WorksModule',
    data: { preload: true }
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    HomePageComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ContactComponent,
    HomeCodingComponent,
    ArtSquareComponent,
    WebsitesComponent,
    PhotographyComponent,
    AdwordsComponent,
    SeoComponent,
    ConsultingComponent,
    CodingComponent,
    ContactBtnComponent,
    ArtworkComponent,
    CopywritingComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

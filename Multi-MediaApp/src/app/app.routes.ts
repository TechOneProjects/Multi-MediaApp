import { Routes } from '@angular/router';
import { AboutHakiComponent } from './about-haki/about-haki.component';
import { GeneralAboutUsPageComponent } from './general-about-us-page/general-about-us-page.component';
import { JanetteComponent } from './janette/janette.component';
import { AppComponent } from './app.component';
import { MediaPage2Component } from './media-page-2/media-page-2.component';
import { ChasesMusicComponent } from './chases-music/chases-music.component';
import { AboutChaseComponent } from './about-chase/about-chase.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {path: "about", component: GeneralAboutUsPageComponent},
    {
        path: "music", component: ChasesMusicComponent, title: "Music"
    },
    {path: "about", component: GeneralAboutUsPageComponent},
    { path: "janette", component: JanetteComponent },
    { path: "movie", component: MediaPage2Component },
    {
        path: "chase",
        component: AboutChaseComponent,
        title: "Chase"
    },
    {
        path: "gallery",
        component: GalleryPageComponent,
        title: "MultiMediaApp | Gallery"
    },
    {
        path: "haki",
        component: AboutHakiComponent
    },
    {
      path: "",
      component: HomePageComponent,
      title: "MultiMediaApp | Home"
    }
];

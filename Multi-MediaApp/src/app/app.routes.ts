import { Routes } from '@angular/router';
import { SargeAboutMeComponent } from './sarge-about-me/sarge-about-me.component';
import { SargePageComponent } from './sarge-page/sarge-page.component';
import { AboutHakiComponent } from './about-haki/about-haki.component';
import { GeneralAboutUsPageComponent } from './general-about-us-page/general-about-us-page.component';
import { JanetteComponent } from './janette/janette.component';
import { AppComponent } from './app.component';
import { MediaPage2Component } from './media-page-2/media-page-2.component';
import { MediaPage4Component } from './media-page-4/media-page-4.component';
import { ChasesMusicComponent } from './chases-music/chases-music.component';
import { AboutChaseComponent } from './about-chase/about-chase.component';
import { AboutDanielVComponent } from './about-daniel-v/about-daniel-v.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { VideoGamesComponent } from './video-games/video-games.component';
import { HasanAboutMeComponent } from './hasan-about-me/hasan-about-me.component';
export const routes: Routes = [
  {
    path: "music", component: ChasesMusicComponent, title: "Music"
  },
  { path: "about", component: GeneralAboutUsPageComponent },
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
    },
    {
        path: "daniel-v",
        component: AboutDanielVComponent
  },
  {
    path: "thoughts",
    component: MediaPage4Component
  },
  {
    path: "login",
    component: LoginPageComponent
  },
   {
        path:"character",component :SargePageComponent
    },
    {
        path:"sargeaboutme",component :SargeAboutMeComponent
    },
    {
        path: "music", component: ChasesMusicComponent, title: "Music"
    },
    {path: "about", component: GeneralAboutUsPageComponent},
    { path: "janette", component: JanetteComponent },
    { path: "movie", component: MediaPage2Component },
    { path: "games", component: VideoGamesComponent },
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
        path: "hasan",
        component: HasanAboutMeComponent,
        title: "Hasan"
    },
    {
      path: "",
      component: HomePageComponent,
      title: "MultiMediaApp | Home"
    }
  
];

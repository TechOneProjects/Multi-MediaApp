import { Routes } from '@angular/router';
import { JanetteComponent } from './janette/janette.component';
import { AppComponent } from './app.component';
import { MediaPage2Component } from './media-page-2/media-page-2.component';
import { AboutChaseComponent } from './about-chase/about-chase.component';
import { AboutDanielVComponent } from './about-daniel-v/about-daniel-v.component';
import path from 'path';

export const routes: Routes = [
  { path: "janette", component: JanetteComponent },
  { path: "movie", component: MediaPage2Component },
  {
    path: "chase",
    component: AboutChaseComponent,
    title: "Chase"
  },
  {
    path: "daniel-v", component: AboutDanielVComponent,
    title: "Daniel-V"
  },
];

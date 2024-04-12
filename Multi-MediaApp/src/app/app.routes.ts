import { Routes } from '@angular/router';
import { JanetteComponent } from './janette/janette.component';
import { AppComponent } from './app.component';
import { MediaPage2Component } from './media-page-2/media-page-2.component';
import { ChasesMusicComponent } from './chases-music/chases-music.component';
export const routes: Routes = [
    {
        path: "music", component: ChasesMusicComponent, title: "Music"
    },

  {path: "janette", component: JanetteComponent },
  {path: "movie", component: MediaPage2Component},
];

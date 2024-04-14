import { Routes } from '@angular/router';
import { JanetteComponent } from './janette/janette.component';
import { AppComponent } from './app.component';
import { MediaPage2Component } from './media-page-2/media-page-2.component';
import { MediaPage4Component } from './media-page-4/media-page-4.component';

export const routes: Routes = [
  {path: "janette", component: JanetteComponent },
  {path: "movie", component: MediaPage2Component},
  {path: "thoughts", component: MediaPage4Component}
];

import { Routes } from '@angular/router';
import { JanetteComponent } from './janette/janette.component';
import { AppComponent } from './app.component';
import { MediaPage2Component } from './media-page-2/media-page-2.component';
import { SargePageComponent } from './sarge-page/sarge-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GeneralAboutUsPageComponent } from './general-about-us-page/general-about-us-page.component';

export const routes: Routes = [
  {path: "about", component: GeneralAboutUsPageComponent},
  {path: "janette", component: JanetteComponent },
  {path: "movie", component: MediaPage2Component},
    {
        path: "", 
        component: HomepageComponent
    },
    {
        path: "sargepage",
        component: SargePageComponent
    },
    {
        path: "sargeaboutpage",
        component: SargePageComponent
    },
];

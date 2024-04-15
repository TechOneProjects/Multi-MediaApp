import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SargeAboutMeComponent } from './sarge-about-me/sarge-about-me.component';
// import { JanetteComponent } from './janette/janette.component';
// import { MediaPage2Component } from './media-page-2/media-page-2.component';
// import { ChasesMusicComponent } from './chases-music/chases-music.component';
// import { AboutChaseComponent } from './about-chase/about-chase.component';
import { SargePageComponent } from './sarge-page/sarge-page.component';

export const routes: Routes = [
    {
        path:"sargepage",component :SargePageComponent
    },
    {
        path:"sargeaboutme",component :SargeAboutMeComponent
    }
//     {
//         path: "music", component: ChasesMusicComponent, title: "Music"
//     },

//   {path: "janette", component: JanetteComponent },
//   {path: "movie", component: MediaPage2Component},
//     {
//         path: "chase",
//         component: AboutChaseComponent,
//         title: "Chase"
//     }
];

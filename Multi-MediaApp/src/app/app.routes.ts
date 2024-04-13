import { Routes } from '@angular/router';
import { AboutHakiComponent } from './about-haki/about-haki.component';
import { GeneralAboutUsPageComponent } from './general-about-us-page/general-about-us-page.component';

export const routes: Routes = [
    {
        path: "",
        component: GeneralAboutUsPageComponent
    },
    {
        path: "haki",
        component: AboutHakiComponent
    }
];

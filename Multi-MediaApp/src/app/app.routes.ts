import { Routes } from '@angular/router';
import { SargePageComponent } from './sarge-page/sarge-page.component';
import { HomepageComponent } from './homepage/homepage.component';


export const routes: Routes = [

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

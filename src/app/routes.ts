import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

/**
 * Application routes.
 */
export const APP_ROUTES : Routes = [

    { path:'login', component:LoginPageComponent },
    { path:'home', component:HomePageComponent },

    // in cse its the home
    { path:'', pathMatch:'full', component:HomePageComponent },

    // incase not matching url then goto home page
    { path:'**', component:HomePageComponent }
];

import { Routes } from '@angular/router';

// import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRouteGuard } from './login-page/login-route-guard';
// import { HomeRouteGuard } from './home-page/home-route-guard';

/**
 * Application routes.
 */
export const APP_ROUTES : Routes = [

    { path:'login', component:LoginPageComponent, canActivate:[LoginRouteGuard] },
    // { path:'home', component:HomePageComponent, canActivate:[HomeRouteGuard] },

    // in cse its the home
    { path:'', pathMatch:'full', redirectTo:'/home' },

    // incase not matching url then goto home page
    { path:'**', redirectTo:'/home' }
];

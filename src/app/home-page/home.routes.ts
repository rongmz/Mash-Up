import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { HomeRouteGuard } from './home-route-guard';

/**
 * Home module routes.
 */
export const HOME_ROUTES : Routes = [

    { path:'home', component:HomePageComponent, canActivate:[HomeRouteGuard] },


];

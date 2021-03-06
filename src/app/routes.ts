import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { HomeRouteGuard } from './home-page/home-route.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRouteGuard } from './login-page/login-route.guard';

import { LandingComponent } from "./features/landing/landing.component";
import { DriveComponent } from "./features/drive/drive.component";

import { SettingsComponent } from './features/settings/settings.component';

/**
 * Application routes.
 */
export const APP_ROUTES: Routes = [

  { path: 'login', component: LoginPageComponent, canActivate: [LoginRouteGuard] },

  // home page
  {
    path: '', canActivate: [HomeRouteGuard], component: HomePageComponent,
    children: [
      // settings
      { path: 'settings', component: SettingsComponent },

      // shared level locations
      { path: 'drive', component: DriveComponent }, // drive home
      { path: 'drive/:drive_id', component: DriveComponent },

      // other shared locations like dropbox etc.


      // default path.
      { path: '', component: LandingComponent },
    ]
  },

  // { path:'', pathMatch:'full', redirectTo:'d'},
  // incase not matching url then goto home page
  { path: '**', redirectTo: '' }
];

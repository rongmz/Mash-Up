import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from './ng-material';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRouteGuard } from './login-page/login-route.guard';

import { APP_ROUTES } from './routes';
import { ServicesModule } from './services';
import { BackgroundComponent } from './features/background/background.component';

import { HomePageComponent } from './home-page/home-page.component';
import { HomeRouteGuard } from "./home-page/home-route.guard";
import { LandingComponent } from './features/landing/landing.component';
import { DriveComponent } from './features/drive/drive.component';
import { AddUserComponent } from './features/add-user/add-user.component';
import { RemoveUserComponent } from './features/remove-user/remove-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BackgroundComponent,
    HomePageComponent,
    LandingComponent,
    DriveComponent,
    AddUserComponent,
    RemoveUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgMaterialModule, 
    Angular2FontawesomeModule,
    ServicesModule,

    RouterModule.forRoot(APP_ROUTES, { enableTracing: !environment.production }),
  ],
  providers: [
    LoginRouteGuard,
    HomeRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

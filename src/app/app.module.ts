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
import { LoginRouteGuard } from './login-page/login-route-guard';
import { HomeModule } from "./home-page/home.module";

import { APP_ROUTES } from './routes';
import { ServicesModule } from './services';
import { BackgroundComponent } from './features/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgMaterialModule, 
    Angular2FontawesomeModule,
    ServicesModule,
    HomeModule,

    RouterModule.forRoot(APP_ROUTES, { enableTracing: !environment.production }),
  ],
  providers: [
    LoginRouteGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

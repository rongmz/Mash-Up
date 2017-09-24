import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from './ng-material';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRouteGuard } from './login-page/login-route-guard';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRouteGuard } from './home-page/home-route-guard';

import { APP_ROUTES } from './routes';
import { ProgressService } from './services/progress.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES, { enableTracing: !environment.production }),
    NgMaterialModule, 
  ],
  providers: [
    ProgressService,
    LoginRouteGuard,
    HomeRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

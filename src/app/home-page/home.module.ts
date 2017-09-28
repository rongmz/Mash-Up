import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from '../ng-material';

import { environment } from '../../environments/environment';

import { HOME_ROUTES } from "./home.routes";
import { ServicesModule } from "../services";

import { HomePageComponent } from './home-page.component';
import { HomeRouteGuard } from './home-route-guard';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgMaterialModule, 
    ServicesModule,
    RouterModule.forChild(HOME_ROUTES),
    
  ],
  providers: [
    HomeRouteGuard
  ],
})
export class HomeModule { }
